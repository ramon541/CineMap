import { TouchableOpacity, View, ViewToken } from 'react-native';
import { memo, use, useRef, useState } from 'react';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';

import SliderItem from '../SliderItem';
import SliderPagination from '../SliderPagination';
import { useRouter } from 'expo-router';

function Slider({ itemList }: SliderProps) {
    const { navigate } = useRouter();
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();

    //= =================================================================================
    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const onViewableItemsChanged = ({
        viewableItems,
    }: {
        viewableItems: ViewToken[];
    }) => {
        if (
            viewableItems[0]?.index !== undefined &&
            viewableItems[0]?.index !== null
        ) {
            setPaginationIndex(viewableItems[0]?.index);
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);

    //= =================================================================================
    return (
        <View>
            <Animated.FlatList
                ref={ref}
                data={itemList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigate({
                                pathname: '/movie/[id]',
                                params: {
                                    id: item.id,
                                    title: item.title,
                                    poster_path: item.poster_path,
                                },
                            });
                        }}>
                        <SliderItem
                            id={item.id}
                            backdrop_path={item.backdrop_path}
                            title={item.title}
                            release_date={item.release_date}
                            poster_path={item.poster_path}
                            index={index}
                            scrollX={scrollX}
                        />
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                viewabilityConfigCallbackPairs={
                    viewabilityConfigCallbackPairs.current
                }
                onEndReachedThreshold={0.5}
                removeClippedSubviews={false}
            />
            <SliderPagination
                itemList={itemList}
                scrollX={scrollX}
                paginationIndex={paginationIndex}
            />
        </View>
    );
}

//= =================================================================================
export default memo(Slider);

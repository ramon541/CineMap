import { View, ViewToken } from 'react-native';
import { memo, useRef, useState } from 'react';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';

import SliderItem from '../SliderItem';
import SliderPagination from '../SliderPagination';

function Slider({ itemList }: SliderProps) {
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
                    <SliderItem
                        id={item.id}
                        backdrop_path={item.backdrop_path}
                        title={item.title}
                        release_date={item.release_date}
                        index={index}
                        scrollX={scrollX}
                    />
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

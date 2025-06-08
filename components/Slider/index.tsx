import { memo, useEffect, useRef, useState } from 'react';
import SliderItem from '../SliderItem';
import Animated, {
    scrollTo,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated';
import { Dimensions, View, ViewToken } from 'react-native';
import SliderPagination from '../SliderPagination';

const { width: screenWidth } = Dimensions.get('screen');

function Slider({ itemList }: SliderProps) {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const [data, setData] = useState(itemList);
    const ref = useAnimatedRef<Animated.FlatList<any>>();

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
            viewableItems[0].index !== undefined &&
            viewableItems[0].index !== null
        ) {
            setPaginationIndex(viewableItems[0].index);
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);

    return (
        <View>
            <Animated.FlatList
                ref={ref}
                data={data}
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

export default Slider;

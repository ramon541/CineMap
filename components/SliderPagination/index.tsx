import { memo } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import {
    Extrapolation,
    SharedValue,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { Colors } from '../../styles';

const { width: screenWidth } = Dimensions.get('screen');

function SliderPagination({
    itemList,
    paginationIndex,
    scrollX,
}: SliderPaginationProps<SharedValue<number>>) {
    return (
        <View style={styles.container}>
            {itemList.map((_, index) => {
                const pgAnimationStyle = useAnimatedStyle(() => {
                    const dotWidth = interpolate(
                        scrollX.value,
                        [
                            (index - 1) * screenWidth,
                            index * screenWidth,
                            (index + 1) * screenWidth,
                        ],
                        [8, 20, 8],
                        Extrapolation.CLAMP
                    );

                    return {
                        width: dotWidth,
                    };
                });

                return (
                    <Animated.View
                        key={`dot-${index}-${new Date().getTime()}`}
                        style={[
                            pgAnimationStyle,
                            styles.dot,
                            {
                                backgroundColor:
                                    paginationIndex === index
                                        ? Colors.primary
                                        : Colors.darkGrey,
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
}
// = ============================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    dot: {
        backgroundColor: Colors.primary,
        width: 10,
        height: 10,
        marginHorizontal: 8,
        borderRadius: 8,
    },
});

// = ============================================================
export default SliderPagination;

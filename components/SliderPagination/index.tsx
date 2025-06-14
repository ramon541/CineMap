import { Animated, StyleSheet, View } from 'react-native';
import { memo } from 'react';
import { SharedValue } from 'react-native-reanimated';

import { Colors } from '../../styles';

function SliderPagination({
    itemList,
    paginationIndex,
}: SliderPaginationProps<SharedValue<number>>) {
    return (
        <View style={styles.container}>
            {itemList.map((_, index) => {
                return (
                    <Animated.View
                        key={`dot-${index}-${new Date().getTime()}`}
                        style={[
                            paginationIndex === index
                                ? styles.dotSelected
                                : styles.dot,
                            styles.dotContainer,
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
    dotContainer: {
        marginHorizontal: 8,
        borderRadius: 999,
    },
    dotSelected: {
        backgroundColor: Colors.primary,
        width: 12,
        height: 12,
    },
    dot: {
        backgroundColor: Colors.primaryOpacity,
        width: 8,
        height: 8,
    },
});

// = ============================================================
export default memo(SliderPagination);

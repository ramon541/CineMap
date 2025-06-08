import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Text from '../Text';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';
import { formatDateToReadableString } from '../../utils';
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('screen');

const imageWidth = 295;
const imageHeight = 194;
const imageBorderRadius = 8;

function SliderItem({
    id,
    backdrop_path,
    title,
    release_date,
    index,
    scrollX,
}: SliderItemProps<SharedValue<number>>) {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [
                            (index - 1) * screenWidth,
                            index * screenWidth,
                            (index + 1) * screenWidth,
                        ],
                        [-screenWidth * 0.25, 0, screenWidth * 0.25],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [
                            (index - 1) * screenWidth,
                            index * screenWidth,
                            (index + 1) * screenWidth,
                        ],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                },
            ],
        };
    });

    return (
        <Animated.View style={[styles.container, rnAnimatedStyle]}>
            <Image
                style={styles.image}
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            />
            <LinearGradient
                colors={[Colors.transparent, Colors.blackTransparent]}
                style={styles.background}
            >
                <View style={styles.textContainer}>
                    <Text
                        text={title}
                        fontFamily={EFontFamily.Bold}
                        fontSize={16}
                    />
                    <Text
                        text={`Lançamento: ${formatDateToReadableString(
                            release_date
                        )}`}
                        fontFamily={EFontFamily.SemiBold}
                        fontSize={12}
                    />
                </View>
            </LinearGradient>
        </Animated.View>
    );
}
// = ============================================================
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        borderRadius: imageBorderRadius,
    },
    background: {
        position: 'absolute',
        padding: 24,
        width: imageWidth,
        height: imageHeight,
        borderRadius: imageBorderRadius,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

// = ============================================================
export default SliderItem;

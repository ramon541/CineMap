import { memo } from 'react';
import Text from '../Text';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('screen');

const imageWidth = 295;
const imageHeight = 194;
const imageBorderRadius = 8;

function SliderItem({
    item: { id, backdrop_path, title, overview },
    index,
}: SliderItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    borderRadius: imageBorderRadius,
                }}
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.background}
            />
            <Text text={title} />
            <Text text={overview} />
        </View>
    );
}
// = ============================================================
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
    },
    background: {
        position: 'absolute',
        padding: 24,
        width: imageWidth,
        height: imageHeight,
        borderRadius: imageBorderRadius,
    },
});

// = ============================================================
export default memo(SliderItem);

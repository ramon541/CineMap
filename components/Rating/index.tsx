import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function Rating({ vote_average }: RatingProps) {
    function format(rating: number) {
        return rating.toFixed(1).replace(',', '.');
    }

    //= =================================================================================
    return (
        <View style={styles.container}>
            <Icon name="star" size={16} color={Colors.orange} />
            <Text
                text={format(vote_average)}
                fontSize={12}
                fontFamily={EFontFamily.SemiBold}
                color={Colors.orange}
            />
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        gap: 4,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 8,
    },
});

//= =================================================================================
export default memo(Rating);

import { memo } from 'react';
import Text from '../Text';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function GenreCard({ name, selected }: GenreCardProps) {
    return (
        <View style={[styles.container, selected && styles.containerSelected]}>
            <Text
                text={name}
                fontSize={12}
                fontFamily={EFontFamily.SemiBold}
                color={selected ? Colors.primary : Colors.white}
            />
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSelected: {
        borderRadius: 8,
        backgroundColor: Colors.shape,
    },
});

//= =================================================================================
export default memo(GenreCard);

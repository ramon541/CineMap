import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import { IconTextProps } from '../../types/components/iconText';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function IconText({ iconProps, textProps }: IconTextProps) {
    return (
        <View style={styles.container}>
            <Icon size={16} color={Colors.grey} {...iconProps} />
            <Text
                fontSize={12}
                fontFamily={EFontFamily.SemiBold}
                color={Colors.grey}
                {...textProps}
            />
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
});

//= =================================================================================
export default memo(IconText);

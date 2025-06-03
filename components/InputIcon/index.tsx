import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { memo } from 'react';

import TextInput from '../TextInput';
import Icon from '../Icon';
import { IInputIconProps } from '../../types/components/inputIcon';

function InputIcon({ onPressIcon, ...props }: IInputIconProps) {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <TextInput {...props.inputProps} />
            </View>
            <TouchableOpacity onPress={onPressIcon}>
                <Icon {...props.iconProps} />
            </TouchableOpacity>
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textWrapper: { flex: 1 },
});

//= =================================================================================
export default memo(InputIcon);

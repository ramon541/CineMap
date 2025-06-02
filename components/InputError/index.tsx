import { StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';

import InputBase from '../InputBase';
import Text from '../Text';
import { EFontFamily } from '../../enums';
import { Colors } from '../../styles';

function InputError({
    error,
    label,
    children,
}: PropsWithChildren<IInputErrorProps>) {
    return (
        <View>
            <InputBase label={label}>{children}</InputBase>
            <Text
                text={error || ' '}
                fontSize={12}
                fontFamily={EFontFamily.SemiBold}
                color={Colors.red}
                style={styles.textWrapper}
            />
        </View>
    );
}

// = ============================================================
const styles = StyleSheet.create({
    textWrapper: { marginTop: 8, marginLeft: 16 },
});

// = ============================================================
export default InputError;

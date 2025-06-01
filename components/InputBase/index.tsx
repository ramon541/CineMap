import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';
import Text from '../Text';

function InputBase({ label, children }: PropsWithChildren<IInputBaseProps>) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text
                    text={label}
                    fontFamily={EFontFamily.SemiBold}
                    fontSize={12}
                />
            </View>
            {children}
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.shape,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 999,
    },
    labelContainer: {
        position: 'absolute',
        top: -8,
        left: 10,
        backgroundColor: Colors.background,
        paddingHorizontal: 6,
    },
});

//= =================================================================================
export default InputBase;

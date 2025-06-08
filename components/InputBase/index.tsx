import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';
import Text from '../Text';

function InputBase({
    label,
    primary = true,
    children,
}: PropsWithChildren<IInputBaseProps>) {
    return (
        <View
            style={
                primary ? styles.containerPrimary : styles.containerSecondary
            }
        >
            {primary && label && (
                <View style={styles.labelContainerPrimary}>
                    <Text
                        text={label ?? ''}
                        fontFamily={EFontFamily.SemiBold}
                        fontSize={12}
                    />
                </View>
            )}
            {children}
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    containerPrimary: {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.shape,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 999,
    },
    labelContainerPrimary: {
        position: 'absolute',
        top: -8,
        left: 10,
        backgroundColor: Colors.background,
        paddingHorizontal: 6,
    },
    containerSecondary: {
        backgroundColor: Colors.shape,
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 999,
    },
});

//= =================================================================================
export default InputBase;

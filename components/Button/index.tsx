import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../styles';

function Button({ onPress, children }: PropsWithChildren<ButtonProps>) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.wrapper}>{children}</View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 200,
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Button;

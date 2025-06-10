import { memo, PropsWithChildren } from 'react';
import { Modal as ModalRN, View, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

function FullScreenModal({
    isVisible,
    onRequestClose,
    children,
}: PropsWithChildren<FullScreenModalProps>) {
    return (
        <ModalRN
            visible={isVisible}
            animationType="slide"
            transparent
            navigationBarTranslucent
            statusBarTranslucent
            onRequestClose={onRequestClose}>
            <View style={styles.container}>{children}</View>
        </ModalRN>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

//= =================================================================================
export default memo(FullScreenModal);

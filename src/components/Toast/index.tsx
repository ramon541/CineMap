import { Text } from 'react-native';
import { Snackbar } from 'react-native-paper';

import { useGlobalStore } from '../../store/useSharedGlobalState';

export default function Toast() {
    const { snackbarInfo } = useGlobalStore();
    return (
        <Snackbar
            onDismiss={() => null}
            visible={snackbarInfo.visible}
            style={{
                backgroundColor: snackbarInfo.backgroundColor,
            }}>
            <Text
                style={{
                    color: snackbarInfo.textColor,
                }}>
                {snackbarInfo.text}
            </Text>
        </Snackbar>
    );
}

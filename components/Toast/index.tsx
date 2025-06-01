import { Snackbar } from 'react-native-paper';

import { useGlobalStore } from '../../store/useSharedGlobalState';
import { Text } from '../';

export default function Toast() {
    const { snackbarInfo } = useGlobalStore();
    return (
        <Snackbar
            onDismiss={() => null}
            visible={snackbarInfo.visible}
            style={{
                backgroundColor: snackbarInfo.backgroundColor,
            }}>
            <Text text={snackbarInfo.text} color={snackbarInfo.textColor} />
        </Snackbar>
    );
}

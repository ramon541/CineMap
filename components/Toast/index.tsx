import { Snackbar } from 'react-native-paper';

import { useGlobalStore } from '../../store/useSharedGlobalState';
import Text from '../Text';

export default function Toast() {
    const { snackbarInfo, setSnackbarInfo } = useGlobalStore();
    return (
        <Snackbar
            onDismiss={() => {
                setSnackbarInfo({
                    visible: false,
                    text: '',
                    textColor: '',
                    backgroundColor: '',
                });
            }}
            visible={snackbarInfo.visible}
            style={{
                backgroundColor: snackbarInfo.backgroundColor,
            }}>
            <Text text={snackbarInfo.text} color={snackbarInfo.textColor} />
        </Snackbar>
    );
}

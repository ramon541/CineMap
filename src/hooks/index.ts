import { useCallback } from 'react';

import { wait } from '../utils';
import { Colors } from '../styles';
import { useGlobalStore } from '../store/useSharedGlobalState';

//= =================================================================================
export function useShowSnackbar() {
    const { snackbarInfo, setSnackbarInfo } = useGlobalStore();

    return useCallback(
        ({
            duration = 3000,
            text,
            textColor = Colors.white,
            backgroundColor = Colors.shape,
        }: IUseShowSnackbarProps) => {
            setSnackbarInfo({
                visible: true,
                text: text,
                textColor: textColor,
                backgroundColor: backgroundColor,
            });

            wait(duration).then(() => {
                setSnackbarInfo({
                    visible: false,
                    text: '',
                    textColor: '',
                    backgroundColor: '',
                });
            });
        },
        [snackbarInfo]
    );
}

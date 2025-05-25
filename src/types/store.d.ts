interface IAppState {
    snackbarInfo: ISnackbarProps;
    setSnackbarInfo: (snackbarInfo: ISnackbarProps) => void;
}

interface IStorageService {
    getItem: <T>(key: string) => T | null;
    setItem: <T>(key: string, value: T) => void;
    removeItem: (key: string) => void;
    removeAll: VoidFunction;
}

interface ISnackbarProps {
    visible: boolean;
    text: string;
    textColor: string;
    backgroundColor: string;
}

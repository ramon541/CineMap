interface IAppState {
    user: Omit<IUser, 'password' | 'createdAt' | 'updatedAt'> | null;
    setUser: (
        user: Omit<IUser, 'password' | 'createdAt' | 'updatedAt'> | null
    ) => void;

    token: IToken | null;
    setToken: (token: IToken | null) => void;

    snackbarInfo: ISnackbarProps;
    setSnackbarInfo: (snackbarInfo: ISnackbarProps) => void;

    globalGenres: Array<GenreTMDB>;
    setGlobalGenres: (genres: Array<GenreTMDB>) => void;
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

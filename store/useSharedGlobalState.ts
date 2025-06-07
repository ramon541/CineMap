import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { storageService } from '.';

export const useGlobalStore = create<IAppState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),

            token: null,
            setToken: (token) => set({ token }),

            snackbarInfo: {
                visible: false,
                text: '',
                textColor: '',
                backgroundColor: '',
            },
            setSnackbarInfo: (newSnarckbarInfo) =>
                set({ snackbarInfo: newSnarckbarInfo }),

            alreadyLoggedIn: false,
            setAlreadyLoggedIn: (alreadyLoggedIn) => set({ alreadyLoggedIn }),
        }),
        {
            name: 'app-name-global-storage',
            storage: storageService,
        }
    )
);

import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: 'CtwPW6ZN$V9^xgetLowo',
});

//= =================================================================================
export const mmkvStorage: IStorageService = {
    getItem: (key) => {
        const item = storage.getString(key);
        if (!item) return null;
        return JSON.parse(item);
    },
    setItem: (key, value) => {
        storage.set(key, JSON.stringify(value));
    },
    removeItem: (key) => {
        storage.delete(key);
    },
    removeAll: () => {
        storage.clearAll();
    },
};

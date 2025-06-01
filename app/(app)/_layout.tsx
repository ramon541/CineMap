import { Slot, Redirect } from 'expo-router';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { useEffect, useState } from 'react';

export default function AppLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { user } = useGlobalStore();

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user?.isLoggedIn));
    }, [user?.isLoggedIn]);

    return !isUserLoggedIn ? <Redirect href="/signin" /> : <Slot />;
}

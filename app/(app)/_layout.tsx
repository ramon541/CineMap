import { Slot, Redirect } from 'expo-router';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { useEffect, useState } from 'react';

export default function AppLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { user, token } = useGlobalStore();

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user) || Boolean(token));
    }, [user, token]);

    return !isUserLoggedIn ? <Redirect href="/signin" /> : <Slot />;
}

import { Slot, Redirect } from 'expo-router';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function AppLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { user, token } = useGlobalStore();
    console.log(user, token);

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user) && Boolean(token));
    }, [user, token]);

    if (!isUserLoggedIn) {
        return <Redirect href="/authStack/signin" />;
    }

    return (
        <View style={{ flex: 1 }}>
            <Slot />
        </View>
    );
}

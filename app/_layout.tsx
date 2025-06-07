import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
    useFonts,
    Montserrat_200ExtraLight,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { Colors } from '../styles';
import Providers from '../providers';
import { Toast } from '../components';
import '../libs/mmkv-config';
import { useGlobalStore } from '../store/useSharedGlobalState';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Montserrat_200ExtraLight,
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_900Black,
    });
    const { replace } = useRouter();
    const { user, token } = useGlobalStore();

    const [appIsReady, setAppIsReady] = useState(false);

    //= =================================================================================
    useEffect(() => {
        if (fontsLoaded) {
            setAppIsReady(true);
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    //= =================================================================================
    useEffect(() => {
        if (appIsReady) {
            const isUserLoggedIn = Boolean(user) && Boolean(token);
            if (isUserLoggedIn) replace('(app)/home');
        }
    }, [appIsReady, user, token, replace]);

    //= =================================================================================
    if (!appIsReady) {
        return null;
    }

    //= =================================================================================
    return (
        <Providers>
            <View
                style={[
                    styles.container,
                    { backgroundColor: Colors.background },
                ]}
            >
                <StatusBar style="light" />
                <Slot />
            </View>
            <Toast />
        </Providers>
    );
}

// = ============================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

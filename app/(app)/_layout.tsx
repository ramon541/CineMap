import { Slot, Redirect } from 'expo-router';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { useEffect, useState } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { user, token } = useGlobalStore();

    useEffect(() => {
        setIsUserLoggedIn(Boolean(user) && Boolean(token));
    }, [user, token]);

    if (!isUserLoggedIn) {
        return <Redirect href="/authStack/signin" />;
    }

    //= =================================================================================
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
                    <Slot />
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: '100%' },
});

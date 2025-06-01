import { Slot, useRouter } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';

function AuthStackLayout() {
    const { back } = useRouter();
    const { pathname } = useRouteInfo();

    function useAuthTitle() {
        if (pathname.includes('signin')) return 'Logar';
        if (pathname.includes('register')) return 'Cadastre-se';
        if (pathname.includes('forgot')) return 'Recuperar senha';
        return '';
    }
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
            <Header onPressBack={back} title={useAuthTitle()} />
            <View
                style={{ flex: 1, width: '100%', height: '100%', padding: 24 }}>
                <Slot />
            </View>
        </SafeAreaView>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red',
    },
});

//= =================================================================================
export default AuthStackLayout;

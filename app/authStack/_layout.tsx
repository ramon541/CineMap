import { Slot, useRouter } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { getTopBar } from '../../utils';

function AuthStackLayout() {
    const { back, canGoBack } = useRouter();
    const { pathname } = useRouteInfo();

    function useAuthTitle() {
        if (pathname.includes('signin')) return 'Logar';
        if (pathname.includes('register')) return 'Cadastre-se';
        if (pathname.includes('forgot')) return 'Recuperar senha';
        return '';
    }
    return (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ marginTop: getTopBar() + 24 }}>
                    <Header
                        onPressBack={() => {
                            if (canGoBack()) back();
                        }}
                        title={useAuthTitle()}
                    />
                </View>
                <View style={styles.contentWrapper}>
                    <Slot />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: '100%' },
    contentWrapper: { flex: 1, width: '100%', height: '100%', padding: 24 },
});

//= =================================================================================
export default AuthStackLayout;

import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from './src/styles';
import Providers from './src/Providers';
import { Toast } from './src/components';
import './src/libs/mmkv-config';
import Home from './src/screens/Home';

export default function App() {
    return (
        <Providers>
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: Colors.background },
                ]}>
                <Home />
                <StatusBar style="light" />
            </SafeAreaView>
            <Toast />
        </Providers>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

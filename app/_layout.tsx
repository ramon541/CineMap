import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../styles';
import Providers from '../Providers';
import { Toast } from '../components';
import '../libs/mmkv-config';
import Home from './home';

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
                <Text style={{ color: 'white' }}>Hello World!</Text>
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

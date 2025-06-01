import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';

import { Colors } from '../styles';
import Providers from '../Providers';
import { Toast } from '../components';
import '../libs/mmkv-config';

export default function App() {
    return (
        <Providers>
            <View
                style={[
                    styles.container,
                    { backgroundColor: Colors.background },
                ]}>
                <StatusBar style="light" />
                <Slot />
            </View>
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

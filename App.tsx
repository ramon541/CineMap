import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src/styles';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <View
            style={[styles.container, { backgroundColor: Colors.background }]}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="light" />
        </View>
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

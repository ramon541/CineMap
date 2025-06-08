import { useRouter } from 'expo-router';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalStore } from '../../store/useSharedGlobalState';

export default function ProfileScreen() {
    const { navigate } = useRouter();
    const { setUser, setToken } = useGlobalStore();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        title="deslogar"
                        onPress={() => {
                            setUser(null);
                            setToken(null);
                            navigate('/');
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// = ============================================================
const styles = StyleSheet.create({
    container: {
        margin: 24,
        gap: 24,
    },
});

import { ScrollView, StyleSheet, View } from 'react-native';

import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeCard } from '../../../components';

export default function HomeScreen() {
    const { user } = useGlobalStore();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <WelcomeCard
                        name={user?.name.split(' ')[0] ?? ''}
                        picture="https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/A7KFWH5U4BN3BH4KRBGTD2JWEQ.jpg?auth=c159a8f29b29caca727fcd2febaff8dceb71e4392e143e9167f6bd4a3bfa3882&width=300&height=300"
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

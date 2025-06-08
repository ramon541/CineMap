import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { Slider, WelcomeCard } from '../../../components';

const mockData = [
    {
        id: 1,
        backdrop_path: '/l33oR0mnvf20avWyIMxW02EtQxn.jpg',
        title: 'Interestelar',
        release_date: '2017-06-07',
    },
    {
        id: 12,
        backdrop_path: '/8C32MMrMYT5gON7nXgEGeM4puH4.jpg',
        title: 'The Science of Interstellar',
        release_date: '2017-06-07',
    },
    {
        id: 123,
        backdrop_path: '/fTcs5ejlN1MwwLSSv9aU1mi5alL.jpg',
        title: "Interstellar: Nolan's Odyssey",
        release_date: '2017-06-07',
    },
    {
        id: 1234,
        backdrop_path: '/p1XtUnWJrmVNqyhYJGIatMNt8C1.jpg',
        title: 'Interstella 5555',
        release_date: '2017-06-07',
    },
    {
        id: 12345,
        backdrop_path: '/lQS9il7YqGjmmBefZY27uG5wbzT.jpg',
        title: 'Faster Than Light: the Dream of Interstellar Flight',
        release_date: '2017-06-07',
    },
];

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
            <Slider itemList={mockData} />
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

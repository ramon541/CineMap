import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchForm from '../../../components/Forms/SearchForm';

export default function SearchScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <SearchForm />
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

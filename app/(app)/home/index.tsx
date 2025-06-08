import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LegendList } from '@legendapp/list';

import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { Slider, Text, WelcomeCard } from '../../../components';
import { useEffect, useState } from 'react';
import { getGenres, getTrendingMovies } from '../../../services';
import { EFontFamily } from '../../../enums';
import GenreCard from '../../../components/GenreCard';
import GenreList from '../../../components/GenreList';

const defaultGenre = {
    id: null,
    name: 'Todos',
};

export default function HomeScreen() {
    const { user } = useGlobalStore();
    const [trendingMovies, setTrendingMovies] = useState<Array<MovieTMDB>>([]);
    const [genres, setGenres] = useState<Array<GenreTMDB>>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreTMDB>(defaultGenre);
    useEffect(() => {
        (async () => {
            try {
                const resTrendingMovies = await getTrendingMovies();
                const resGenres = await getGenres();

                if (resTrendingMovies.results)
                    setTrendingMovies(resTrendingMovies.results.slice(0, 10));

                if (resGenres.genres)
                    setGenres([defaultGenre, ...resGenres.genres]);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        })();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <WelcomeCard
                        name={user?.name.split(' ')[0] ?? ''}
                        picture="https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/A7KFWH5U4BN3BH4KRBGTD2JWEQ.jpg?auth=c159a8f29b29caca727fcd2febaff8dceb71e4392e143e9167f6bd4a3bfa3882&width=300&height=300"
                    />
                </View>
                <Slider itemList={trendingMovies} />
                <View style={styles.container}>
                    <Text text="Categorias" fontFamily={EFontFamily.SemiBold} />
                </View>
                <GenreList
                    genres={genres}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={(genre) => setSelectedGenre(genre)}
                />
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

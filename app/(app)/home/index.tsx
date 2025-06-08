import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { Slider, Text, WelcomeCard } from '../../../components';
import { useEffect, useState } from 'react';
import { getPopularMoviesByGenre, getTrendingMovies } from '../../../services';
import { EFontFamily } from '../../../enums';
import GenreList from '../../../components/GenreList';
import MovieCardList from '../../../components/MovieCardList';
import { getTopBar } from '../../../utils';

const defaultGenre = {
    id: 0,
    name: 'Todos',
};

export default function HomeScreen() {
    const { user, globalGenres } = useGlobalStore();
    const [trendingMovies, setTrendingMovies] = useState<Array<MovieTMDB>>([]);
    const [genres, setGenres] = useState<Array<GenreTMDB>>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreTMDB>(defaultGenre);
    const [popularMovies, setPopularMovies] = useState<Array<MovieTMDB>>([]);

    //= =================================================================================
    useEffect(() => {
        (async () => {
            try {
                const resTrendingMovies = await getTrendingMovies();

                if (resTrendingMovies.results)
                    setTrendingMovies(resTrendingMovies.results.slice(0, 10));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        })();
    }, []);

    //= =================================================================================
    useEffect(() => {
        if (globalGenres.length > 0) setGenres([defaultGenre, ...globalGenres]);
    }, [globalGenres]);

    //= =================================================================================
    useEffect(() => {
        (async () => {
            try {
                const resPopularMovies = await getPopularMoviesByGenre({
                    genreId: selectedGenre.id,
                });

                if (resPopularMovies.results)
                    setPopularMovies(resPopularMovies.results.slice(0, 10));
            } catch (error) {
                console.error('Error fetching popular movies by genre:', error);
            }
        })();
    }, [selectedGenre]);

    //= =================================================================================
    return (
        <ScrollView>
            <View style={{ margin: 24, marginTop: getTopBar() + 24 }}>
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
            <View style={styles.container}>
                <Text text="Mais populares" fontFamily={EFontFamily.SemiBold} />
            </View>
            <MovieCardList movies={popularMovies} />
        </ScrollView>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginVertical: 16,
        gap: 24,
    },
});

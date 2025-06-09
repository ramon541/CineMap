import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { Header, Icon, IconText, Rating, Text } from '../../../components';
import { getTopBar } from '../../../utils';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../styles';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../../services';
import { EFontFamily } from '../../../enums';

export default function MovieScreen() {
    const [movie, setMovie] = useState<MovieDetailsTMDB | null>(null);

    const { navigate } = useRouter();
    const { id, title, poster_path } =
        useLocalSearchParams<Partial<MovieScreenProps>>();

    //= =================================================================================
    useEffect(() => {
        (async () => {
            try {
                const resMovie = await getMovieById({ id: Number(id) });

                if (resMovie) setMovie(resMovie);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        })();
    }, [id]);

    //= =================================================================================
    function getYear(release_date: string | undefined): string {
        if (!release_date) return '';

        const date = new Date(release_date);
        return date.getFullYear().toString();
    }
    //= =================================================================================
    return (
        <ScrollView>
            <LinearGradient
                style={styles.backgroundGradient}
                colors={[Colors.transparent, Colors.background]}>
                <Image
                    style={styles.backgroundImage}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
            </LinearGradient>
            <View style={styles.container}>
                <Header
                    title={title || ''}
                    onPressBack={() => navigate('/home')}
                />
            </View>
            <View style={styles.posterWrapper}>
                <Image
                    style={styles.posterContainer}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
            </View>
            <View style={styles.infosWrapper}>
                <IconText
                    iconProps={{ name: 'calendar' }}
                    textProps={{ text: getYear(movie?.release_date) }}
                />
                <Text text="|" color={Colors.grey} />
                <IconText
                    iconProps={{ name: 'time' }}
                    textProps={{ text: `${movie?.runtime} minutos` }}
                />
                <Text text="|" color={Colors.grey} />
                <IconText
                    iconProps={{ name: 'film' }}
                    textProps={{ text: movie?.genres[0].name || '' }}
                />
            </View>
            <View style={styles.ratingWrapper}>
                <Rating vote_average={movie?.vote_average ?? 0} />
            </View>
            <View style={styles.textWrapper}>
                <Text text="Sinopse" fontFamily={EFontFamily.SemiBold} />
                <Text text={movie?.overview || ''} fontSize={14} />
            </View>
        </ScrollView>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        marginTop: getTopBar() + 24,
    },
    backgroundGradient: {
        width: '100%',
        height: 550,
        position: 'absolute',
        zIndex: -1,
    },
    backgroundImage: {
        height: 550,
        width: '100%',
        opacity: 0.15,
        zIndex: -2,
    },
    posterWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 24,
    },
    posterContainer: {
        borderRadius: 12,
        height: 290,
        width: 205,
        elevation: 10,
    },
    infosWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 16,
    },
    ratingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWrapper: {
        padding: 24,
        gap: 12,
    },
});

import { memo, useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from '../Text';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';
import Rating from '../Rating';
import { truncateString } from '../../utils';
import { useGlobalStore } from '../../store/useSharedGlobalState';

function MovieCard({
    id,
    poster_path,
    vote_average,
    title,
    genre_ids,
}: MovieCardProps) {
    const { globalGenres } = useGlobalStore();

    const [genres, setGenres] = useState<Array<string>>([]);

    useEffect(() => {
        if (globalGenres.length > 0) {
            const genreNames = globalGenres
                .filter((genre) => genre_ids.includes(genre.id))
                .map((genre) => genre.name);

            setGenres(genreNames);
        }
    }, [genre_ids]);

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
                <View style={styles.ratingContainer}>
                    <Rating vote_average={vote_average} />
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text
                    text={truncateString(title)}
                    fontSize={14}
                    fontFamily={EFontFamily.SemiBold}
                />
                <Text
                    text={truncateString(genres.join(' | '), 20)}
                    fontSize={10}
                    color={Colors.grey}
                />
            </View>
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.shape,
        justifyContent: 'space-between',
        borderRadius: 12,
        overflow: 'hidden',
        width: 135,
        height: 230,
    },
    ratingContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    img: {
        width: '100%',
        height: 180,
    },
    descriptionContainer: {
        width: '100%',
        height: '100%',
        padding: 8,
    },
});

//= =================================================================================
export default memo(MovieCard);

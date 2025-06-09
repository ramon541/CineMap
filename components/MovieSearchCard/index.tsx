import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Rating from '../Rating';
import Text from '../Text';
import IconText from '../IconText';
import { EFontFamily } from '../../enums';
import { useGlobalStore } from '../../store/useSharedGlobalState';
import { truncateString } from '../../utils';
import { Colors } from '../../styles';

function MovieSearchCard({
    id,
    vote_average,
    poster_path,
    title,
    overview,
    genre_ids,
}: MovieSearchCardProps) {
    const { globalGenres } = useGlobalStore();

    const genresName =
        genre_ids &&
        globalGenres
            .filter((genre) => genre_ids.includes(genre.id))
            .map((genre) => genre.name);

    //= =================================================================================
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.imageWrapper}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
                <View style={styles.ratingContainer}>
                    <Rating vote_average={vote_average ?? 0} />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text
                    text={truncateString(title, 25)}
                    fontFamily={EFontFamily.SemiBold}
                />
                <IconText
                    iconProps={{ name: 'film' }}
                    textProps={{
                        text:
                            genresName && genresName.length > 0
                                ? truncateString(genresName.join(' | '), 30)
                                : 'Não informado',
                    }}
                />
                <View style={styles.overViewContainer}>
                    <Text
                        text="Sinopse"
                        fontSize={14}
                        fontFamily={EFontFamily.SemiBold}
                    />
                    <Text
                        text={truncateString(overview, 100)}
                        fontSize={12}
                        color={Colors.grey}
                    />
                </View>
            </View>
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 112,
        height: 147,
        borderRadius: 8,
    },
    ratingContainer: {
        position: 'absolute',
        top: 8,
        left: 8,
    },
    infoContainer: {
        paddingHorizontal: 16,
        gap: 8,
    },
    overViewContainer: {
        marginTop: 12,
        gap: 4,
        maxWidth: '89%',
    },
});

//= =================================================================================
export default memo(MovieSearchCard);

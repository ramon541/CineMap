import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import {
    Button,
    Header,
    Icon,
    IconText,
    Rating,
    Text,
    FullScreenModal,
    Review,
} from '../../../components';
import { getTopBar } from '../../../utils';
import { Colors } from '../../../styles';
import { useEffect, useState } from 'react';
import {
    getAllReviewsByMovieId,
    getMovieById,
    getUserReviewByMovieId,
} from '../../../services';
import { EFontFamily } from '../../../enums';
import ReviewForm from '../../../components/Forms/ReviewForm';
import { useGlobalStore } from '../../../store/useSharedGlobalState';

export default function MovieScreen() {
    const { navigate } = useRouter();
    const { id, title, poster_path } =
        useLocalSearchParams<Partial<MovieScreenProps>>();
    const { user } = useGlobalStore();

    const [movie, setMovie] = useState<MovieDetailsTMDB | null>(null);
    const [reviews, setReviews] = useState<Array<IUserReview>>([]);
    const [userReview, setUserReview] = useState<IUserReview | null>(null);
    const [openModalReview, setOpenModalReview] = useState(false);

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
    useEffect(() => {
        (async () => {
            try {
                const resReviews = await getAllReviewsByMovieId({
                    movieId: Number(id),
                });
                const resUserReview = await getUserReviewByMovieId({
                    movieId: Number(id),
                    userId: user?.id ?? 0,
                });

                if (resReviews?.data?.length > 0) setReviews(resReviews.data);

                if (resUserReview?.data) setUserReview(resUserReview.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
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
        <>
            <FullScreenModal
                isVisible={openModalReview}
                onRequestClose={() => setOpenModalReview(false)}>
                <ScrollView
                    style={{
                        marginHorizontal: 24,
                        marginTop: getTopBar() + 24,
                    }}>
                    <Header
                        title="Review"
                        onPressBack={() => setOpenModalReview(false)}
                    />
                    <View style={styles.posterWrapper}>
                        <Image
                            style={styles.posterContainer}
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        />
                    </View>

                    <ReviewForm
                        movieId={Number(id ?? 0)}
                        onSubmitForm={(newReview) => {
                            setOpenModalReview(false);
                            setUserReview(newReview);
                            setReviews((prev) => [...prev, newReview]);
                        }}
                    />
                </ScrollView>
            </FullScreenModal>
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
                <View style={styles.reviewButtonWrapper}>
                    <Button
                        onPress={() => {
                            if (!userReview) setOpenModalReview(true);
                        }}
                        disabled={!!userReview}>
                        <View style={styles.buttonInfoWrapper}>
                            <Icon
                                name={
                                    userReview
                                        ? 'checkmark-circle'
                                        : 'chatbubble-ellipses'
                                }
                                size={14}
                                color={userReview ? Colors.white : Colors.white}
                            />
                            <Text
                                text={userReview ? 'Já avaliado' : 'Avaliar'}
                                fontSize={14}
                                fontFamily={EFontFamily.SemiBold}
                                color={userReview ? Colors.white : Colors.white}
                            />
                        </View>
                    </Button>
                </View>
                {userReview && (
                    <View style={styles.userReview}>
                        <Text
                            text="Sua avaliação"
                            fontFamily={EFontFamily.SemiBold}
                        />
                        <View style={styles.userReviewContainer}>
                            <Review
                                user={userReview.user}
                                rating={userReview.rating}
                                comment={userReview.comment || ''}
                            />
                        </View>
                    </View>
                )}

                <View style={styles.textWrapper}>
                    <Text text="Sinopse" fontFamily={EFontFamily.SemiBold} />
                    <Text text={movie?.overview || ''} fontSize={14} />
                </View>
                <View style={styles.textWrapper}>
                    <Text text="Avaliações" fontFamily={EFontFamily.SemiBold} />
                </View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Review
                            user={item.user}
                            rating={item.rating}
                            comment={item.comment || ''}
                        />
                    )}
                    contentContainerStyle={{
                        paddingBottom: 48,
                        marginHorizontal: 24,
                    }}
                    ItemSeparatorComponent={() => (
                        <Icon
                            color={Colors.shape}
                            name="ellipsis-horizontal"
                            style={{ alignSelf: 'center', marginVertical: 8 }}
                        />
                    )}
                    ListEmptyComponent={
                        <Text
                            text="Seja o(a) primeiro(a) a avaliar este filme!"
                            style={{ textAlign: 'center' }}
                            fontFamily={EFontFamily.SemiBold}
                            fontSize={14}
                            color={Colors.grey}
                        />
                    }
                />
            </ScrollView>
        </>
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
    reviewButtonWrapper: {
        margin: 16,
        alignSelf: 'center',
        width: 205,
    },
    buttonInfoWrapper: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    textWrapper: {
        margin: 24,
        gap: 12,
    },
    userReview: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: 8,
    },
    userReviewContainer: {
        borderWidth: 1,
        borderColor: Colors.primaryOpacity,
        borderRadius: 12,
        padding: 8,
    },
});

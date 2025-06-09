import { memo, ReactElement } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import MovieSearchCard from '../MovieSearchCard';
import { useRouter } from 'expo-router';
import Text from '../Text';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function MovieSearchCardList({
    movies,
    ListHeaderComponent,
}: MovieSearchCardListProps<ReactElement>) {
    const { navigate } = useRouter();

    return (
        <FlatList
            data={movies}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => {
                            navigate({
                                pathname: '/movie/[id]',
                                params: {
                                    id: item.id,
                                    title: item.title,
                                    poster_path: item.poster_path,
                                },
                            });
                        }}>
                        <MovieSearchCard
                            id={item.id}
                            genre_ids={item.genre_ids}
                            overview={item.overview}
                            poster_path={item.poster_path}
                            title={item.title}
                            vote_average={item.vote_average}
                        />
                    </TouchableOpacity>
                );
            }}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
            ListHeaderComponent={ListHeaderComponent}
            ListEmptyComponent={
                <Text
                    text="Nenhum filme encontrado."
                    style={{ textAlign: 'center' }}
                    fontFamily={EFontFamily.SemiBold}
                    fontSize={14}
                    color={Colors.grey}
                />
            }
        />
    );
}

export default memo(MovieSearchCardList);

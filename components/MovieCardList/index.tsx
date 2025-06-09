import { FlatList, TouchableOpacity } from 'react-native';
import { memo } from 'react';
import MovieCard from '../MovieCard';
import { useRouter } from 'expo-router';

function MovieCardList({ movies }: MovieCardListProps) {
    const { navigate } = useRouter();

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
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
                        <MovieCard
                            id={item.id}
                            vote_average={item.vote_average}
                            poster_path={item.poster_path}
                            title={item.title}
                            genre_ids={item.genre_ids.slice(0, 2)}
                        />
                    </TouchableOpacity>
                );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
        />
    );
}

export default memo(MovieCardList);

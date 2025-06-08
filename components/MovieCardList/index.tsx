import { FlatList } from 'react-native';
import { memo } from 'react';
import MovieCard from '../MovieCard';

function MovieCardList({ movies }: MovieCardListProps) {
    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <MovieCard
                        id={item.id}
                        vote_average={item.vote_average}
                        poster_path={item.poster_path}
                        title={item.title}
                        genre_ids={item.genre_ids.slice(0, 2)}
                    />
                );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
        />
    );
}

export default memo(MovieCardList);

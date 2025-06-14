import { TouchableOpacity, FlatList } from 'react-native';
import { memo } from 'react';

import GenreCard from '../GenreCard';

function GenreList({
    genres,
    selectedGenre,
    setSelectedGenre,
}: GenreListProps) {
    return (
        <FlatList
            data={genres}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        setSelectedGenre(item);
                    }}>
                    <GenreCard
                        name={item.name}
                        selected={selectedGenre.id === item.id}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={({ id, name }) => `genre-${id?.toString() ?? name}`}
            extraData={selectedGenre}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, marginHorizontal: 24 }}
        />
    );
}

//= =================================================================================
export default memo(GenreList);

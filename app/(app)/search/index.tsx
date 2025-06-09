import { StyleSheet, View } from 'react-native';

import SearchForm from '../../../components/Forms/SearchForm';
import { getTopBar } from '../../../utils';
import { MovieSearchCardList } from '../../../components';
import { useState } from 'react';

export default function SearchScreen() {
    const [movies, setMovies] = useState<Array<MovieTMDB>>([]);

    //= =================================================================================
    return (
        <MovieSearchCardList
            movies={movies}
            ListHeaderComponent={
                <View style={styles.formContainer}>
                    <SearchForm onSearch={(movies) => setMovies(movies)} />
                </View>
            }
        />
    );
}

// = ============================================================
const styles = StyleSheet.create({
    formContainer: {
        marginTop: getTopBar() + 24,
    },
});

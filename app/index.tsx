import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Poster from '../components/Poster';
import { getTopRatedMovies } from '../services';

const { height: screenHeight } = Dimensions.get('screen');

function Root() {
    const { navigate } = useRouter();

    const [posters, setPosters] = useState<Array<string>>([]);

    //= =================================================================================
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 3;
    const margin = 10; // Espaçamento entre os posters (10 pixels, como na imagem)

    //= =================================================================================
    useEffect(() => {
        (async () => {
            const topRatedMovies = await getTopRatedMovies();
            const posters = topRatedMovies.results
                .map((movie) => movie.poster_path)
                .slice(0, 12);
            setPosters(posters);
        })();
    }, []);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <FlatList
                    data={posters}
                    renderItem={({ item, index }) => (
                        <Poster width={125} url={item} />
                    )}
                    keyExtractor={(item, index) => `${index}-${item}`}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    ItemSeparatorComponent={() => (
                        <View style={{ padding: 18 }} />
                    )}
                    numColumns={3}
                />
            </View>

            <Text>Welcome to the App!</Text>
            <Button
                title="Direto para o app"
                onPress={() => navigate('/home')}
            />
            <Button
                title="Pagina de login"
                onPress={() => navigate('/signin')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: screenHeight,
    },
});

export default Root;

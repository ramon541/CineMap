import { JSX, useEffect, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Poster from '../Poster';
import { getPopularMovies } from '../../services';

const { height: screenHeight } = Dimensions.get('screen');

function BackgroundPoster() {
    const [posters, setPosters] = useState<Array<string>>([]);
    useEffect(() => {
        (async () => {
            const popularMovies = await getPopularMovies();
            const posters = popularMovies.results
                .map((movie) => movie.poster_path)
                .slice(0, 12);
            setPosters(posters);
        })();
    }, []);

    //= =================================================================================
    const arrOpacity = [0.84, 0.36, 0.2, 0.12];

    const posterColumns = useMemo(() => {
        const columns = [[], [], []] as Array<Array<JSX.Element>>;
        posters.forEach((posterUrl, index) => {
            const randomOpacityIndex = Math.floor(
                Math.random() * arrOpacity.length
            );
            const columnIndex = Math.floor(index / 4);
            columns[columnIndex].push(
                <Poster
                    width={140}
                    url={posterUrl}
                    key={`${index}-${posterUrl}`}
                    opacity={arrOpacity[randomOpacityIndex]}
                />
            );
        });
        return columns;
    }, [posters]);

    //= =================================================================================
    return (
        <View style={styles.container}>
            <View style={styles.firstColumn}>{posterColumns[0]}</View>
            <View style={styles.secondColumn}>{posterColumns[1]}</View>
            <View style={styles.thirdColumn}>{posterColumns[2]}</View>
        </View>
    );
}

//= =================================================================================
const defaultGap = 16;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: screenHeight,
        flexDirection: 'row',
        gap: defaultGap,
    },
    firstColumn: {
        marginLeft: defaultGap,
        marginTop: defaultGap * 2,
        gap: defaultGap,
    },
    secondColumn: {
        gap: defaultGap,
    },
    thirdColumn: {
        gap: defaultGap,
        marginTop: defaultGap * 4,
    },
});

//= =================================================================================
export default BackgroundPoster;

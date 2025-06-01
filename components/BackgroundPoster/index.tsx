import { JSX, useEffect, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Poster from '../Poster';
import { getTopRatedMovies } from '../../services';

const { height: screenHeight } = Dimensions.get('screen');

function BackgroundPoster() {
    const [posters, setPosters] = useState<Array<string>>([]);
    useEffect(() => {
        (async () => {
            const topRatedMovies = await getTopRatedMovies();
            const posters = topRatedMovies.results
                .map((movie) => movie.poster_path)
                .slice(0, 12);
            setPosters(posters);
        })();
    }, []);

    //= =================================================================================
    const arrOpacity = [0.64, 0.12, 0.24, 0.16, 0.2];

    const posterColumns = useMemo(() => {
        const columns = [[], [], []] as Array<Array<JSX.Element>>;
        posters.forEach((posterUrl, i) => {
            const randomOpacityIndex = Math.floor(
                Math.random() * arrOpacity.length
            );
            const columnIndex = Math.floor(i / 4);
            columns[columnIndex].push(
                <Poster
                    width={126}
                    url={posterUrl}
                    key={`${i}-${posterUrl}`}
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
const defaultGap = 18;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
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

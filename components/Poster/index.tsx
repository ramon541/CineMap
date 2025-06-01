import { memo } from 'react';
import { Image } from 'react-native';

function Poster({ url, width = 500, opacity = 1 }: PosterProps) {
    return (
        <Image
            style={{
                width,
                height: width * 1.3,
                borderRadius: 8,
                opacity,
            }}
            src={`https://image.tmdb.org/t/p/original${url}`}
        />
    );
}

export default memo(Poster);

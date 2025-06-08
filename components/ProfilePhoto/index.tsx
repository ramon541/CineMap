import { memo, useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from '../Icon';
import { Colors } from '../../styles';

function ProfilePhoto({ src, size = 40 }: { src: string; size?: number }) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // = ============================================================
    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setImageUrl(src);
                } else {
                    setError(true);
                }
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchImage();
    }, [src]);

    // = ============================================================
    function ProfilePhotoFallback() {
        return (
            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: 9999,
                    backgroundColor: Colors.shape,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Icon size={size * 0.6} name="person" color={Colors.primary} />
            </View>
        );
    }

    // = ============================================================
    if (loading || error || !imageUrl) {
        return <ProfilePhotoFallback />;
    }

    // = ============================================================
    return (
        <Image
            style={{
                width: size,
                height: size,
                borderRadius: 9999,
            }}
            source={{ uri: imageUrl }}
        />
    );
}

// = ============================================================
export default memo(ProfilePhoto);

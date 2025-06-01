import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../styles';
import {
    ButtonText,
    BackgroundPoster,
    Card,
    TouchableText,
} from '../components';

function Root() {
    const { navigate } = useRouter();

    //= =================================================================================
    return (
        <View style={styles.container}>
            <BackgroundPoster />

            <View style={styles.cardWrapper}>
                <Card borderRadius={32}>
                    <View style={styles.cardContainer}>
                        <View>
                            <Text style={styles.title}>
                                Descubra, registre e compartilhe seus filmes
                                favoritos
                            </Text>
                            <Text style={styles.subtitle}>
                                Acompanhe tudo o que você assiste, crie listas
                                personalizadas e veja o que outras pessoas estão
                                comentando. O CineMap é a rede social para você,
                                amante do cinema!
                            </Text>
                        </View>

                        <View
                            style={{
                                gap: 16,
                                alignItems: 'center',
                            }}>
                            <ButtonText
                                text="Fazer login"
                                onPress={() => navigate('/authStack/signin')}
                            />

                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                <Text
                                    style={{
                                        color: Colors.grey,
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 12,
                                    }}>
                                    Ainda não possui uma conta?{' '}
                                </Text>
                                <TouchableText
                                    text="Cadastre-se"
                                    onPress={() =>
                                        navigate('/authStack/register')
                                    }
                                    fontSize={12}
                                />
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    cardWrapper: {
        padding: 24,
        width: '100%',
        zIndex: 1,
    },
    cardContainer: { padding: 32, gap: 64 },
    title: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.grey,
        fontSize: 14,
        marginTop: 32,
        textAlign: 'justify',
        fontFamily: 'Montserrat_400Regular',
    },
});

//= =================================================================================
export default Root;

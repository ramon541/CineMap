import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackgroundPoster from '../components/BackgroundPoster';
import Card from '../components/Card';
import { Colors } from '../styles';
import Button from '../components/Button';

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

                        <View style={{ gap: 16, alignItems: 'center' }}>
                            <Button onPress={() => navigate('/signin')}>
                                <Text style={{ color: Colors.white }}>
                                    Fazer login
                                </Text>
                            </Button>

                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        color: Colors.grey,
                                    }}>
                                    Ainda não possui uma conta?{' '}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigate('/register')}>
                                    <Text
                                        style={{
                                            color: Colors.primary,
                                        }}>
                                        Cadastre-se!
                                    </Text>
                                </TouchableOpacity>
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
    cardWrapper: { padding: 32, width: '100%' },
    cardContainer: { padding: 32, gap: 64 },
    title: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.grey,
        fontSize: 14,
        marginTop: 32,
        textAlign: 'justify',
    },
});

//= =================================================================================
export default Root;

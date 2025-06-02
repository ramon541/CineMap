import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { getBottomBar } from '../utils';

import { Colors } from '../styles';
import {
    ButtonText,
    BackgroundPoster,
    Card,
    TouchableText,
    Text,
} from '../components';
import { EFontFamily } from '../enums';

function Root() {
    const { navigate } = useRouter();

    //= =================================================================================
    return (
        <View style={styles.container}>
            <BackgroundPoster />

            <View style={styles.cardWrapper}>
                <Card borderRadius={32}>
                    <View style={styles.cardContainer}>
                        <View style={styles.textContainer}>
                            <Text
                                text="Descubra, registre e compartilhe seus filmes
                                favoritos"
                                fontSize={18}
                                fontFamily={EFontFamily.Bold}
                                style={styles.title}
                            />

                            <Text
                                text="Acompanhe tudo o que você assiste, crie listas
                                personalizadas e veja o que outras pessoas estão
                                comentando. O CineMap é a rede social para você,
                                amante do cinema!"
                                color={Colors.grey}
                                fontFamily={EFontFamily.SemiBold}
                                fontSize={14}
                                style={styles.subtitle}
                            />
                        </View>

                        <View
                            style={{
                                gap: 16,
                                alignItems: 'center',
                            }}
                        >
                            <ButtonText
                                text="Fazer login"
                                onPress={() => navigate('/authStack/signin')}
                            />

                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <Text
                                    text={`Ainda não possui uma conta?${' '}`}
                                    color={Colors.grey}
                                    fontSize={12}
                                />
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
        marginBottom: getBottomBar(),
    },
    cardContainer: { padding: 32, gap: 64 },
    textContainer: { gap: 32 },
    title: {
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'justify',
    },
});

//= =================================================================================
export default Root;

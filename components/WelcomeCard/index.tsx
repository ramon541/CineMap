import { memo } from 'react';
import Text from '../Text';
import { StyleSheet, View } from 'react-native';
import { EFontFamily } from '../../enums';
import { Colors } from '../../styles';
import ProfilePhoto from '../ProfilePhoto';

function WelcomeCard({ name, picture }: WelcomeCardProps) {
    return (
        <View style={styles.container}>
            <ProfilePhoto src={picture} />
            <View style={styles.textContainer}>
                <Text
                    fontSize={16}
                    fontFamily={EFontFamily.Bold}
                    text={`Olá, ${name}`}
                />
                <Text
                    fontSize={12}
                    color={Colors.grey}
                    text={'Trace seu caminho pelos melhores filmes'}
                />
            </View>
        </View>
    );
}
// = ============================================================
const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        width: '100%',
    },
    textContainer: {
        justifyContent: 'space-between',
        marginLeft: 16,
    },
});

// = ============================================================
export default memo(WelcomeCard);

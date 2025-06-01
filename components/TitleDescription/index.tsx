import { StyleSheet, View } from 'react-native';

import Text from '../Text';
import { EFontFamily } from '../../enums';
import { Colors } from '../../styles';

function TitleDescription({ title, description }: ITitleDescriptionProps) {
    return (
        <View style={styles.container}>
            <Text
                text={title}
                fontFamily={EFontFamily.SemiBold}
                fontSize={24}
                style={styles.center}
            />
            <Text
                text={description}
                fontFamily={EFontFamily.SemiBold}
                fontSize={12}
                color={Colors.grey}
                style={styles.center}
            />
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    center: {
        textAlign: 'center',
    },
});

export default TitleDescription;

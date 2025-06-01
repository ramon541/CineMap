import { StyleSheet, TextInput, View } from 'react-native';
import { InputBase, Text, TitleDescription } from '../../components';

function Register() {
    return (
        <>
            <TitleDescription
                title={`Sua jornada cinéfila\ncomeça aqui`}
                description={`Descubra, avalie e comente sobre\nos melhores títulos`}
            />
            <View style={styles.formContainer}>
                <InputBase label="E-mail">
                    {/* <Text text="Aqui vem a birosca" /> */}
                    <TextInput placeholder="Aqui vem a birosca" />
                </InputBase>
            </View>
        </>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    formContainer: {
        marginTop: 72,
    },
});

//= =================================================================================
export default Register;

import { StyleSheet, View } from 'react-native';
import { InputBase, TitleDescription, TextInput } from '../../components';
import { Colors } from '../../styles';
import RegisterUserForm from '../../components/Forms/RegisterUserForm';

function Register() {
    return (
        <>
            <TitleDescription
                title={`Sua jornada cinéfila\ncomeça aqui`}
                description={`Descubra, avalie e comente sobre\nos melhores títulos`}
            />
            <View style={styles.formContainer}>
                <RegisterUserForm />
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

import { StyleSheet, View } from 'react-native';
import { TitleDescription } from '../../components';
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

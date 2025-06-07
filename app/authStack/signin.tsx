import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import LoginUserForm from '../../components/Forms/LoginUserForm';
import { TitleDescription } from '../../components';
import { getGreeting } from '../../utils';

function SignIn() {
    return (
        <>
            <TitleDescription
                title={`Olá. ${getGreeting()}`}
                description="Bem-vindo(a) de volta! Por favor, insira seus dados."
            />
            <View style={styles.formContainer}>
                <LoginUserForm />
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

export default SignIn;

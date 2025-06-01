import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useGlobalStore } from '../../store/useSharedGlobalState';

function SignIn() {
    const { navigate } = useRouter();
    const { setUser } = useGlobalStore();
    return (
        <View>
            <Text>Signin page!</Text>
            <Button
                title="Esqueci minha senha"
                onPress={() => {
                    navigate('authStack/forgot');
                }}
            />
            <Button
                title="Logar"
                onPress={() => {
                    setUser({ isLoggedIn: true });
                    navigate('/home');
                }}
            />
        </View>
    );
}

export default SignIn;

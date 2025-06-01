import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useGlobalStore } from '../store/useSharedGlobalState';

function SignIn() {
    const { back, navigate } = useRouter();
    const { setUser } = useGlobalStore();
    return (
        <View>
            <Text>Signin page!</Text>
            <Button title="vortar" onPress={back} />
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

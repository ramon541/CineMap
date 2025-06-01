import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useGlobalStore } from '../store/useSharedGlobalState';

function Register() {
    const { back, navigate } = useRouter();
    const { setUser } = useGlobalStore();
    return (
        <View>
            <Text>Register page!</Text>
            <Button title="vortar" onPress={back} />
        </View>
    );
}

export default Register;

import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { useGlobalStore } from '../../store/useSharedGlobalState';

function Register() {
    const { back, navigate } = useRouter();
    const { setUser } = useGlobalStore();
    return (
        <View>
            <Text>Register page!</Text>
        </View>
    );
}

export default Register;

import { Button, Text, View } from 'react-native';

import { useShowSnackbar } from '../../../hooks';
import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const { navigate } = useRouter();
    const showSnackbar = useShowSnackbar();
    const { setUser } = useGlobalStore();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
            }}
        >
            <Text style={{ color: 'white' }}>Hello World!</Text>
            <Button
                title="Teste"
                onPress={() => showSnackbar({ text: 'Aopaaa!' })}
            />

            <Button
                title="deslogar"
                onPress={() => {
                    setUser(null);
                    navigate('/');
                }}
            />
        </View>
    );
}

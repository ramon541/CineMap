import { Button, Text, View } from 'react-native';

import { useShowSnackbar } from '../../../hooks';
import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { useRouter } from 'expo-router';

export default function Home() {
    const { navigate } = useRouter();
    const showSnackbar = useShowSnackbar();
    const { setUser } = useGlobalStore();

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

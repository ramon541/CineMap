import { Button, Text, View } from 'react-native';

import { useShowSnackbar } from '../../hooks';

export default function Home() {
    const showSnackbar = useShowSnackbar();
    return (
        <View>
            <Text>Hello World!</Text>
            <Button
                title="Teste"
                onPress={() => showSnackbar({ text: 'Fudeu de vez' })}
            />
        </View>
    );
}

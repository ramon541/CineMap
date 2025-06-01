import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles';

function TouchableText({ text, onPress, fontSize = 16 }: TouchableTextProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                style={{
                    color: Colors.primary,
                    fontFamily: 'Montserrat_700Bold',
                    fontSize: fontSize,
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default TouchableText;

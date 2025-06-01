import { TouchableOpacity } from 'react-native';
import { Colors } from '../../styles';
import Text from '../Text';
import { EFontFamily } from '../../enums';

function TouchableText({ text, onPress, fontSize = 16 }: TouchableTextProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                text={text}
                color={Colors.primary}
                fontFamily={EFontFamily.Bold}
                fontSize={fontSize}
            />
        </TouchableOpacity>
    );
}

export default TouchableText;

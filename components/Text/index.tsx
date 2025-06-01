import { Text as TextRN, TextStyle } from 'react-native';
import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function Text({
    text,
    color = Colors.white,
    fontFamily = EFontFamily.Regular,
    fontSize = 16,
    ...rest
}: ITextProps<TextStyle, EFontFamily>) {
    return (
        <TextRN style={{ color, fontFamily, fontSize, ...(rest.style || {}) }}>
            {text}
        </TextRN>
    );
}

export default Text;

import { Text } from 'react-native';
import Button from '../Button';
import { Colors } from '../../styles';

function ButtonText({ text, ...props }: ButtonTextProps) {
    return (
        <Button {...props}>
            <Text
                style={{
                    color: Colors.white,
                    fontFamily: 'Montserrat_700Bold',
                }}>
                {text}
            </Text>
        </Button>
    );
}

export default ButtonText;

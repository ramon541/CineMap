import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles';

function Card({
    borderRadius = 16,
    backgroundColor = Colors.shape,
    children,
}: PropsWithChildren<CardProps>) {
    return (
        <View
            style={{
                backgroundColor,
                borderRadius,
                overflow: 'hidden',
                width: '100%',
            }}>
            {children}
        </View>
    );
}

export default Card;

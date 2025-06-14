import { ComponentProps, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import _default from '@expo/vector-icons/build/Ionicons';

import { Colors } from '../../styles';
import Icon from '../Icon';

function IconRounded({
    iconName,
    size = 32,
}: IIconRoundedProps<ComponentProps<typeof Ionicons>['name']>) {
    return (
        <View
            style={[
                styles.container,
                { width: size, height: size, borderRadius: size * 0.4 },
            ]}>
            <Icon name={iconName} size={size * 0.8} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.shape,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default memo(IconRounded);

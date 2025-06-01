import { ComponentProps, memo } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import _default from '@expo/vector-icons/build/Ionicons';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../styles';

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
            <Ionicons name={iconName} color={Colors.white} size={size * 0.8} />
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

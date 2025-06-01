import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconRounded } from '../';
import { Colors } from '../../styles';

function Header({ title, onPressBack }: IHeaderProps) {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={styles.iconBackWrapper}>
                <TouchableOpacity onPress={onPressBack}>
                    <IconRounded iconName="chevron-back-outline" size={35} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
    },
    iconBackWrapper: { left: 24, position: 'absolute' },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
        color: Colors.white,
    },
});

//= =================================================================================
export default memo(Header);

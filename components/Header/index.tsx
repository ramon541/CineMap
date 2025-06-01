import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { EFontFamily } from '../../enums';
import IconRounded from '../IconRounded';
import Text from '../Text';

function Header({ title, onPressBack }: IHeaderProps) {
    return (
        <View style={styles.container}>
            {title && (
                <Text
                    text={title}
                    fontFamily={EFontFamily.Bold}
                    style={styles.title}
                />
            )}
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
        textAlign: 'center',
        width: '100%',
    },
});

//= =================================================================================
export default memo(Header);

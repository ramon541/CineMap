import { StyleSheet, View } from 'react-native';
import { Colors } from '../../styles';

function Hr({ color = Colors.primaryOpacity }: HrProps) {
    return <View style={[styles.hr, { backgroundColor: color }]} />;
}
//= =================================================================================
const styles = StyleSheet.create({
    hr: {
        width: '100%',
        height: 1,
    },
});

//= =================================================================================
export default Hr;

import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import { Colors } from '../../styles';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { EFontFamily } from '../../enums';
import Hr from '../Hr';

function Review({ user, rating, comment }: ReviewProps) {
    const hasComment = comment && comment.trim().length > 0;

    return (
        <View>
            <Text text={user.name} fontFamily={EFontFamily.Bold} />
            <View style={styles.starsContainer}>
                <Text text="Avaliação: " fontSize={12} color={Colors.grey} />
                <StarRatingDisplay
                    rating={rating}
                    color={Colors.orange}
                    starSize={12}
                />
            </View>
            <View style={styles.hrContainer}>
                <Hr />
            </View>
            <View style={styles.commentContainer}>
                <Text text="Comentário:" fontSize={12} color={Colors.grey} />
                <Text
                    text={
                        hasComment
                            ? `"${comment}"`
                            : 'Usuário não fez comentário'
                    }
                    fontFamily={EFontFamily.Regular_Italic}
                    fontSize={12}
                    style={{
                        textAlign: 'justify',
                        color: hasComment ? Colors.white : Colors.grey,
                    }}
                />
            </View>
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hrContainer: {
        marginVertical: 8,
    },
    commentContainer: {
        gap: 4,
    },
});

//= =================================================================================
export default Review;

import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import StarRating from 'react-native-star-rating-widget';

import reviewSchema, { IReviewZod } from './reviewSchema';
import { useShowSnackbar } from '../../../hooks';
import { Colors } from '../../../styles';
import InputError from '../../InputError';
import TextInput from '../../TextInput';
import ButtonText from '../../ButtonText';
import { useEffect, useState } from 'react';
import { useGlobalStore } from '../../../store/useSharedGlobalState';
import { newReview } from '../../../services';

function ReviewForm({ movieId, onSubmitForm }: ReviewFormProps<IUserReview>) {
    const { user } = useGlobalStore();
    const {
        control,
        handleSubmit,
        reset,
        setValue,
        getValues,
        formState: { errors, isLoading },
    } = useForm<IReviewZod>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            movieId,
            userId: user?.id,
            comment: '',
            rating: 0,
        },
    });
    const showSnackbar = useShowSnackbar();
    const [rating, setRating] = useState(0);

    //= =================================================================================
    useEffect(() => {
        setValue('rating', rating);
    }, [rating]);

    //= =================================================================================
    async function onSubmit(data: IReviewZod) {
        try {
            const { data: idNewReview } = await newReview(data);
            onSubmitForm({
                ...data,
                comment: data.comment ?? '',
                id: idNewReview,
                user: { id: user?.id ?? 0, name: user?.name ?? '' },
            });

            showSnackbar({
                text: 'Review feita com sucesso!',
                backgroundColor: Colors.green,
            });

            reset();
            setRating(0);
        } catch (error) {
            showSnackbar({
                text: `Erro ao fazer a Review. ${
                    (error as Error)?.message || 'Tente novamente mais tarde.'
                }`,
                backgroundColor: Colors.red,
            });
        }
    }

    //= =================================================================================
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="comment"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError
                        label="Comentário"
                        error={errors.comment?.message}>
                        <TextInput
                            placeholder="Escreva sua opinião (opcional)"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value || ''}
                            maxLength={300}
                            multiline
                        />
                    </InputError>
                )}
            />

            <View style={styles.starsContainer}>
                <StarRating
                    color={Colors.orange}
                    rating={rating}
                    onChange={setRating}
                />
            </View>

            <ButtonText
                text={!isLoading ? 'Fazer review' : 'Enviando review...'}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            />
        </View>
    );
}
//= =================================================================================
const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        gap: 16,
    },
    starsContainer: {
        alignItems: 'center',
    },
});

//= =================================================================================
export default ReviewForm;

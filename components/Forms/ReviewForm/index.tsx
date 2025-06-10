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
import { useState } from 'react';

function ReviewForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
    } = useForm<IReviewZod>({
        resolver: zodResolver(reviewSchema),
    });
    const showSnackbar = useShowSnackbar();

    const [rating, setRating] = useState(0);

    //= =================================================================================
    async function onSubmit(data: IReviewZod) {
        try {
            reset();
        } catch (error) {
            showSnackbar({
                text: `Erro ao fazer a Review. ${
                    (error as Error)?.message || 'Tente novamente mais tarde.'
                }`,
                backgroundColor: Colors.red,
                textColor: Colors.white,
            });
        }
    }

    return (
        <>
            {/* <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError label="Nome" error={errors.name?.message}>
                        <TextInput
                            placeholder="Exemplo da Silva"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={40}
                        />
                    </InputError>
                )}
            /> */}

            <StarRating rating={rating} onChange={setRating} />

            <ButtonText
                text={!isLoading ? 'Fazer review' : 'Enviando review...'}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            />
        </>
    );
}
//= =================================================================================
const styles = StyleSheet.create({});

//= =================================================================================
export default ReviewForm;

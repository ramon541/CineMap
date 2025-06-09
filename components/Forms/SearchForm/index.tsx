import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import InputError from '../../InputError';

import { searchMovies } from '../../../services';
import InputSearch from '../../InputSearch';
import searchSchema, { ISearchZod } from './searchSchema';

function SearchForm({ onSearch }: SearchFormProps) {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
    } = useForm<ISearchZod>({
        resolver: zodResolver(searchSchema),
    });

    //= =================================================================================
    async function onSubmit(data: ISearchZod) {
        try {
            const response = await searchMovies({ query: data.movie });

            onSearch(response.results);
        } catch (error) {
            console.error('Error searching movies:', error);
            onSearch([]);
        }
    }

    //= =================================================================================
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="movie"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError primary={false} error={errors.movie?.message}>
                        <InputSearch
                            onPressIcon={() =>
                                !isLoading && handleSubmit(onSubmit)()
                            }
                            inputProps={{
                                placeholder: 'Procure um filme...',
                                onBlur: onBlur,
                                onChangeText: onChange,
                                value: value ? value.toString() : '',
                                onSubmitEditing: () =>
                                    !isLoading && handleSubmit(onSubmit)(),
                            }}
                        />
                    </InputError>
                )}
            />
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
    center: {
        alignItems: 'center',
    },
});

//= =================================================================================
export default SearchForm;

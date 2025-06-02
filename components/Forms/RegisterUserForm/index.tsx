import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import userSchema, { IUserZod } from './userSchema';
import TextInput from '../../TextInput';
import ButtonText from '../../ButtonText';
import InputError from '../../InputError';

function RegisterUserForm() {
    const {
        control,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<IUserZod>({
        resolver: zodResolver(userSchema),
    });

    //= =================================================================================
    function onSubmit(data: IUserZod) {
        console.log('Form submitted with data:', data);
    }

    //= =================================================================================
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError label="Nome" error={errors.name?.message}>
                        <TextInput
                            placeholder="Exemplo da Silva"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    </InputError>
                )}
            />

            <Controller
                control={control}
                name="nickname"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError
                        label="Apelido"
                        error={errors.nickname?.message}
                    >
                        <TextInput
                            placeholder="cinema123"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    </InputError>
                )}
            />

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError label="E-mail" error={errors.email?.message}>
                        <TextInput
                            placeholder="seu.email@email.com"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            textContentType="emailAddress"
                        />
                    </InputError>
                )}
            />

            <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError
                        label="Data de Nascimento"
                        error={errors.birthDate?.message}
                    >
                        <TextInput
                            placeholder="00/00/0000"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value ? value.toString() : ''}
                            textContentType="birthdateDay"
                            keyboardType="numeric"
                        />
                    </InputError>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError label="Senha" error={errors.password?.message}>
                        <TextInput
                            placeholder="*********"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value ? value.toString() : ''}
                        />
                    </InputError>
                )}
            />

            <ButtonText
                text={!isLoading ? 'Cadastrar' : 'Criando conta...'}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            />
        </View>
    );
}

//= =================================================================================
const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
});

//= =================================================================================
export default RegisterUserForm;

import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

import { useShowSnackbar } from '../../../hooks';
import registerSchema, { IRegisterZod } from './registerSchema';
import TextInput from '../../TextInput';
import ButtonText from '../../ButtonText';
import InputError from '../../InputError';
import { dateMask } from '../../../utils';
import InputPassword from '../../InputPassword';
import { registerUser } from '../../../services';
import { Colors } from '../../../styles';

function RegisterUserForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
    } = useForm<IRegisterZod>({
        resolver: zodResolver(registerSchema),
    });
    const showSnackbar = useShowSnackbar();
    const { navigate } = useRouter();

    //= =================================================================================
    async function onSubmit(data: IRegisterZod) {
        try {
            await registerUser(data);

            showSnackbar({
                text: 'Cadastro criado com sucesso!',
                backgroundColor: Colors.green,
                textColor: Colors.white,
            });
            navigate('/authStack/signin');
            reset();
        } catch (error) {
            showSnackbar({
                text: `Erro ao criar cadastro. ${
                    (error as Error)?.message || 'Tente novamente mais tarde.'
                }`,
                backgroundColor: Colors.red,
                textColor: Colors.white,
            });
        }
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
                            maxLength={40}
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
                            maxLength={20}
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
                            keyboardType="email-address"
                            maxLength={40}
                            autoCapitalize="none"
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
                            onChangeText={(text) => onChange(dateMask(text))}
                            value={value ? value.toString() : ''}
                            textContentType="birthdateDay"
                            keyboardType="numeric"
                            maxLength={10}
                        />
                    </InputError>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputError label="Senha" error={errors.password?.message}>
                        <InputPassword
                            inputProps={{
                                onBlur: onBlur,
                                onChangeText: onChange,
                                value: value ? value.toString() : '',
                            }}
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

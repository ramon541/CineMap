import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

import { useShowSnackbar } from '../../../hooks';
import loginSchema, { ILoginZod } from './loginSchema';
import TextInput from '../../TextInput';
import ButtonText from '../../ButtonText';
import InputError from '../../InputError';
import InputPassword from '../../InputPassword';
import { Colors } from '../../../styles';

import { loginUser } from '../../../services';
import { useGlobalStore } from '../../../store/useSharedGlobalState';
import TouchableText from '../../TouchableText';

function LoginUserForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
    } = useForm<ILoginZod>({
        resolver: zodResolver(loginSchema),
    });
    const showSnackbar = useShowSnackbar();
    const { navigate } = useRouter();
    const { setUser, setToken, setAlreadyLoggedIn } = useGlobalStore();

    //= =================================================================================
    async function onSubmit(data: ILoginZod) {
        try {
            const {
                data: { user, accessToken },
            } = await loginUser(data);

            showSnackbar({
                text: 'Login realizado com sucesso!',
                backgroundColor: Colors.green,
                textColor: Colors.white,
            });
            setUser(user);
            setToken(accessToken);
            setAlreadyLoggedIn(true);

            navigate('(app)/home');
            reset();
        } catch (error) {
            showSnackbar({
                text: `Erro ao realizar login. ${
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
                text={!isLoading ? 'Login' : 'Logando...'}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            />
            <View style={styles.center}>
                <TouchableText
                    text="Esqueceu a senha?"
                    fontSize={12}
                    onPress={() => navigate('/authStack/forgot')}
                />
            </View>
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
export default LoginUserForm;

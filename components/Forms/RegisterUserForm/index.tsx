import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import userSchema, { IUserZod } from './userSchema';
import InputBase from '../../InputBase';
import TextInput from '../../TextInput';
import { Colors } from '../../../styles';
import ButtonText from '../../ButtonText';
import Text from '../../Text';
import { EFontFamily } from '../../../enums';

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
                    <View>
                        <InputBase label="Nome">
                            <TextInput
                                placeholder="Exemplo da Silva"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </InputBase>
                        <Text
                            text={errors.name?.message || ' '}
                            fontSize={12}
                            fontFamily={EFontFamily.SemiBold}
                            color={Colors.red}
                            style={{ marginTop: 8, marginLeft: 16 }}
                        />
                    </View>
                )}
            />
            <Controller
                control={control}
                name="nickname"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <InputBase label="Apelido">
                            <TextInput
                                placeholder="cinema123"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </InputBase>
                        <Text
                            text={errors.nickname?.message || ' '}
                            fontSize={12}
                            fontFamily={EFontFamily.SemiBold}
                            color={Colors.red}
                            style={{ marginTop: 8, marginLeft: 16 }}
                        />
                    </View>
                )}
            />

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <InputBase label="E-mail">
                            <TextInput
                                placeholder="seu.email@email.com"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                textContentType="emailAddress"
                            />
                        </InputBase>
                        <Text
                            text={errors.email?.message || ' '}
                            fontSize={12}
                            fontFamily={EFontFamily.SemiBold}
                            color={Colors.red}
                            style={{ marginTop: 8, marginLeft: 16 }}
                        />
                    </View>
                )}
            />

            <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <InputBase label="Data de Nascimento">
                            <TextInput
                                placeholder="00/00/0000"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value ? value.toString() : ''}
                                textContentType="birthdateDay"
                            />
                        </InputBase>
                        <Text
                            text={errors.birthDate?.message || ' '}
                            fontSize={12}
                            fontFamily={EFontFamily.SemiBold}
                            color={Colors.red}
                            style={{ marginTop: 8, marginLeft: 16 }}
                        />
                    </View>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <InputBase label="Senha">
                            <TextInput
                                placeholder="*********"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value ? value.toString() : ''}
                            />
                        </InputBase>
                        <Text
                            text={errors.password?.message || ' '}
                            fontSize={12}
                            fontFamily={EFontFamily.SemiBold}
                            color={Colors.red}
                            style={{ marginTop: 8, marginLeft: 16 }}
                        />
                    </View>
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

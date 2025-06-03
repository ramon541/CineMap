import { memo, useState } from 'react';
import InputIcon from '../InputIcon';
import { IInputIconProps } from '../../types/components/inputIcon';

function InputPassword({ ...props }: Pick<IInputIconProps, 'inputProps'>) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    //= =================================================================================
    function handleTogglePassword() {
        setIsPasswordVisible((prev) => !prev);
    }

    //= =================================================================================
    return (
        <InputIcon
            inputProps={{
                placeholder: '*********',
                maxLength: 20,
                secureTextEntry: !isPasswordVisible,
                ...props.inputProps,
            }}
            iconProps={{
                name: isPasswordVisible ? 'eye-off-outline' : 'eye-outline',
                onPress: handleTogglePassword,
            }}
        />
    );
}

export default memo(InputPassword);

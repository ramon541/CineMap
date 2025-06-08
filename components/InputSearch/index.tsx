import { memo } from 'react';
import InputIcon from '../InputIcon';
import { IInputIconProps } from '../../types/components/inputIcon';
import { Colors } from '../../styles';

function InputSearch({
    onPressIcon,
    ...props
}: Pick<IInputIconProps, 'inputProps' | 'onPressIcon'>) {
    return (
        <InputIcon
            inputProps={{
                maxLength: 40,
                ...props.inputProps,
            }}
            iconProps={{
                name: 'search',
                onPress: onPressIcon,
                size: 16,
                color: Colors.darkGrey,
            }}
        />
    );
}

export default memo(InputSearch);

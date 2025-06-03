import { IIconProps } from './icon';
import { TextInputProps } from 'react-native';

export interface IInputIconProps {
    inputProps: TextInputProps;
    iconProps: IIconProps;
    onPressIcon?: VoidFunction;
}

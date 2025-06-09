import { TextStyle } from 'react-native';
import { IIconProps } from './icon';
import { EFontFamily } from '../../enums';

export interface IconTextProps {
    iconProps: IIconProps;
    textProps: ITextProps<TextStyle, EFontFamily>;
}

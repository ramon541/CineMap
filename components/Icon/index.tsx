import { memo } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '../../styles';
import { IIconProps } from '../../types/components/icon';

function Icon({ color = Colors.white, size = 24, ...props }: IIconProps) {
    return <Ionicons color={color} size={size} {...props} />;
}

//= =================================================================================
export default memo(Icon);

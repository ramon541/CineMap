import { TextInput as TextInputRN, TextInputProps } from 'react-native';
import { memo } from 'react';

import { Colors } from '../../styles';
import { EFontFamily } from '../../enums';

function TextInput({ style, ...props }: TextInputProps) {
    return (
        <TextInputRN
            placeholderTextColor={Colors.darkGrey}
            style={[
                {
                    color: Colors.white,
                    fontFamily: EFontFamily.SemiBold,
                    fontSize: 14,
                    paddingHorizontal: 0,
                    paddingVertical: 4,
                },
                style,
            ]}
            {...props}
        />
    );
}

//= =================================================================================
export default memo(TextInput);

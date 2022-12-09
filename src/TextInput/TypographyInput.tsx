import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TypographyContext } from 'src/TypographyProvider';
import type { TypographyInputProps } from '../types';

/**
 * @param {TypographyInputProps} props
 * @returns {React.ReactElement}
 * */

const TypographyInput: React.FunctionComponent<TypographyInputProps> = ({
  children,
  variant,
  style,
  ...rest
}: TypographyInputProps): React.ReactElement => {
  return (
    <TypographyContext.Consumer>
      {(typographyStyle) => {
        const base = typographyStyle.base;
        let variantStyle = {};
        if (variant) {
          variantStyle = typographyStyle[variant];
        }
        return (
          <RNTextInput {...rest} style={[base, variantStyle, style]}>
            {children}
          </RNTextInput>
        );
      }}
    </TypographyContext.Consumer>
  );
};

export default TypographyInput;

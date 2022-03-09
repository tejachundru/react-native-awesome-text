import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';
import type { TypographyProps } from './types';
import { TypographyContext } from './TypographyProvider';

/**
 * @param {TypographyProps} props
 * @returns {React.ReactElement}
 * */

const Typography: FunctionComponent<TypographyProps> = ({
  children,
  variant,
  style,
  ...rest
}) => {
  return (
    <TypographyContext.Consumer>
      {(typographyStyle) => {
        const base = typographyStyle.base;
        let variantStyle = {};
        if (variant) {
          variantStyle = typographyStyle[variant];
        }
        return (
          <RNText {...rest} style={[base, variantStyle, style]}>
            {children}
          </RNText>
        );
      }}
    </TypographyContext.Consumer>
  );
};

export default Typography;

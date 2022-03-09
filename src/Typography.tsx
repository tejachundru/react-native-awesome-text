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
}) => {
  return (
    <TypographyContext.Consumer>
      {(typographyStyle) => {
        const base = typographyStyle.base;
        let variantStyle = {};
        if (variant) {
          variantStyle = typographyStyle[variant];
        }
        return <RNText style={[base, variantStyle, style]}>{children}</RNText>;
      }}
    </TypographyContext.Consumer>
  );
};

export default Typography;

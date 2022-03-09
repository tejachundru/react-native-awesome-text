import React, { createContext, FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import type { TypographyProviderProps, TypographyStyle } from './types';

export const TypographyContext = createContext<TypographyStyle>({
  base: {},
});

/**
 * @param {TypographyProviderProps} props
 * @returns {React.ReactElement}
 **/
const TypographyProvider: FunctionComponent<TypographyProviderProps> = (
  props
) => {
  const { children, typography } = props;
  const [typographyStyle, setTypographyStyle] =
    useState<TypographyStyle>(typography);

  useEffect(() => {
    setTypographyStyle(typography);
  }, [typography]);

  return (
    <TypographyContext.Provider value={typographyStyle}>
      {children}
    </TypographyContext.Provider>
  );
};

export default TypographyProvider;

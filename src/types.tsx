import type { ViewStyle, TextProps } from 'react-native';

export type TypographyProps = {
  children: React.ReactNode;
  variant?: string;
  style?: ViewStyle;
} & TextProps;

interface objectLiteral {
  [key: string]: ViewStyle;
}

export type TypographyStyle = {
  base: any | {};
} & objectLiteral;

export type TypographyProviderProps = {
  children: React.ReactNode;
  typography: any;
};

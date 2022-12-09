import type { ViewStyle, TextProps, TextInputProps } from 'react-native';

/**
 * CommonTypographyProps is the common props that are used in both Text and TextInput components.
 * @property children - The text to be displayed.
 * @property {string} variant - This is the type of text you want to display. user defined.
 * @property {ViewStyle} style - This is the style that will be applied to the Text component.
 */
type CommonTypographyProps = {
  children: React.ReactNode;
  variant?: string;
  style?: ViewStyle;
};

/**
 * TypographyProps is the props that are used in Text component.
 * @property {TextProps} rest - This is the rest of the props that are used in Text component.
 * @see {@link https://reactnative.dev/docs/text#props}
 */
export type TypographyProps = CommonTypographyProps & TextProps;

/**
 * TypographyInputProps is the props that are used in TextInput component.
 * @property {TextInputProps} rest - This is the rest of the props that are used in TextInput component.
 * @see {@link https://reactnative.dev/docs/textinput#props}
 */
export type TypographyInputProps = CommonTypographyProps & TextInputProps;

interface objectLiteral {
  [key: string]: ViewStyle;
}

/**
 * TypographyStyle is the type of the typography object.
 * @property {ViewStyle} base - This is the base style that will be applied to the Text component.
 * @property {objectLiteral} rest - This is the rest of the styles that will be applied to the Text component.
 */
export type TypographyStyle = {
  base: ViewStyle;
} & objectLiteral;

export type TypographyProviderProps = {
  children: React.ReactNode;
  typography: any;
};

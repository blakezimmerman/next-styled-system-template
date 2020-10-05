/* eslint-disable no-restricted-imports */
import React, { useContext } from "react";
import * as styledComponents from "styled-components";
import {
  BorderStyleProps,
  DisplayProps,
  FlexboxProps as GenericFlexboxProps,
  FontSizeProps as GenericFontSizeProps,
  FontStyleProps,
  FontWeightProps as GenericFontWeightProps,
  GridProps as GenericGridProps,
  LetterSpacingProps,
  LineHeightProps,
  OpacityProps,
  OverflowProps,
  PositionProps as GenericPositionProps,
  ResponsiveValue,
  SpaceProps as GenericSpaceProps,
  TextAlignProps,
  VerticalAlignProps,
} from "styled-system";
import * as theme from "./theme";
import { normalizeCss } from "./normalizeCss";
import { NoInfer } from "../types/noInfer";

export { css, createGlobalStyle, keyframes, ServerStyleSheet, styled };

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeContext,
  ThemeProvider: BaseThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export type Theme = typeof theme;

export type ColorValue = keyof typeof theme.colors;
export type FontValue = keyof typeof theme.fonts;
export type BorderWidthValue = keyof typeof theme.borderWidths;
export type FontSizeValue = keyof typeof theme.fontSizes;
export type FontWeightValue = keyof typeof theme.fontWeights;
export type RadiusValue = keyof typeof theme.radii;
export type ShadowValue = keyof typeof theme.shadows;
export type SizeValue = keyof typeof theme.sizes;
export type SpaceValue = keyof typeof theme.spaces;
export type DurationValue = keyof typeof theme.durations;
export type TransitionValue = {
  [property: string]: {
    duration: DurationValue;
    timing?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
    delay?: DurationValue;
  };
};
export type LayerValue = keyof typeof theme.layers;
export type ZIndexValue =
  | CSSGlobalValues
  | "auto"
  | number
  | LayerValue
  | { layer: LayerValue; local: number };

export type ThemedStyledProps = styledComponents.ThemedStyledProps<{}, Theme>;

type CSSGlobalValues = "inherit" | "initial" | "unset";

export type SpaceProps = GenericSpaceProps<Theme, SpaceValue | string>;
export type LayoutProps = DisplayProps<Theme> &
  VerticalAlignProps<Theme> &
  OverflowProps<Theme> & {
    visibility?: ResponsiveValue<"visible" | "hidden" | "collapse" | CSSGlobalValues>;
    height?: ResponsiveValue<SizeValue | string, Theme>;
    width?: ResponsiveValue<SizeValue | string, Theme>;
    minHeight?: ResponsiveValue<SizeValue | string, Theme>;
    minWidth?: ResponsiveValue<SizeValue | string, Theme>;
    maxHeight?: ResponsiveValue<SizeValue | string, Theme>;
    maxWidth?: ResponsiveValue<SizeValue | string, Theme>;
  };
export type ColorProps = OpacityProps<Theme> & {
  textColor?: ResponsiveValue<ColorValue, Theme>;
  backgroundColor?: ResponsiveValue<ColorValue, Theme>;
  bg?: ResponsiveValue<ColorValue, Theme>;
};
export type BorderProps = BorderStyleProps<Theme> & {
  borderWidth?: ResponsiveValue<BorderWidthValue, Theme>;
  borderTopWidth?: ResponsiveValue<BorderWidthValue, Theme>;
  borderBottomWidth?: ResponsiveValue<BorderWidthValue, Theme>;
  borderLeftWidth?: ResponsiveValue<BorderWidthValue, Theme>;
  borderRightWidth?: ResponsiveValue<BorderWidthValue, Theme>;

  borderColor?: ResponsiveValue<ColorValue, Theme>;
  borderTopColor?: ResponsiveValue<ColorValue, Theme>;
  borderBottomColor?: ResponsiveValue<ColorValue, Theme>;
  borderLeftColor?: ResponsiveValue<ColorValue, Theme>;
  borderRightColor?: ResponsiveValue<ColorValue, Theme>;

  borderRadius?: ResponsiveValue<RadiusValue, Theme>;
  borderTopLeftRadius?: ResponsiveValue<RadiusValue, Theme>;
  borderTopRightRadius?: ResponsiveValue<RadiusValue, Theme>;
  borderBottomLeftRadius?: ResponsiveValue<RadiusValue, Theme>;
  borderBottomRightRadius?: ResponsiveValue<RadiusValue, Theme>;
};
export type TypographyProps = FontStyleProps &
  LineHeightProps &
  LetterSpacingProps &
  TextAlignProps &
  OpacityProps<Theme> & {
    fontSize?: ResponsiveValue<FontSizeValue, Theme>;
    fontFamily?: ResponsiveValue<FontValue, Theme>;
    fontWeight?: ResponsiveValue<FontWeightValue, Theme>;
    textColor?: ResponsiveValue<ColorValue, Theme>;
    textTransform?: ResponsiveValue<
      | "none"
      | "capitalize"
      | "uppercase"
      | "lowercase"
      | "full-width"
      | "full-size-kana"
      | CSSGlobalValues,
      Theme
    >;
    textDecorationColor?: ResponsiveValue<ColorValue, Theme>;
    textDecorationLine?: ResponsiveValue<
      CSSGlobalValues | "none" | "underline" | "overline" | "line-through" | string,
      Theme
    >;
    textDecorationStyle?: ResponsiveValue<
      CSSGlobalValues | "solid" | "double" | "dotted" | "dashed" | "wavy",
      Theme
    >;
    textDecorationThickness?: ResponsiveValue<BorderWidthValue, Theme>;
  };
export type FontSizeProps = GenericFontSizeProps<Theme, FontSizeValue>;
export type FontFamilyProps = {
  fontFamily?: ResponsiveValue<FontValue, Theme>;
};
export type FontWeightProps = GenericFontWeightProps<Theme, FontWeightValue>;
export type ShadowProps = {
  shadow?: ResponsiveValue<ShadowValue, Theme>;
};
export type FlexboxProps = GenericFlexboxProps<Theme> & {
  inline?: ResponsiveValue<boolean, Theme>;
};
export type FlexboxItemProps = {
  order?: ResponsiveValue<number, Theme>;
  flexGrow?: ResponsiveValue<number, Theme>;
  flexShrink?: ResponsiveValue<number, Theme>;
  flexBasis?: ResponsiveValue<string, Theme>;
  flex?: ResponsiveValue<string, Theme>;
  alignSelf?: ResponsiveValue<
    "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
    Theme
  >;
};
export type CSSGridProps = GenericGridProps<Theme> & {
  inline?: ResponsiveValue<boolean, Theme>;
  justifyItems?: ResponsiveValue<"start" | "end" | "center" | "stretch", Theme>;
  alignItems?: ResponsiveValue<"start" | "end" | "center" | "stretch", Theme>;
  justifyContent?: ResponsiveValue<
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly",
    Theme
  >;
  alignContent?: ResponsiveValue<
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly",
    Theme
  >;
};
export type CSSGridItemProps = {
  gridColumnStart?: ResponsiveValue<string, Theme>;
  gridColumnEnd?: ResponsiveValue<string, Theme>;
  gridRowStart?: ResponsiveValue<string, Theme>;
  gridRowEnd?: ResponsiveValue<string, Theme>;
  gridColumn?: ResponsiveValue<string, Theme>;
  gridRow?: ResponsiveValue<string, Theme>;
  gridArea?: ResponsiveValue<string, Theme>;
  justifySelf?: ResponsiveValue<"start" | "end" | "center" | "stretch", Theme>;
  alignSelf?: ResponsiveValue<"start" | "end" | "center" | "stretch", Theme>;
  placeSelf?: ResponsiveValue<string, Theme>;
};
export type TransitionProps = {
  // Unfortunately we _have to_ pass an array for this responsive value
  // because TransitionValue is an object type and styled-system will try to
  // unwrap the value as if it were a responsive props array if we do not
  transition?: Exclude<ResponsiveValue<TransitionValue, Theme>, TransitionValue>;
};
export type ZIndexProps = {
  // Unfortunately if we use `{ layer: LayerValue, local: number }`, we _have to_ wrap
  // this value in an array because styled-system will try to unwrap the object as if
  // it were a responsive props array if we do not
  zIndex?:
    | ResponsiveValue<Exclude<ZIndexValue, { layer: LayerValue; local: number }>, Theme>
    | Exclude<ResponsiveValue<ZIndexValue, Theme>, ZIndexValue>;
};
export type PositionProps = Omit<GenericPositionProps<Theme>, "zIndex"> & ZIndexProps;
export type TransformProps = {
  transform?: ResponsiveValue<string>;
  transformOrigin?: ResponsiveValue<string>;
};
export type CursorProps = {
  cursor?: ResponsiveValue<
    | "auto"
    | "default"
    | "none"
    | "context-menu"
    | "help"
    | "pointer"
    | "progress"
    | "wait"
    | "cell"
    | "crosshair"
    | "text"
    | "vertical-text"
    | "alias"
    | "copy"
    | "move"
    | "no-drop"
    | "not-allowed"
    | "grab"
    | "grabbing"
    | "all-scroll"
    | "col-resize"
    | "row-resize"
    | "n-resize"
    | "e-resize"
    | "s-resize"
    | "w-resize"
    | "ne-resize"
    | "nw-resize"
    | "se-resize"
    | "sw-resize"
    | "ew-resize"
    | "ns-resize"
    | "nesw-resize"
    | "nwse-resize"
    | "zoom-in"
    | "zoom-out",
    Theme
  >;
};
export type GapProps = {
  gap?: ResponsiveValue<SpaceValue | string, Theme>;
};
export type AsProps = {
  // `string` should be `keyof JSX.IntrinsicElements` but the performance cost is way too high
  as?: string | React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

/**
 * A `PolymorphicComponent` is a React component that accepts the polymorphic `as` prop
 * that lets you render the component to an arbitrary tag or React component.
 * This type exists so that you can supply a second type paramter for the attributes
 * or props accepted by the custom tag or component given to the `as` prop.
 */
export type PolymorphicComponent<
  TProps extends {} = {},
  TDefaultAttributesProps extends {} = JSX.IntrinsicElements["div"]
> = {
  <TAttributesProps extends {} = TDefaultAttributesProps>(
    props: React.PropsWithChildren<
      TProps &
        AsProps & { className?: string } & (NoInfer<TAttributesProps> extends never
          ? {}
          : NoInfer<TAttributesProps>)
    >,
  ): React.ReactElement | null;
  defaultProps?: Partial<TProps & AsProps & { className?: string }>;
  displayName?: string;
};

export const get = {
  /** Use with `border-width` */
  borderWidth: (borderWidth: BorderWidthValue) => (props: ThemedStyledProps) =>
    props.theme.borderWidths[borderWidth],

  /** Use with `color`, `background-color`, `border-color` */
  color: (colorName: ColorValue) => (props: ThemedStyledProps) =>
    props.theme.colors[colorName],

  /** Use with `font-family` */
  font: (fontName: FontValue) => (props: ThemedStyledProps) =>
    props.theme.fonts[fontName],

  /** Use with `font-size` */
  fontSize: (fontSize: FontSizeValue) => (props: ThemedStyledProps) =>
    props.theme.fontSizes[fontSize],

  /** Use with `font-weight` */
  fontWeight: (fontWeight: FontWeightValue) => (props: ThemedStyledProps) =>
    props.theme.fontWeights[fontWeight],

  /** Use with `border-radius` */
  radius: (radius: RadiusValue) => (props: ThemedStyledProps) =>
    props.theme.radii[radius],

  /** Use with `box-shadow`, `text-shadow` */
  shadow: (shadow: ShadowValue) => (props: ThemedStyledProps) =>
    props.theme.shadows[shadow],

  /** Use with `height`, `width`, `min-height`, `min-width`, `max-height`, `max-width` */
  size: (size: SizeValue) => (props: ThemedStyledProps) => props.theme.sizes[size],

  /** Use with `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`,
   *  `padding-right`, `padding-bottom`, `padding-left`, `grid-gap`, `grid-column-gap`, `grid-row-gap`
   */
  space: (space: SpaceValue) => (props: ThemedStyledProps) => props.theme.spaces[space],

  /** Use with `transition` */
  duration: (duration: DurationValue) => (props: ThemedStyledProps) =>
    props.theme.durations[duration],

  /** Use with `z-index` */
  layer: (layer: LayerValue) => (props: ThemedStyledProps) => props.theme.layers[layer],
};

const GlobalStyle = createGlobalStyle`
  ${normalizeCss}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${get.font("body")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${get.color("text")};
  }

  a {
    color: ${get.color("link")};
    transition: ${get.duration(1)};
  }

  a:active,a:hover {
    color: ${get.color("linkHover")};
  }

  :focus { /* fallback for browsers that don't support :focus-visible */
    outline: 1px dotted ${get.color("primary")};
    outline-offset: ${get.space(1)};
  }

  /* remove focus indicator on mouse focus */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* noticable focus style for keyboard focus */
  a:focus-visible,a:-moz-focusring,button:focus-visible,button:-moz-focusring,input:focus-visible,input:-moz-focusring {
    outline: 1px dotted ${get.color("primary")};
    outline-offset: ${get.space(1)};
  }
`;

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
  return (
    <BaseThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </BaseThemeProvider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

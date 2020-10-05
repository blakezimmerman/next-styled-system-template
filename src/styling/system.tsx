/* eslint-disable no-restricted-imports */
import {
  flexbox as baseFlexbox,
  grid as baseGrid,
  compose,
  display,
  fontStyle,
  letterSpacing,
  lineHeight,
  opacity,
  overflow,
  system,
  textAlign,
  verticalAlign,
  Scale,
} from "styled-system";
export { space } from "styled-system";
import * as theme from "./theme";
import { TransitionValue, ZIndexValue } from ".";

export const color = compose(
  system({
    textColor: { property: "color", scale: "colors" },
    backgroundColor: { property: "backgroundColor", scale: "colors" },
    bg: { property: "backgroundColor", scale: "colors" },
  }),
  opacity,
);

export const border = system({
  borderWidth: { property: "borderWidth", scale: "borderWidths" },
  borderTopWidth: { property: "borderTopWidth", scale: "borderWidths" },
  borderBottomWidth: { property: "borderBottomWidth", scale: "borderWidths" },
  borderLeftWidth: { property: "borderLeftWidth", scale: "borderWidths" },
  borderRightWidth: { property: "borderRightWidth", scale: "borderWidths" },

  borderColor: { property: "borderColor", scale: "colors" },
  borderTopColor: { property: "borderTopColor", scale: "colors" },
  borderBottomColor: { property: "borderBottomColor", scale: "colors" },
  borderLeftColor: { property: "borderLeftColor", scale: "colors" },
  borderRightColor: { property: "borderRightColor", scale: "colors" },

  borderRadius: { property: "borderRadius", scale: "radii" },
  borderTopLeftRadius: { property: "borderTopLeftRadius", scale: "radii" },
  borderTopRightRadius: { property: "borderTopRightRadius", scale: "radii" },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii",
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii",
  },
  borderStyle: true,
  borderTopStyle: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderRightStyle: true,
});

const sizeTransform = (value: string | keyof typeof theme.sizes, scale?: Scale) => {
  if (typeof value === "number" && scale) {
    const themeValue = scale[value];
    return themeValue;
  } else {
    return value;
  }
};

export const layout = compose(
  display,
  verticalAlign,
  overflow,
  system({
    visibility: true,
    height: { property: "height", scale: "sizes", transform: sizeTransform },
    width: { property: "width", scale: "sizes", transform: sizeTransform },
    minHeight: { property: "minHeight", scale: "sizes", transform: sizeTransform },
    minWidth: { property: "minWidth", scale: "sizes", transform: sizeTransform },
    maxHeight: { property: "maxHeight", scale: "sizes", transform: sizeTransform },
    maxWidth: { property: "maxWidth", scale: "sizes", transform: sizeTransform },
  }),
);

export const shadow = system({
  shadow: { property: "boxShadow", scale: "shadows" },
});

export const typography = compose(
  fontStyle,
  lineHeight,
  letterSpacing,
  textAlign,
  opacity,
  system({
    fontSize: { property: "fontSize", scale: "fontSizes" },
    fontFamily: { property: "fontFamily", scale: "fonts" },
    fontWeight: { property: "fontWeight", scale: "fontWeights" },
    textColor: { property: "color", scale: "colors" },
    textTransform: true,
    textDecorationColor: true,
    textDecorationLine: true,
    textDecorationStyle: true,
    textDecorationThickness: true,
  }),
);

export const cursor = system({ cursor: true });

export const flexbox = compose(
  baseFlexbox,
  system({
    inline: {
      property: "display",
      transform: (value) => (value === true ? "inline-flex" : "flex"),
    },
  }),
);

export const flexItem = system({
  order: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  flex: true,
  alignSelf: true,
});

export const grid = compose(
  baseGrid,
  system({
    inline: {
      property: "display",
      transform: (value) => (value === true ? "inline-grid" : "grid"),
    },
    justifyItems: true,
    alignItems: true,
    justifyContent: true,
    alignContent: true,
  }),
);

export const gridItem = system({
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridRow: true,
  gridArea: true,
  justifySelf: true,
  alignSelf: true,
  placeSelf: true,
});

const zIndex = system({
  zIndex: {
    property: "zIndex",
    scale: "layers",
    transform: (value: ZIndexValue, scale) => {
      if (
        value === "inherit" ||
        value === "initial" ||
        value === "unset" ||
        value === "auto" ||
        typeof value === "number"
      ) {
        return value;
      }
      const layerScale = scale as typeof theme.layers | undefined;
      if (typeof value === "object") {
        const layerValue = layerScale?.[value.layer];
        return layerValue !== undefined ? `calc(${layerValue} + ${value.local})` : "";
      } else {
        return layerScale?.[value] ?? "";
      }
    },
  },
});

export const position = compose(
  zIndex,
  system({
    position: true,
    top: true,
    right: true,
    bottom: true,
    left: true,
  }),
);

export const transition = system({
  transition: {
    property: "transition",
    scale: "durations",
    transform: (value: TransitionValue, scale) =>
      Object.entries(value)
        .map(([property, transition]) => {
          const duration =
            scale && transition.duration ? ` ${scale[transition.duration]}s` : "";
          const timing = transition.timing ? ` ${transition.timing}` : "";
          const delay = scale && transition.delay ? ` ${scale[transition.delay]}s` : "";

          return property + duration + timing + delay;
        })
        .join(", "),
  },
});

export const transform = system({
  transform: true,
  transformOrigin: true,
});

export const verticalGap = system({
  gap: {
    // Arbitrary selectors are valid properties despite the types saying otherwise
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    property: "& > * + *" as any,
    scale: "spaces",
    transform: (value, scale) => ({
      // Spaces scale definitely is non-nullable
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      marginTop: `${scale![value] ?? value} !important`,
    }),
  },
});

export const inlineGap = system({
  gap: {
    // Arbitrary selectors are valid properties despite the types saying otherwise
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    property: "& > *" as any,
    scale: "spaces",
    transform: (value, scale) => ({
      // Spaces scale definitely is non-nullable
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      marginLeft: `${scale![value] ?? value} !important`,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      marginTop: `${scale![value] ?? value} !important`,
    }),
  },
});

/** To be used with inlineGap */
export const negativeGapMargins = system({
  gap: {
    properties: ["marginLeft", "marginTop"],
    scale: "spaces",
    transform: (value, scale) =>
      // Spaces scale definitely is non-nullable
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `-${scale![value] ?? value} !important`,
  },
});

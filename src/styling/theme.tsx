export const colors = {
  /**
   * Primary accent color. It will be used for actionable items and accents
   */
  primary: "#1e90ff",

  /**
   * Secondary accent colors that can be used when the primary color is not enough
   */
  accent1: "#901eff",
  accent2: "#1eff90",
  accent3: "#ff1e90",
  accent4: "#ff901e",

  /**
   * The background colors include colors for the backgrounds of app content.
   *
   * The app content backgrounds are appended with numbers that increase in the order
   * that the colors should be layered on top of each other.
   */
  background1: "#ffffff", // Base background of app content
  background2: "#ededed", // Backgrounds that sit on top of background1
  background3: "#dddddd", // Backgrounds that sit on top of background2

  text: "#000000", // Text that sits on the background colors
  secondaryText: "#acacac", // Secondary text that sits on background colors
  accentText: "#ffffff", // Text that sits on primary and secondary accent colors

  link: "#6fb8ff", // Link color
  linkHover: "#4ba6ff", // For alternate states on links like hover

  border: "#cacaca", // For borders around elements

  success: "#00ff00", // For success messages
  warning: "#ffff00", // For warning messages
  failure: "#ff0000", // For error messages
  disabled: "#acacac", // For disabled elements

  transparent: "rgba(0,0,0,0)",
};

export const fonts = {
  body: "Helvetica, sans-serif",
  monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
};

export const borderWidths = {
  0: "0px",
  1: "1px",
  2: "2px",
  3: "4px",
  4: "6px",
};

export const fontSizes = {
  // Minor third scale from https://type-scale.com/
  0: "0.579rem", // 9.26px
  1: "0.694rem", // 11.11px
  2: "0.833rem", // 13.33px
  3: "1rem", // 16.00px
  4: "1.2rem", // 19.20px
  5: "1.44rem", // 23.04px
  6: "1.728rem", // 27.65px
  7: "2.074rem", // 33.18px
  8: "2.488rem", // 39.81px
};

export const fontWeights = {
  0: 300, // light
  1: 400, // regular
  2: 500, // medium
  3: 700, // bold
  4: 800, // extra bold
};

export const radii = {
  0: "0px",
  1: "2px",
  2: "4px",
  3: "8px",
  4: "16px",
  5: "9999px", // Completely round (for circles)
};

export const shadows = {
  0: "0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.12)",
  1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
};

export const sizes = {
  0: "0px",
  1: "2px",
  2: "4px",
  3: "8px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
  11: "192px",
  12: "256px",
  13: "384px",
  14: "512px",
  15: "768px",
  16: "1024px",
};

export const spaces = {
  0: "0px",
  1: "2px",
  2: "4px",
  3: "8px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
  11: "192px",
  12: "256px",
  13: "384px",
  14: "512px",
  15: "768px",
  16: "1024px",
};
// styled-system expects the `spaces` scale to be named `space`
// so we make the scale available under that name
export const space = spaces;

export const durations = {
  0: 0,
  1: 0.15,
  2: 0.3,
  3: 0.5,
  4: 0.75,
  5: 1,
  6: 1.5,
  7: 2,
  8: 2.5,
  9: 3,
};

export const layers = {
  disclosure: 100,
};

export const breakpoints = ["48em" as const];

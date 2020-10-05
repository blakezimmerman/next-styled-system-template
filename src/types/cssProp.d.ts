import { CSSProp } from "styled-components"; // eslint-disable-line no-restricted-imports
import { Theme } from "styling";

declare module "react" {
  interface Attributes {
    css?: CSSProp<Theme>;
  }
}

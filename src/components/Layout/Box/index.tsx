// eslint-disable-next-line no-restricted-imports
import {
  border,
  color,
  cursor,
  layout,
  position,
  shadow,
  space,
  transform,
  transition,
} from "styling/system";

import {
  styled,
  BorderProps,
  ColorProps,
  CursorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransformProps,
  TransitionProps,
  PolymorphicComponent,
} from "styling";

export type BoxProps = BorderProps &
  ColorProps &
  CursorProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TransformProps &
  TransitionProps;

export const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
  },
  border,
  color,
  cursor,
  layout,
  position,
  shadow,
  space,
  transform,
  transition,
) as PolymorphicComponent<BoxProps>;

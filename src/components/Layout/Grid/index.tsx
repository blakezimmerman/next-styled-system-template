// eslint-disable-next-line no-restricted-imports
import { grid, gridItem } from "styling/system";

import { styled, CSSGridProps, CSSGridItemProps, PolymorphicComponent } from "styling";
import { Box, BoxProps } from "../Box";

export type GridProps = Omit<BoxProps, "display"> & CSSGridProps;

export const Grid = styled(Box)<GridProps>(
  {
    display: "grid",
  },
  grid,
) as PolymorphicComponent<GridProps>;

export type GridItemProps = BoxProps & CSSGridItemProps;

export const GridItem = styled(Box)<GridItemProps>(gridItem) as PolymorphicComponent<
  GridItemProps
>;

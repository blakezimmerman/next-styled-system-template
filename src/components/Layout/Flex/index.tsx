// eslint-disable-next-line no-restricted-imports
import { flexbox, flexItem } from "styling/system";

import { styled, FlexboxProps, FlexboxItemProps, PolymorphicComponent } from "styling";
import { Box, BoxProps } from "../Box";

export type FlexProps = Omit<BoxProps, "display"> & FlexboxProps;

export const Flex = styled(Box)<FlexProps>(
  {
    display: "flex",
  },
  flexbox,
) as PolymorphicComponent<FlexProps>;

export type FlexItemProps = BoxProps & FlexboxItemProps;

export const FlexItem = styled(Box)<FlexItemProps>(flexItem) as PolymorphicComponent<
  FlexItemProps
>;

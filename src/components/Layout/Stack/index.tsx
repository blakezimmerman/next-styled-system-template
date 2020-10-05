// eslint-disable-next-line no-restricted-imports
import { verticalGap } from "styling/system";

import { styled, GapProps, PolymorphicComponent } from "styling";
import { Flex, FlexProps } from "../Flex";

export type StackProps = GapProps & Omit<FlexProps, "flexDirection">;

export const Stack = styled(Flex)<StackProps>(
  {
    flexDirection: "column",
  },
  verticalGap,
) as PolymorphicComponent<StackProps>;

Stack.defaultProps = {
  gap: 0,
};

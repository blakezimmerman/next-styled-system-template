// eslint-disable-next-line no-restricted-imports
import { inlineGap, negativeGapMargins } from "styling/system";

import React from "react";
import { styled, GapProps, PolymorphicComponent, AsProps } from "styling";
import { Flex, FlexProps } from "../Flex";

export type InlineProps = GapProps & Omit<FlexProps, "flexDirection" | "flexWrap">;

export const Inline: PolymorphicComponent<InlineProps> = React.forwardRef<
  HTMLDivElement,
  InlineProps & AsProps
>(({ children, gap = 0, ...flexProps }, ref) => {
  const {
    justifyContent,
    alignItems,
    justifyItems,
    alignContent,
    as,
    ...rest
  } = flexProps;
  return (
    <Flex<JSX.IntrinsicElements["div"]> {...rest} as={as} ref={ref}>
      <Inner
        gap={gap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        justifyItems={justifyItems}
        alignContent={alignContent}
        flex={1}
      >
        {children}
      </Inner>
    </Flex>
  );
});
Inline.displayName = "Inline";

const Inner = styled(Flex)<GapProps>(
  {
    flexWrap: "wrap",
  },
  negativeGapMargins,
  inlineGap,
);

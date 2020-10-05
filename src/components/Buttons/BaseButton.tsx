import React from "react";
import { AsProps } from "styling";
import { Flex, FlexProps } from "../Layout";

export type BaseButtonProps = React.ButtonHTMLAttributes<unknown> &
  FlexProps &
  AsProps &
  JSX.IntrinsicElements["button"];

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => (
    <Flex<React.ButtonHTMLAttributes<HTMLButtonElement>>
      as="button"
      borderStyle="none"
      p={0}
      bg="transparent"
      cursor={props.disabled ? "not-allowed" : "pointer"}
      ref={ref}
      style={{ textDecoration: "none" }} // remove underline when rendered as anchor tag
      {...props}
    />
  ),
);
BaseButton.displayName = "BaseButton";

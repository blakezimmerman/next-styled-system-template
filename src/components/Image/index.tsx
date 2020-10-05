import React from "react";
import { Box, BoxProps } from "../Layout";

export type ImageProps = JSX.IntrinsicElements["img"] & BoxProps;

export const Image = ({ height, width, ...props }: ImageProps) => {
  return (
    <Box<JSX.IntrinsicElements["img"]>
      as="img"
      display="block"
      height={height ?? "100%"}
      width={width ?? "100%"}
      css="object-fit: contain"
      {...props}
    />
  );
};

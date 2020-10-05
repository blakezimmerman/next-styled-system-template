import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styling";

addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));

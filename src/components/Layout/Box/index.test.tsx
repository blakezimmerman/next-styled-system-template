import React from "react";
import { renderWithTheme, screen } from "testing";
import { Box } from ".";

describe("Box", () => {
  test("renders children", () => {
    renderWithTheme(<Box>Hello World</Box>);
    expect(screen.getByText("Hello World", { exact: false })).toBeDefined();
  });
});

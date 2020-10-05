// eslint-disable-next-line no-restricted-imports
import { render } from "@testing-library/react";
import React from "react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { ThemeProvider } from "styling";

type DefaultParams = Parameters<typeof render>;
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

export const renderWithTheme = (
  ui: React.ReactElement<unknown>,
  { router, ...options }: RenderOptions = {},
) => {
  const wrapper = <ThemeProvider>{ui}</ThemeProvider>;

  return render(
    router ? (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {wrapper}
      </RouterContext.Provider>
    ) : (
      wrapper
    ),
    options,
  );
};

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

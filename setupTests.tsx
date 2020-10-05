/* eslint-disable */
import "@testing-library/jest-dom";

// Force deterministic dates
const Date = global.Date;
global.Date.now = Date.now;

// Mock window.matchMedia
window.matchMedia =
  window.matchMedia ||
  (function () {
    return {
      matches: false,
      addListener: () => {
        return;
      },
      removeListener: () => {
        return;
      },
    };
  } as any);

const consoleError = console.error;

// Fail tests on any warning
console.error = (...messages: string[]) => {
  consoleError(...messages);
  throw new Error(messages[0]);
};

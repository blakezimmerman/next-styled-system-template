const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-actions/register"],
  presets: [{ name: "@storybook/addon-docs/preset" }],
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: { modules: [path.resolve(__dirname, "../src"), "node_modules"] },
    });

    return config;
  },
};

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });
  on('file:preprocessor', bundler);
};

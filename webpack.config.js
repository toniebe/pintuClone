const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {

  const config = await createExpoWebpackConfigAsync(env, argv);
  // Maybe you want to turn off compression in dev mode.
  config.optimization.emitOnErrors= true;
 
  return config;
};

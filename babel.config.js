module.exports = function (api) {
  const platform = api.caller((caller) => caller?.platform);
  const plugins =
    platform === "web"
      ? [require.resolve("expo-router/babel")]
      : ["transform-inline-environment-variables"];
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [require.resolve("expo-router/babel")],
  };
};

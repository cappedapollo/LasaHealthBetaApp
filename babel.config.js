module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

// module.exports = {presets: ['@babel/preset-env']}
// presets: ["babel-preset-expo", "@babel/preset-env"],
module.exports = {
  presets: ["@babel/preset-env", "@babel/react", "@babel/typescript"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      }
    ]
  ]
}
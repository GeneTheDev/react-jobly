module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/preset-react",
  ];

  const plugins = [
    [
      "transform-inline-environment-variables",
      {
        include: ["NODE_ENV"],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};

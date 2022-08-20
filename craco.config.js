const CracoLessPlugin = require("craco-less");
const AntDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = {
  webpack: {
    plugins: [new AntDayjsWebpackPlugin({ replaceMoment: true })],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

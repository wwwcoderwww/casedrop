const Config = require('webpack-chain');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        img: resolve('src/assets/img'),
        fonts: resolve('src/assets/fonts'),
        pages: resolve('src/components/pages'),
        layouts: resolve('src/components/layouts'),
        components: resolve('src/components/components')
      }
    }
  }
};

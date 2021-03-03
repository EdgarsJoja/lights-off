module.exports = {
  configureWebpack: {
    devtool: 'cheap-module-source-map'
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      args[0].push(
        {
          from: 'src/manifest.json',
          to: 'manifest.json'
        },
        {
          from: 'src/sw.js',
          to: 'sw.js'
        },
        {
          from: 'src/content.js',
          to: 'content.js'
        },
        {
          from: 'src/assets/styles/content.css',
          to: 'content.css'
        }
      );
      return args;
    });
  }
};

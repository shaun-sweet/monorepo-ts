const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = ({ config, mode }) => {
  const tsConfigFile = path.join(__dirname,'..', 'tsconfig.json');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = [new TsconfigPathsPlugin({ configFile: tsConfigFile })]
    
  
  return config;
};

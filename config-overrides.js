const { override } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

// module.exports = override(addReactRefresh());

module.exports = function (config, env) {
  console.log('Overide!');
  let loader = config.module.rules[1].oneOf;
  loader.splice(loader.length - 1, 0, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });
  
  override(addReactRefresh());
  return config;
};

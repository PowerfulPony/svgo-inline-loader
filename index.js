const { optimize } = require('svgo');

const defaultConfig = {
  plugins: [
    { name: 'preset-default' },
    'removeScriptElement'
  ]
};

module.exports = function loader(source) {
  this.cacheable(true);

  try {
    const result = optimize(source, { ...defaultConfig, ...this.query });

    return `module.exports = '${result.data}'`;
  } catch (error) {
    throw new Error(error);
  }
};
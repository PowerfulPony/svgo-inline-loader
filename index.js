const SVGO = require('svgo');

module.exports = function loader(source) {
  this.cacheable(true);
  const callback = this.async();

  const svgo = new SVGO(this.options);

  svgo.optimize(source)
    .then(result => result.data)
    .then((result) => {
      callback(null, `module.exports = '${result}'`);
    })
    .catch(error => callback(new Error(error)));
};
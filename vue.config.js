module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/habitantesdelrio/'
    : '/',
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }

};

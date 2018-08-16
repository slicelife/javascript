module.exports = {
  // Enable Jest environment for relevant files
  overrides: {
    files: [
      '*.test.js',
      '**/setupTets.js'
    ],
    env: {
      jest: true
    }
  }
};

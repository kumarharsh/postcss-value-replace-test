module.exports = {
  plugins: (webpack) => {
    console.log(webpack._compiler.inputFileSystem);
    return [
      require('postcss-modules-values-replace')({fs: webpack._compiler.inputFileSystem}),
      require('postcss-color-function'),
    ];
  },
};

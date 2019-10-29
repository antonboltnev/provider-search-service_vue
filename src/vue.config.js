module.exports = {
  runtimeCompiler: true,
  publicPath: "./",
  outputDir: 'target/classes/static',
  assetsDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/variables.scss";`
      }
    }
  }
}
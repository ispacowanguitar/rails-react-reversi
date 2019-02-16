const { environment } = require("@rails/webpacker");
module: {
  rules: [
    {
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { modules: false }]]
      }
    }
  ];
}
environment.loaders.get("sass").use.splice(-1, 0, {
  loader: "resolve-url-loader"
});
module.exports = environment;

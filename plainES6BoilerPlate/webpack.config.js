var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var miniCssExtractPlugin = new MiniCssExtractPlugin({filename: "index.css"});

module.exports = {
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    devtool: process.env.NODE_ENV === "development" ? "inline-source-map" : "source-map",
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public/assets",
        publicPath: "assets",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./public",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader"
            },
            {
                test: /\.(sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ] 
    },
    plugins: [miniCssExtractPlugin]
}

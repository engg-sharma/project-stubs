module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: ["babel-loader"],
                }
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "json-loader"
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: "style-loader!css-loader!autoprefixer-loader"
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
                }
            }
        ]
    }
}

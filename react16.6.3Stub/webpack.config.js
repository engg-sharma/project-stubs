module.exports = {
    mode: "development",
    entry: "./frontend/src/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    entry: {
        main: path.resolve(__dirname, "./src/test.ts")
    },
    module: {
        rules: [
            {
                test: /\.t|js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     // 将日志写入控制台
        //     verbose: true
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html")
        })
    ],
    resolve: {
        extensions: [ ".ts", ".js" ]
    }
}



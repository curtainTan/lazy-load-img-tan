const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

const config = {
    mode: "development",
    output: {
        path: path.resolve( __dirname, "../dist" ),
        filename: "[name].js"
    },
    devtool: "source-map"
}

module.exports = merge( common, config )

const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

const config = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js"
    }
}

module.exports = merge( common, config )

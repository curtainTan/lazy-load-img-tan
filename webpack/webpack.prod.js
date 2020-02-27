const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

const config = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].[hash].js"
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: (module, chunks, cacheGroupKey) => {
                const moduleFileName = module.identifier().split('/').reduceRight(item => item);
                // const allChunksNames = chunks.map((item) => item.name).join('~');
                return `${ cacheGroupKey }-${ moduleFileName }`;
              },
              chunks: 'all'
            },
          },
        },
    },
}

module.exports = merge( common, config )

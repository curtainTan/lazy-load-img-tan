# 测试文件


## 1. 使用 ts 测试：

修改` webpack.config.js `,设置入口为` ./src/test.ts`

```
module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    entry: {
        main: path.resolve(__dirname, "./src/test.ts")
    }
}
```

## 2. 使用 js 方式：

修改` webpack.config.js `,设置入口为` ./src/index.js`

```
module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    }
}
```

## 运行：

```
yarn build && npm run build
```


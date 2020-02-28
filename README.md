
# img lazyLoad

## 预览：

**地址：**[直达](https://curtaintan.github.io/lazyLoad/build/index.html)

![](view.gif)

图片来源于：[wclimb-lazyLoad](https://github.com/wclimb/lazyLoad)

## 说明：
1. 支持横向滚动懒加载

## 参数说明

MyLazyLoad.init( cls, src, initImg )

| cls(可选)   | src(可选)    |  initImg(可选)  |
| :----: | :----:   | :----: |
| .lazyLoad | data-src   | 占位图  |


## 使用说明：

html结构：
```html
<img class="lazyLoad" data-src="需要加载的图片" alt="">
```

```js
import MyLazyLoad from "MyLazyLoad"
var lazyload = new MyLazyLoad()

lazyload.init( 
    ".lazyLoad",
    "data-src",
    "http://www.wclimb.site/images/imgLoading.svg" 
    )
```

# 参考材料

[wclimb-lazyLoad](https://github.com/wclimb/lazyLoad)

感谢 [wclimb](http://www.wclimb.site)

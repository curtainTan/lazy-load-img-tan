
# img lazyLoad

## 预览：

**地址：**[点击预览](https://curtaintan.github.io/lazy-load-img-tan/test/index.html)

图片来源于：[wclimb-lazyLoad](https://github.com/wclimb/lazyLoad)

## 说明：
1. 支持横向滚动懒加载
2. 动态加载

## 安装
```
yarn add lazy-load-img-tan
```

## CDN
```
<script src="https://cdn.jsdelivr.net/npm/lazy-load-img-tan@0.0.13/lib/main.min.js"></script>
```

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

```html
<script src="https://cdn.jsdelivr.net/npm/lazy-load-img-tan@0.0.13/lib/main.min.js"></script>

<script>
   var test = new lazyLoadImgTan.default()
    test.init( ".lazyLoad", "data-src", "http://www.wclimb.site/images/imgLoading.svg" ) 
</script>
```

```js
import MyLazyLoad from "lazy-load-img-tan"
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

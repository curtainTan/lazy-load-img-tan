"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("./tools");
var LazyLoadImgTan = (function () {
    function LazyLoadImgTan() {
    }
    LazyLoadImgTan.prototype.init = function (cls, src, initImg) {
        if (cls === void 0) { cls = ".lazyLoad"; }
        if (src === void 0) { src = "data-src"; }
        if (initImg === void 0) { initImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"; }
        this.cls = cls;
        this.dataSrc = src;
        this.initImg = initImg;
        this.setView_HW();
        this.getAllElement();
        this.startListen();
        tools_1.createStyle();
    };
    LazyLoadImgTan.prototype.getAllElement = function () {
        var _this = this;
        var all = document.querySelectorAll("img" + this.cls);
        this.imgList = [];
        for (var i = 0; i < all.length; i++) {
            this.imgList.push(all[i]);
        }
        this.parentNodes = [];
        this.imgList.forEach(function (item) {
            _this.getAllParentElement(item);
        });
    };
    LazyLoadImgTan.prototype.getAllParentElement = function (ele) {
        var nowParent;
        if (ele.parentNode.nodeType === 1) {
            nowParent = ele.parentNode;
            if (nowParent.scrollWidth >= this.window_w && this.parentNodes.indexOf(nowParent) < 0) {
                this.parentNodes.push(nowParent);
                this.getAllParentElement(nowParent);
            }
            else {
                return;
            }
        }
    };
    LazyLoadImgTan.prototype.setView_HW = function () {
        this.window_h = document.documentElement.clientHeight;
        this.window_w = document.documentElement.clientWidth;
    };
    LazyLoadImgTan.prototype.startListen = function () {
        var _this = this;
        window.addEventListener('DOMContentLoaded', tools_1.debounce(this.loadImg.bind(this)));
        window.addEventListener("scroll", tools_1.debounce(this.loadImg.bind(this)));
        window.addEventListener("resize", tools_1.debounce(function () {
            _this.setView_HW();
            _this.getAllElement();
            _this.loadImg();
        }));
        this.parentNodes.forEach(function (item) {
            item.addEventListener("scroll", tools_1.debounce(_this.loadImg.bind(_this)));
        });
    };
    LazyLoadImgTan.prototype.loadImg = function () {
        var _this = this;
        var _loop_1 = function (i) {
            rect = this_1.imgList[i].getBoundingClientRect();
            if (this_1.imgList[i].src !== this_1.imgList[i].getAttribute(this_1.dataSrc)) {
                this_1.imgList[i].src = this_1.initImg;
            }
            else {
                return "continue";
            }
            if (rect.top <= this_1.window_h && rect.bottom >= 0 && rect.left <= this_1.window_w && rect.right >= 0) {
                imgLoad = new Image();
                imgLoad.src = this_1.imgList[i].getAttribute(this_1.dataSrc);
                imgLoad.onload = function () {
                    _this.imgList[i].src = _this.imgList[i].getAttribute(_this.dataSrc);
                    _this.imgList[i].style.animation = "lazyLoadShow 3s";
                };
            }
        };
        var this_1 = this, rect, imgLoad;
        for (var i = 0; i < this.imgList.length; i++) {
            _loop_1(i);
        }
    };
    return LazyLoadImgTan;
}());
exports.LazyLoadImgTan = LazyLoadImgTan;
//# sourceMappingURL=index.js.map
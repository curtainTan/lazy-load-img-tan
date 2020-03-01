"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myStyle = "\n@keyframes lazyLoadShow{\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n}\n";
function createStyle() {
    var styleEle = document.createElement("style");
    var myHeader = document.getElementsByTagName("head")[0];
    styleEle.type = "text/css";
    styleEle.appendChild(document.createTextNode(myStyle));
    myHeader.appendChild(styleEle);
}
exports.createStyle = createStyle;
function debounce(fn, time, immediate) {
    if (time === void 0) { time = 300; }
    if (immediate === void 0) { immediate = true; }
    var timer = null;
    return function () {
        var that = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate && !timer) {
            fn.apply(this, arguments);
        }
        timer = setTimeout(function () {
            fn.apply(that, arguments);
        }, time);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=tools.js.map
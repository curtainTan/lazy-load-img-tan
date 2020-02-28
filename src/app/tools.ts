
const myStyle = `
@keyframes lazyLoadShow{
    0% { opacity: 0; }
    100% { opacity: 1; }
}
`

// 添加样式---显示时动画
export function createStyle(){
    let styleEle: HTMLStyleElement = document.createElement("style")
    let myHeader: HTMLElement = document.getElementsByTagName("head")[0]
    
    styleEle.type = "text/css"
    styleEle.appendChild( document.createTextNode( myStyle ) )

    myHeader.appendChild( styleEle )
}

// 防抖函数
/**
 * 
 * @param fn 函数
 * @param time 延迟时间
 * @param immediate 是否立即执行
 */
export function debounce( fn: ( ...argument )=> any , time: number = 300, immediate: boolean = true ){
    let timer = null
    return function(){
        if( timer ){ clearTimeout( timer ) }
        if( immediate && !timer ) {
            fn( ...arguments )
        }
        timer = setTimeout(() => {
            fn( ...arguments )
        }, time )
    }
}

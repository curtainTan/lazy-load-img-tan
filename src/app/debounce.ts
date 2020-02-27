
// 防抖函数
export function debounce( fn: ( ...argument )=> any , time: number = 300, immediate: boolean = true ){
    let timer = null
    return function(){
        if( timer ){ clearTimeout( timer ) }
        if( immediate && !timer ) {
            fn( arguments )
        }
        timer = setTimeout(() => {
            fn( arguments )
        }, time )
    }
}

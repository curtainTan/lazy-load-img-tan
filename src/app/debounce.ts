
// 防抖函数
export function debounce( fn: ( ...argument )=> any , time: number = 300, immediate: boolean = true ){
    let timer = null
    return () => {
        if( timer ){ clearTimeout( timer ) }
        if( immediate && !timer ) {
            fn( arguments )
        }
        timer = setTimeout(() => {
            fn( arguments )
            timer = null
        }, time )
    }
}

import { debounce, createStyle } from './tools'


class MyLazyLoad {
    // 懒加载图片的类名
    cls: string
    // 图片地址挂载位置
    dataSrc: string
    // 加载时显示的图片地址
    initImg: string
    // 所有需要加载的图片
    imgList: Array<HTMLImageElement>
    // 可滑动的父节点
    parentNodes: Array<HTMLElement>

    // 视窗宽高
    window_w: number
    window_h: number

    init(
        cls: string = ".lazyLoad", 
        src: string = "data-src", 
        initImg: string ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" 
        ){
            this.cls = cls
            this.dataSrc = src
            this.initImg = initImg
            this.setView_HW()
            this.getAllElement()
            this.startListen()
            createStyle()
        }

    // 获取所有需要加载的元素
    getAllElement(){
        this.imgList = Array.from( document.querySelectorAll( "img" + this.cls ) )
        this.parentNodes = []
        let parentMap = new WeakMap()
        this.imgList.forEach( item => {
            this.getAllParentElement( item, parentMap )
        })
    }
    // 获取可滚动父节点
    getAllParentElement( ele: HTMLElement, parentMap ){
        let nowParent: HTMLElement
        if( ele.parentNode.nodeType == 1 ){
            nowParent = ele.parentNode as HTMLElement
            if( !parentMap.get( ele.parentNode ) && nowParent.scrollWidth > 0 ){
                this.parentNodes.push( nowParent )
                parentMap.set( ele.parentNode, "node-node"  )
                this.getAllParentElement( nowParent, parentMap )
            } else {
                return
            }
        }
    }
    // 获取视窗宽高
    setView_HW(){
        this.window_h = window.innerHeight || document.documentElement.clientHeight
        this.window_w = window.innerWidth || document.documentElement.clientWidth
    }
    // 滚动监听
    startListen(){
        window.addEventListener('DOMContentLoaded',debounce( this.loadImg.bind( this ) ));
        window.addEventListener( "scroll", debounce( this.loadImg.bind( this ) ))
        window.addEventListener( "resize", this.setView_HW )
        this.parentNodes.forEach( item => {
            item.addEventListener( "scroll", debounce( this.loadImg.bind( this ) ))
        })
    }
    // 加载图片
    loadImg(){
        for( let i = 0; i < this.imgList.length; i ++ ){
            var rect = this.imgList[i].getBoundingClientRect()
            if( this.imgList[i].src !== this.imgList[i].getAttribute( this.dataSrc ) ){
                this.imgList[i].src = this.initImg
            } else {
                continue
            }
            if( rect.top <= this.window_h && rect.bottom >= 0 && rect.left <= this.window_w && rect.right >= 0 ){
                var imgLoad = new Image()
                imgLoad.src = this.imgList[i].getAttribute( this.dataSrc )
                imgLoad.onload = () => {
                    this.imgList[i].src = this.imgList[i].getAttribute( this.dataSrc )
                    this.imgList[i].style.animation = "lazyLoadShow 3s"
                }
            }
        }
    }
}

export default MyLazyLoad


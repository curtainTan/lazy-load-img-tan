
const style = `
div{
    background-color: red;
}
`

export function createStyle(){
    let styleEle: HTMLStyleElement = document.createElement("style")
    let myHeader: HTMLElement = document.getElementsByTagName("header")[0]
    
    styleEle.innerHTML = style
    myHeader.appendChild( styleEle )
}



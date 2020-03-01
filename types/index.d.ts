declare class MyLazyLoad {
    private cls;
    private dataSrc;
    private initImg;
    private imgList;
    private parentNodes;
    private window_w;
    private window_h;
    init(cls?: string, src?: string, initImg?: string): void;
    private getAllElement;
    private getAllParentElement;
    private setView_HW;
    private startListen;
    private loadImg;
}
export default MyLazyLoad;

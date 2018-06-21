import TempHelper from "../../helper/temp-helper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShelfComponent extends cc.Component {

    @property(cc.Prefab)
    private bookPrefab: cc.Prefab = null;

    @property(cc.PageView)
    private pageView: cc.PageView = null;

    protected start(): void {
        this.schedule(this.onPageViewChange, 5);
    }

    protected onClickBookCell(event: cc.Event.EventTouch, customEventData: string): void {
        TempHelper.getInstance().setBookName(customEventData);
        let bookNode = cc.instantiate(this.bookPrefab);
        this.node.addChild(bookNode);
    }

    private onPageViewChange(): void {
        let nextPageIndex = this.pageView.getCurrentPageIndex() + 1;
        if (nextPageIndex >= this.pageView.getPages().length) {
            nextPageIndex = 0;
        }
        this.pageView.scrollToPage(nextPageIndex, 0.5);
    }
}

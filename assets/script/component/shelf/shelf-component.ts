const {ccclass, property} = cc._decorator;

@ccclass
export default class ShelfComponent extends cc.Component {

    @property(cc.Prefab)
    private bookPrefab: cc.Prefab = null;

    protected onClickBookCell(): void {
        let bookNode = cc.instantiate(this.bookPrefab);
        this.node.addChild(bookNode);
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class BookComponent extends cc.Component {

    protected onClickCoverBtn(): void {
        this.node.destroy();
    }
}

//
// 可嵌套的ScrollView。ccc1.9.1上可用, 若之后新版本不可用, 请在github上联系我。
// 开源地址：https://github.com/NRatel/CCC-NestableScrollView
// 挂在嵌套内层ScrollView上
//
cc.Class({
    extends: cc.PageView,

    properties: {
    },

     //#region 重写cc.PageView的方法
    _onTouchMoved: function (event, captureListeners) {
    }
    //#endregion
});

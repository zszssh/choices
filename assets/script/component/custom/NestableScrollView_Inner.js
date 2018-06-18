//
// 可嵌套的ScrollView。ccc1.9.1上可用, 若之后新版本不可用, 请在github上联系我。
// 开源地址：https://github.com/NRatel/CCC-NestableScrollView
// 挂在嵌套内层ScrollView上
//
cc.Class({
    extends: cc.ScrollView,

    properties: {
        m_OuterScrollView: {
            default: null,
            visible: false,
        }
    },

    setOuterScrollView(outer) {
        this.m_OuterScrollView = outer;
    },

     //#region 重写cc.ScrollView的方法
    _onTouchMoved: function (event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        var deltaMove = cc.pSub(touch.getLocation(), touch.getStartLocation());
        
        if (this.content) {
            if (!this.m_OuterScrollView.isDifferentBetweenSettingAndPlan(this)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        if (cc.pLength(deltaMove) > 7) {
            if (!this._touchMoved && event.target !== this.node) {
                var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
                cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                event.target.dispatchEvent(cancelEvent);
                this._touchMoved = true;
            }
        }
        this._stopPropagationIfTargetIsMe(event);
    }
    //#endregion
});

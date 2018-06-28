import TempHelper from "../../helper/temp-helper";

const {ccclass, property} = cc._decorator;

interface BookData {
    readonly page: number;
    readonly desc: string;
}

const books = {
    '夜美人': {page: 3, desc: '方框眼镜、T恤、断马尾、不超过200块的运动鞋，永远紧紧地抱着一个黑色的书包，永远坐在教室的最后一排，一个循规蹈矩毫不起眼的平凡姑娘。然而周围的人都不知道，每当夜幕降临之后，你却摇身一变……'},
    '湖中公子': {page: 2, desc: '你是一位刚从父亲手中接过了一座小岛管理权的白富美，准备好好打理一番将其开发成旅游景点。但一帆风顺的改造计划却遇到了意料之外的阻挠——岛上的工人们纷纷声称看到了诡异的景象而吓得逃离了小岛。你勇敢地深入工人们传说闹鬼的岛中探索，却意外地发现，这里似乎是一个被时光遗忘了的地方……'},
    '散落星河间': {page: 2, desc: '你有没有，比海更深地爱过一个人？当人生与曾经的理想背道而驰，要怎样笑对当下？人生不如意，十之八九，星河之间流传的，不只是一个虚构的故事，也是每个人五味杂陈的人生交响曲，你的，你的，也是你的。'},
    '我家的外星总裁': {page: 4, desc: '和大学同学恋爱之后，工作、买房、结婚、还贷、逢年过节回家看望父母。人生按部就班，生活朝九晚五。结果突然有一天，老公告诉我，他是个外星人！\n\n请问哪个医院的精神病科比较好？在线等，很急！'},
    '加拉泰亚': {page: 4, desc: '你睁开眼睛，眼前的一切似曾相识，又完全陌生。\n你是冠绝人间的完美女性，一切言辞在你面前都如苍白的碎片。即使是特洛伊的海伦、埃及的克里奥帕特洛、烽火台上的褒姒再世，也无法与你争艳。\n在你诞生之前，你就知道，你的缔造者是当世人工智能的权威北斗。他以自己亡妻的记忆重塑了你。\n是与你的造物主共享喜怒哀乐，在他人的记忆中融化自我，还是突破伦理和科技的枷锁，在逝者的往昔中浴火重生？'},
    '寻龙': {page: 1, desc: '一位失恋的白领女孩，一名走南闯北历经沧桑的记者，一对瞒着家里偷偷结伴出行的学生情侣，聚集在了云南松菇湖畔。当地一个不会说话的哑巴小姑娘成了联系他们的奇妙纽带。四个年轻人希望在宁静的湖畔洗刷现实中的烦恼困顿，却无意中发现了一个仅在传说中存在的生物——龙。然而，闻讯而来的并不只有他们……'},
    '深夜的美食街': {page: 3, desc: '大学应届毕业的小美，被分配到了中山路的街道管理委员会。这条被誉为“南岭第一美食街”的街道上，聚集着五湖四海而来，各自经历无数人生起伏的老江湖们。更有甚者，这条街道的管理员八爷，原是当地地头蛇，后被政府任命为中山路的街道管理，更不是一盏省油的灯。面对这条各地美食荟萃、聚集了人生炎凉、世间百态、恩怨情仇的纷繁之街，刚刚毕业的青涩小姑娘要如何打开局面呢？'},
    '下一秒恋人': {page: 3, desc: '暂时没有本书的简介'},
    '龙背上的女骑士': {page: 4, desc: '暂时没有本书的简介'},
    '龙与灰姑娘': {page: 4, desc: '暂时没有本书的简介'},
};

@ccclass
export default class BookComponent extends cc.Component {

    @property(cc.Node)
    private nodeList: cc.Node[] = [];

    @property(cc.Label)
    private nameLabel: cc.Label = null;

    @property(cc.Label)
    private descLabel: cc.Label = null;

    protected onLoad(): void {
        let pageNode: cc.Node;
        let bookName = TempHelper.getInstance().getBookName();
        this.nameLabel.string = bookName;
        let bookData: BookData = books[bookName];
        if (bookData) {
            pageNode = this.nodeList[bookData.page];
            pageNode.active = true;
            this.descLabel.string = bookData.desc;
        } else {
            pageNode = this.nodeList[0];
            pageNode.active = true;
            this.descLabel.string = '暂时没有本书的简介'
        }
    }

    protected onClickCoverBtn(): void {
        this.node.destroy();
    }
}

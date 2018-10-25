/**
 * Created by NameX on 2018/5/29.
 */
var cookie = {
    set: function (key, val, time) {
        var date = new Date();
        var expiresDays = time;
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
        document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
    },
    get: function (key) {

        var getCookie = document.cookie.replace(/[ ]/g, "");
        var arrCookie = getCookie.split(";");
        var tips;
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (key == arr[0]) {
                tips = arr[1];
                break;
            }
        }
        return tips;
    },
    delete: function (key) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = key + "=v; expires =" + date.toGMTString();
    }
};

var reader_bg = cookie.get("reader_bg");
var reader_font = cookie.get("reader_font");

if (!reader_bg) {
    cookie.set("reader_bg", 'skin-normal', 5);
    reader_bg = cookie.get("reader_bg");
}

if (!reader_font) {
    cookie.set("reader_font", '16px', 5);
    reader_font = cookie.get("reader_font");
}

if (reader_bg == 'skin-dark') {
    document.getElementById('J_Player').className = 'player-container ' + reader_bg + ' nightMode';
} else {
    document.getElementById('J_Player').className = 'player-container ' + reader_bg;
}

var J_Theme = document.getElementById('J_Theme');
var J_Font = document.getElementById('J_Font');
var fontBox = document.querySelector('.J_PortraitMoveBox');

function initSize(size) {
    fontBox.style.fontSize = size;
}

switch (reader_font) {
    case '16px':
        setFocus_A(1, J_Font);
        initSize(reader_font);
        break;
    case '18px':
        setFocus_A(2, J_Font);
        initSize(reader_font);
        break;
    case '22px':
        setFocus_A(3, J_Font);
        initSize(reader_font);
        break;
    default:
        setFocus_A(0, J_Font);
        initSize(reader_font);
        break;
}
switch (reader_bg) {
    case 'skin-dark':
        setFocus_A(1, J_Theme);
        break;
    case 'skin-normal':
        setFocus_A(2, J_Theme);
        break;
    case 'skin-green':
        setFocus_A(3, J_Theme);
        break;
    case 'skin-pink':
        setFocus_A(4, J_Theme);
        break;
    default:
        setFocus_A(0, J_Theme);
        break;
}

//书签
function setBookmark(node,event) {
    var is_open = node.className == 'bookmark-trigger';
    var J_BookMark = document.getElementById('J_BookMark');
    var J_Close = J_BookMark.querySelector('.J_Close');
    var J_Add = J_BookMark.querySelector('.J_Add');
    var delList = J_BookMark.querySelectorAll('.delete');
    var J_BookmarkList = J_BookMark.querySelector('.J_BookmarkList');
    var J_BookmarkListLi = J_BookmarkList.querySelectorAll('li');
    var i = 0;


    node.className = is_open ? 'bookmark-trigger on' : 'bookmark-trigger';
    J_BookMark.className = is_open ? 'bookmark r-hide r-show' : 'bookmark r-hide';


    //删除书签
    function onDel() {
        for (var i = 0; i < delList.length; i++) {
            delList[i].onclick = onClickDel;
            delList[i].idx = i;
        }
    }onDel();
    function onClickDel(event) {
        J_BookmarkList.removeChild(J_BookmarkListLi[this.idx]);
        event.stopPropagation();
    }
    //加入书签
    J_Add.onclick = function () {
        i++;

        var node = document.createElement('li');
        node.innerHTML =
        '<div class="tit"><h4>第一章 暗杀'+ i +'</h4><span>0.1%&nbsp;&nbsp;&nbsp;&nbsp;2018-6-6</span></div>'+
        '<div class="desc"></div>'+
        '<i class="flag"></i>'+
        '<a class="delete">删除</a>';

        $(".J_BookmarkList").prepend(node);

        delList = J_BookMark.querySelectorAll('.delete');
        J_BookmarkListLi = J_BookmarkList.querySelectorAll('li');
        onDel();

        event.stopPropagation();
    };
    //关闭
    J_Close.onclick = function () {
        J_BookMark.className = 'bookmark r-hide';
        node.className = 'bookmark-trigger';
    };

    event.stopPropagation();

    $('body').click(function () {
        if (node.className == 'bookmark-trigger on') {
            node.className = 'bookmark-trigger';
            J_BookMark.className = 'bookmark r-hide'
        }
    });

}
//设置字体大小
function setFont(node,event) {
    var is_open = node.className == 'font-trigger';
    var J_Font_A = J_Font.querySelectorAll('a');


    node.className = is_open ? 'font-trigger on' : 'font-trigger';
    J_Font.className = is_open ? 'font r-hide r-show' : 'font r-hide';

//    设置字体大小
    function setClick() {
        for (var i = 0; i < J_Font_A.length; i++) {
            J_Font_A[i].onclick = setFont_A;
        }
    }

    setClick();

    function setFont_A(event) {
        var font_size = $(this).data('id');

        for (var i = 0; i < J_Font_A.length; i++) {
            J_Font_A[i].className = '';
        }
        this.className = 'on';

        fontBox.style.fontSize = font_size;

        cookie.set("reader_font", font_size, 5);
        reader_font = cookie.get("reader_font");

        event.stopPropagation();
    }

    event.stopPropagation();

    $('body').click(function () {
        if (node.className == 'font-trigger on') {
            node.className = 'font-trigger';
            J_Font.className = 'font r-hide'
        }
    });
}
//翻页跳转章节
function skipChapter(node) {
    var top_down = $(node).data('id');

    if (top_down == 1) {
        //    上一章
        showStatus('已经是最后一章啦!')
    } else {
        //    下一章
    }
    console.log(top_down)
}
//提示弹框
function showStatus(title) {
    var J_FIXED = document.getElementById('J_FIXED');
    var J_TIPS = document.getElementById('J_TIPS');

    J_FIXED.style.display = 'block';
    J_TIPS.innerText = title;

    setTimeout(function () {
        J_FIXED.style.display = 'none';
    }, 2000);

}
//打开目录
function showCatalogue() {
    var J_Catalogue = document.getElementById('J_Catalogue');
    var J_Close = J_Catalogue.querySelector('.J_Close');
    var open = J_Catalogue.className == 'catalogue r-hide';

    J_Catalogue.className = open ? 'catalogue r-hide r-show' : 'catalogue r-hide';

    J_Close.onclick = function () {
        J_Catalogue.className = 'catalogue r-hide';
    }
}
//侧边栏显示隐藏
function setSidebar(node) {
    var is_node = node.id;
    var wrpa, open;

    open = node.className == 'open';

    if (is_node == 'J_AsideTrigger') {
        wrpa = document.getElementById('J_Aside');
        wrpa.style.left = open ? '-140px' : '0px';
    } else {
        wrpa = document.getElementById('J_BookRecommand');
        wrpa.style.right = open ? '-132px' : '0px';
        node.style.backgroundPosition = open ? '-48px 0' : '-48px -60px';
    }

    node.className = open ? '' : 'open';
}

//初始化设置 焦点 选中
function setFocus_A(idx, node) {
    var J_Theme_A = node.querySelectorAll('a');
    J_Theme_A[idx].className = 'on';
}
//主题模式
function setBGColor(event) {
    var J_Theme = document.getElementById('J_Theme');
    var J_Theme_A = J_Theme.querySelectorAll('a');
    setShowStatus(J_Theme, 'block');


    //设置cookie 及 使用 颜色
    function setC_C(str) {

        cookie.set("reader_bg", str, 5);
        reader_bg = cookie.get("reader_bg");

        if (reader_bg == 'skin-dark') {
            document.getElementById('J_Player').className = 'player-container ' + reader_bg + ' nightMode';
        } else {
            document.getElementById('J_Player').className = 'player-container ' + str;
        }
    }

    //设置背景颜色
    function setClick() {
        for (var i = 0; i < J_Theme_A.length; i++) {
            J_Theme_A[i].onclick = setColor;
            J_Theme_A[i].idx = i;
        }
    }

    setClick();

    function setColor() {

        for (var i = 0; i < J_Theme_A.length; i++) {
            J_Theme_A[i].className = '';
        }
        this.className = 'on';


        switch (this.idx) {
            case 1:
                setC_C('skin-dark');
                break;
            case 2:
                setC_C('skin-normal');
                break;
            case 3:
                setC_C('skin-green');
                break;
            case 4:
                setC_C('skin-pink');
                break;
            default:
                setC_C('skin-light');
                break;
        }
    }

    event.stopPropagation();
    bodyClick(J_Theme);

}
function bodyClick(node) {

    $('body').click(function () {
        if (node.style.display == 'block') {
            setShowStatus(node, 'none');
        }
    });
}
//分享框
function share(event) {
    var sns_droplist = document.querySelector('.sns-droplist');

    sns_droplist.style.display = 'block';
    sns_droplist.style.top = (event.clientY + 20) + 'px';
    sns_droplist.style.left = (event.clientX - 10) + 'px';
    sns_droplist.style.position = 'absolute';
    sns_droplist.style.width = '80px';
    event.stopPropagation();
//    -------------------------------------------------------
    var sns_li = sns_droplist.querySelectorAll('li');
    var sns_overlay0 = document.querySelector('#sns-overlay0');
    var J_Closesns0 = sns_overlay0.querySelector('.J_Close');
    var sns_overlay = document.querySelector('#sns-overlay1');

    var J_Close0 = sns_overlay.getElementsByClassName('J_Close')[0];
    var J_Close1 = sns_overlay.getElementsByClassName('J_Close')[1];
    var J_GoAuth = sns_overlay.querySelector('.J_GoAuth');
    var J_XLFX = document.getElementById('J_XLFX');
    var J_Close = J_XLFX.querySelector('.J_Close');
    var J_Send = J_XLFX.querySelector('.J_Send');

    var num, title, sns_overlay_i, sns_overlay_h4;

    function setSns() {
        for (var i = 0; i < sns_li.length; i++) {
            sns_li[i].onclick = snsClick;
            sns_li[i].idx = i;
        }
    }

    setSns();

    function snsClick() {
        var is_i = 0;//  0 没有绑定  1绑定后

        setShowStatus(sns_droplist, 'none');

        if (this.idx == 0) {
            setShowStatus(sns_overlay0, 'block');
        } else {

            switch (this.idx) {
                case 1:
                    num = '0 -120px';
                    title = '新浪微博分享';
                    break;
                case 2:
                    num = '0 -96px';
                    title = '腾讯微博分享';
                    break;
                case 3:
                    num = '0 -48px';
                    title = '网易微博分享';
                    break;
                case 4:
                    num = '0 -24px';
                    title = '搜狐微博分享';
                    break;
                case 5:
                    num = '0 -72px';
                    title = '人人网分享';
                    break;
            }

            if (is_i) {
                setShowStatus(sns_overlay, 'block');

                isTitle(sns_overlay);
            } else {
                setShowStatus(J_XLFX, 'block');

                isTitle(J_XLFX);
            }
        }
    }

    //改变 分享框 logo 和 标题
    function isTitle(node) {
        sns_overlay_i = node.querySelector('i');
        sns_overlay_h4 = node.querySelector('h4');

        sns_overlay_h4.innerHTML = '<i></i>' + title;
        sns_overlay_i = node.querySelector('i');
        sns_overlay_i.style.backgroundPosition = num;
        sns_overlay_i.style.height = '24px';
    }

    bodyClick(sns_droplist);

    J_Closesns0.onclick = function () {
        setShowStatus(sns_overlay0, 'none');
    };
    J_Close0.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    J_Close1.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    J_GoAuth.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    J_Close.onclick = function () {
        setShowStatus(J_XLFX, 'none')
    };
    J_Send.onclick = function () {
        setShowStatus(J_XLFX, 'none')
    };
}
function setShowStatus(node, status) {
    node.style.display = status;
}
//左边栏加入书架
function addBookrack(node) {

    if (node.innerText == '放入书架') {
        node.innerText = '已放入书架';
    }
}
!function () {
//    账号不足
    var J_ZHBZ = document.getElementById('J_ZHBZ');
    var zJ_Cancel0 = J_ZHBZ.getElementsByClassName('J_Cancel')[0];
    var zJ_Cancel1 = J_ZHBZ.getElementsByClassName('J_Cancel')[1];
    var J_ToRecharge = J_ZHBZ.querySelector('.J_ToRecharge');
//    正在购买
    var J_ZZGM = document.getElementById('J_ZZGM');
    var J_Done = J_ZZGM.querySelector('.J_Done');
    var J_Cancel = J_ZZGM.querySelector('.J_Cancel');
//    遮罩层
    var entire_buy_mask = document.querySelector('.entire-buy-mask');
    var J_MultiBuy = document.querySelector('.J_MultiBuy');
    //自动订阅
    var J_ZZDY = document.getElementById('J_ZZDY');
    var J_ZDDY0 = J_ZZDY.getElementsByClassName('J_Cancel')[0];
    var J_ZDDY1 = J_ZZDY.getElementsByClassName('J_Cancel')[1];
    var J_DoneZD = J_ZZDY.querySelector('.J_Done');

    //余额不足看书状态
    var J_NEContent1 = document.getElementsByClassName('J_NEContent')[1];
    var btn_red = J_NEContent1.querySelector('.btn-red');
    var J_OpenAutoSub = document.querySelector('.J_OpenAutoSub');
    var J_OpenAutoSubId = document.getElementById('J_OpenAutoSub');

    function getNode(XZNode, GMNode, status1, status2) {
        XZNode.style.display = status1;
        GMNode.style.display = status2;
    }

    J_MultiBuy.onclick = function () {
        getNode(J_ZZGM, entire_buy_mask, 'block', 'block')
    };

    J_Done.onclick = function () {
        getNode(J_ZZGM, entire_buy_mask, 'none', 'none')
    };
    J_Cancel.onclick = function () {
        getNode(J_ZZGM, entire_buy_mask, 'none', 'none')
    };
    btn_red.onclick = function () {
        getNode(J_ZHBZ, entire_buy_mask, 'block', 'block')
    };
    zJ_Cancel0.onclick = function () {
        getNode(J_ZHBZ, entire_buy_mask, 'none', 'none')
    };
    zJ_Cancel1.onclick = function () {
        getNode(J_ZHBZ, entire_buy_mask, 'none', 'none')
    };
    J_ToRecharge.onclick = function () {
        getNode(J_ZHBZ, J_ZZGM, 'none', 'block')
    };
    J_ZDDY0.onclick = function () {
        getNode(J_ZZDY, entire_buy_mask, 'none', 'none')
    };
    J_ZDDY1.onclick = function () {
        getNode(J_ZZDY, entire_buy_mask, 'none', 'none')
    };
    J_OpenAutoSub.onclick = function () {
        getNode(J_ZZDY, entire_buy_mask, 'block', 'block')
    };
    J_DoneZD.onclick = function () {
        getNode(J_ZZDY, entire_buy_mask, 'none', 'none')
        J_OpenAutoSubId.innerHTML = '<span style="color:#999">自动订阅已开启</span>';
    };
}();
/**
 * Created by NameX on 2018/5/22.
 */

var maxstrlen = 500;
var len, myLen, checkWordsIdx;

function Q(s) {
    return document.getElementById(s);
}

function checkWords() {

    var idx = checkWordsIdx;

    var c = document.getElementById('content' + idx);

    len = maxstrlen;
    var str = c.value;
    myLen = getStrleng(str);
    var wck = Q("wordCheck" + idx);
    if (myLen > len * 2) {
        c.value = str.substring(0, i + 1);
    } else {
        wck.innerHTML = Math.floor((len * 2 - myLen) / 2);
    }

}

function checkWordss() {
    var c = document.getElementById('content');

    len = maxstrlen;
    var str = c.value;
    myLen = getStrleng(str);
    var wck = Q("wordCheck");
    if (myLen > len * 2) {
        c.value = str.substring(0, i + 1);
    } else {
        wck.innerHTML = Math.floor((len * 2 - myLen) / 2);
    }

}

function getStrleng(str) {
    myLen = 0;
    i = 0;
    for (; (i < str.length) && (myLen <= maxstrlen * 2); i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128)
            myLen++;
        else
            myLen += 2;
    }
    return myLen;
}
//加入书架
function addBookrack() {
    var J_addSubNo = document.getElementById('J_addSubNo');
    var J_addSubOk = document.getElementById('J_addSubOk');

    J_addSubNo.style.display = 'none';
    J_addSubOk.style.display = 'block';

}
//弹框
function showStatus(title) {
    var J_FIXED = document.getElementById('J_FIXED');
    var J_TIPS = document.getElementById('J_TIPS');

    J_FIXED.style.display = 'block';
    J_TIPS.innerText = title;

    setTimeout(function () {
        J_FIXED.style.display = 'none';
    }, 2000);

}
function scrollPic() {
    var pic = document.getElementById('pic');
    var picLi = pic.querySelectorAll('li');
    var num = 204 * picLi.length;

    pic.style.width = num + 'px';

    var scrollPic = new ScrollPic();
    scrollPic.scrollContId = "pic";
    scrollPic.arrLeftId = "left";
    scrollPic.arrRightId = "right";
    scrollPic.frameWidth = 204;
    scrollPic.pageWidth = 204;
    scrollPic.speed = 30;
    scrollPic.space = 20;
    scrollPic.autoPlay = true;
    scrollPic.autoPlayTime = 4;
    scrollPic.initialize();


    var btnList = pic.querySelectorAll('.btn');

    for (var i = 0; i < btnList.length; i++) {
        btnList[i].onclick = addClick;
        btnList[i].idx = i;
    }
    function addClick() {
        alert('下标：'+ this.idx);
        showStatus('加入书架成功！');
    }
}
scrollPic();

!function () {
//    章节赠送
    var J_ZJZS = document.getElementById('J_ZJZS');
    var ah_zippyList = J_ZJZS.querySelectorAll('.ah-zippy');
    var ah_zippy_toggle = J_ZJZS.querySelectorAll('.ah-zippy-toggle');
    var close_btn = J_ZJZS.querySelector('.close-btn');

    var J_tab3Y = document.getElementById('J_tab3Y');
    var btn = J_tab3Y.querySelector('.btn');
    var m_mask = document.querySelector('.m-mask');

    for (var i = 0; i < ah_zippy_toggle.length; i++) {
        ah_zippy_toggle[i].onclick = switchShow;
        ah_zippy_toggle[i].idx = i;
    }

    btn.onclick = function () {
        J_ZJZS.style.display = 'block';
        m_mask.style.display = 'block';
    };

    close_btn.onclick = function () {
        J_ZJZS.style.display = 'none';
        m_mask.style.display = 'none';
    };

    function switchShow() {
        var open = ah_zippyList[this.idx].className == 'ah-zippy';
        ah_zippyList[this.idx].className = open ? 'ah-zippy ah-zippy-collapsed' : 'ah-zippy';


        var name = $('.ah-zippy').eq(this.idx).attr('ah-zippy');

        var list = J_ZJZS.querySelectorAll(name);

        for (var i = 0; i < list.length; i++) {
            list[i].style.display = open ? "none" : "table-row";
        }
    }


}();


!function () {
//    投月票

    var T_month = document.querySelector('.T_month');
    // 遮罩层
    var m_mask = document.querySelector('.m-mask');
    //月票框
    var J_LayerYP = document.getElementById('J_LayerYP');

    var J_YPGo = document.getElementById('J_YPGo');
    var J_YPNo = document.getElementById('J_YPNo');
    //li 的 外层DIV
    var J_ssec_YP = document.getElementById('J_ssec_YP');
    var J_li = J_ssec_YP.querySelectorAll('li');
    var J_em = J_ssec_YP.querySelectorAll('em');
    var close_btn = document.querySelector('.close-btn');
    var numIdx;

    T_month.onclick = function () {
        showBox();
    };

    //确认投月票
    J_YPGo.onclick = function () {
        //焦点的下标
        if (!numIdx) {
            numIdx = 0;
        }

        showStatus('投票成功！');
        createNode('孙悟空', numIdx, '1月8日 08:34');
        hideBox();
    };
    //取消投月票
    J_YPNo.onclick = function () {
        hideBox();
    };
    //弹框关闭按钮
    close_btn.onclick = function () {
        hideBox();
    };

    function createNode(name, num, time) {
        var node = document.createElement('li');
        node.innerHTML =
            '<span>' + name + '</span><span>投了<em>' + num + '</em>条</span><span class="time">' + time + '</span>';

        $("#J_month_wrap").prepend(node);
    }

    function setClickList() {

        for (var i = 0; i < J_li.length; i++) {
            J_li[i].onclick = setClickLists;
        }
    }

    setClickList();
    function setClickLists() {
        for (var i = 0; i < J_li.length; i++) {
            J_li[i].className = '';
            J_em[i].style.display = 'none';

            if (J_li[i] == this) {

                if (i == 5) {
                    this.className = 'other J_other selected';
                    this.innerHTML = '<input id="J_ipt" type="text" placeholder="1" name="otheramount" autofocus="autofocus"><em style="display: block;"></em>';
                    document.getElementById('J_ipt').focus();

                } else {
                    this.className = 'selected';
                    J_li[5].innerHTML = '<span>其它数量</span><em style="display: none;"></em>';
                }
                J_em[i].style.display = 'block';
                numIdx = i;
            }
        }
    }

    function showBox() {
        var status = 'block';
        m_mask.style.display = status;
        J_LayerYP.style.display = status;
    }

    function hideBox() {
        var status = 'none';
        m_mask.style.display = status;
        J_LayerYP.style.display = status;
    }
}();

!function () {
//    回复
    var J_CommentList = document.querySelector('.J_CommentList');
    var J_Like = J_CommentList.querySelectorAll('.J_Like');
    var J_Reply = J_CommentList.querySelectorAll('.J_Reply');
    var reply_box_wrap = J_CommentList.querySelectorAll('.reply-box-wrap');
    var replaybtn = document.querySelector('.replaybtn');
    var contentBtn = document.getElementById('content');

    function resetStatus() {
        J_Reply = J_CommentList.querySelectorAll('.J_Reply');
        reply_box_wrap = J_CommentList.querySelectorAll('.reply-box-wrap');
        J_Like = J_CommentList.querySelectorAll('.J_Like');

        for (var i = 0; i < J_Reply.length; i++) {
            J_Reply[i].onclick = reply;
        }

        for (var n = 0; n < J_Like.length; n++) {

            J_Like[n].onclick = like;
        }
    }

    function isNull(str) {
        if (str == "") return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }

    replaybtn.onclick = function () {

        if ((!contentBtn.value) || (contentBtn.value == ' ' || (isNull(contentBtn.value)))) {
            showStatus('内容不能为空哦！');
            contentBtn.value = '';
            document.getElementById('wordCheck').innerHTML = '500';
        } else {
            showStatus('发表成功!');
            createDescribeNode(contentBtn.value);
            contentBtn.value = '';
            document.getElementById('wordCheck').innerHTML = '500';

            resetStatus();

        }
    };

    //评论生成的Node
    function createDescribeNode(con) {
        var node = document.createElement('li');

        node.className = 'J_ItemLi';
        node.innerHTML =
            '<div class="head-pic">' +
            '<b><img src="https://easyread.nosdn.127.net/web/trunk/1492150697494/txdefault.png"></b>' +
            '</div>' +
            '<div class="info">' +
            '<cite><b>longly2018</b></cite>' +
            '<p class="w-star w-star1">' +
            '<span>&nbsp;</span>' +
            '<span>&nbsp;</span>' +
            '<span>&nbsp;</span>' +
            '<span>&nbsp;</span>' +
            '<span>&nbsp;</span>' +
            '</p>' +
            '</div>' +
            '<blockquote>' + con + '</blockquote>' +
            '<div class="opt">' +
            '<input type="hidden" name="cid" value="5261716020830322531">' +
            '<input type="hidden" name="tipstr" value="longly2018">' +
            '<span class="time">5月13日  11:12 发表</span>' +
            '<a href="javascript:void(0);" class="like J_Like" data-num="0"><i></i>点赞</a>' +
            '<span class="sep">|</span>' +
            '<a href="javascript:void(0);" class="reply J_Reply"><i></i>回复</a>' +
            '</div>' +
            '<div class="reply-box-wrap"></div>';
        $(".J_CommentList").prepend(node);
    }

    for (var i = 0; i < J_Reply.length; i++) {
        J_Reply[i].onclick = reply;
    }

    function reply() {

        for (var i = 0; i < J_Reply.length; i++) {
            J_Reply[i].idx = i;

            if (J_Reply[i] == this) {

                if (!reply_box_wrap[this.idx].innerHTML) {

                    reply_box_wrap[this.idx].innerHTML =
                        '<div class="reply-box">' +
                        '<i class="angle-t"></i>' +
                        '<form>' +
                        '<input type="hidden" name="id" value="e62fc591f6a24146893420ebf2b247f1_4">' +
                        '<input type="hidden" name="type" value="2">' +
                        '<input type="hidden" name="cid" value="5255582457040014205">' +
                        '<div class="contentwrap">' +
                        '<textarea name="content" id="content' + this.idx + '" placeholder="回复：春蓝" onkeyup="checkWords()"></textarea>' +
                        '</div>' +
                        '<div class="bottombar">' +
                        '<p class="btn">' +
                        '<a class="J_Back cancelbtn cancelbtn' + this.idx + '">取消</a>' +
                        '<a class="J_Send replaybtn replaybtn' + this.idx + '">回 复</a>' +
                        '</p>' +
                        '<p class="size-leave J_SizeLeave" style="color: rgb(102, 102, 102);">还能输入<span id="wordCheck' + this.idx + '">500</span>字</p>' +
                        '</div>' +
                        '</form>' +
                        '</div>';
                } else {
                    reply_box_wrap[this.idx].style.display = 'block';
                }
                noBtn(this.idx);
                okBtn(this.idx);

                function numIdx(idx) {
                    return idx;
                }

                checkWordsIdx = numIdx(this.idx);
            }
        }

        //回复用户生成Node
        function createUserNode(con) {
            var node = document.createElement('li');

            node.className = 'J_ItemLi';
            node.innerHTML =
                '<div class="head-pic">' +
                '<b><img src="https://easyreadfs.nosdn.127.net/cba5a3caeb6840e1acfbaff45516b635.png?imageView&amp;crop=37_0_506_506"></b>' +
                '</div>' +
                '<div class="info">' +
                '<cite><b>蓝沫</b></cite>' +
                '回复 <b>qinbrother163</b>：' +
                '</div>' +
                '<blockquote>' + con + ' </blockquote>' +
                '<div class="opt">' +
                '<input type="hidden" name="cid" value="5270598524810003828">' +
                '<input type="hidden" name="tipstr" value="蓝沫">' +
                '<span class="time">46 秒前 发表</span>' +
                '<a href="javascript:void(0);" class="like J_Like" data-num="0"><i></i>点赞</a>' +
                '<span class="sep">|</span>' +
                '<a href="javascript:void(0);" class="reply J_Reply"><i></i>回复</a>' +
                '</div>' +
                '<div class="reply-box-wrap"></div>';
            $(".J_CommentList").prepend(node);
        }

        //回复取消按钮
        function noBtn(idx) {
            var cancelbtn = J_CommentList.querySelector('.cancelbtn' + idx);
            var c = document.getElementById('content' + idx);
            var word = document.getElementById('wordCheck' + idx);

            cancelbtn.onclick = function () {
                reply_box_wrap[idx].style.display = 'none';
                c.value = '';
                word.innerHTML = 500;
            }
        }

        //回复回复按钮
        function okBtn(idx) {

            var replaybtn = J_CommentList.querySelector('.replaybtn' + idx);
            var c = document.getElementById('content' + idx);
            var word = document.getElementById('wordCheck' + idx);

            replaybtn.onclick = function () {


                if ((!c.value) || (c.value == ' ' || (isNull(c.value)))) {
                    showStatus('内容不能为空哦！');
                    contentBtn.value = '';
                    document.getElementById('wordCheck').innerHTML = '500';

                } else {
                    showStatus('回复成功!');
                    createUserNode(c.value);

                    reply_box_wrap[idx].style.display = 'none';
                    c.value = '';
                    word.innerHTML = 500;

                    resetStatus();
                }
            }
        }
    }

    //    点赞

    var idx;
    for (var n = 0; n < J_Like.length; n++) {

        J_Like[n].onclick = like;
    }
    function like() {
        for (var i = 0; i < J_Like.length; i++) {
            if (J_Like[i] == this) {
                idx = i;
                var val = this.innerText;

                if (val == '点赞') {
                    this.innerHTML = '<i></i>' + '(1)';
                    this.className = 'like J_Like liked';
                } else {
                    var num = val.replace(/[^0-9]/ig, "");
                    num++;
                    this.innerHTML = '<i></i>' + '(' + num + ')';
                    this.className = 'like J_Like liked';
                }
            }
        }
    }

}();


!function () {
//    打分
    var J_UserStar = document.getElementById('J_UserStar');
    var menuSpan = J_UserStar.querySelectorAll('span');
    var idx;

    for (var i = 0; i < menuSpan.length; i++) {
        menuSpan[i].onmouseover = mark;
        menuSpan[i].onclick = clickMark;

    }

    function mark() {
        for (var i = 0; i < menuSpan.length; i++) {
            if (menuSpan[i] == this) {
                idx = i;
            }
        }
        for (var i = 0; i <= idx; i++) {
            menuSpan[i].className = '';
        }
        for (var i = idx + 1; i < menuSpan.length; i++) {
            menuSpan[i].className = 'no';
        }
    }

    function clickMark() {
        if (!idx) {
            idx = 0;
        }
        alert("评分：" + (idx + 1) + "分");
    }


}();
!function () {
    //登录弹框模块切换--->>>
    var sj = document.querySelector('.sj');
    var wy = document.querySelector('.wy');
    var lyclose = document.querySelector('.lyclose');
    var login = document.querySelector('.login');
    var login_layer = document.getElementById('login-layer');
    var lytt_h1 = document.querySelector('.lytt-h1');

    sj.onclick = function () {
        var i = sj.style.display == 'block';

        sj.style.display = i ? 'none' : 'block';
        wy.style.display = i ? 'block' : 'none';
        lytt_h1.style.backgroundPosition = i ? '-271px -136px' : '-273px 11px';
        lytt_h1.innerText = '手机号登录';
    };
    wy.onclick = function () {
        var i = wy.style.display == 'block';

        wy.style.display = i ? 'none' : 'block';
        sj.style.display = i ? 'block' : 'none';
        lytt_h1.style.backgroundPosition = i ? '-273px 11px' : '-271px -136px';
        lytt_h1.innerText = '网易邮箱登录';
    };
    //登录弹框模块切换---<<<<

    //登录弹框关闭按钮
    lyclose.onclick = function () {
        login_layer.style.display = 'none';
    };
    login.onclick = function () {
        login_layer.style.display = 'block';
    };

}();
!function () {
    //选择 金额
    var focusUl = document.getElementById('focusUl');
    var J_tabs = document.getElementById('J_tabs');
    var tabMenu = J_tabs.querySelectorAll('li');
    var tabSpan = J_tabs.querySelectorAll('.crt-line');
    var tabMenuLi = document.getElementsByClassName('tabMenuLi');
    var focusLI = focusUl.querySelectorAll('li');
    var btn_red_fill = document.querySelector('.btn-red-fill');


    for (var o = 0; o < tabMenu.length; o++) {

        tabMenu[o].index = o;
        tabMenu[o].onmouseover = function () {

            for (var q = 0; q < tabMenuLi.length; q++) {
                tabMenuLi[q].style.display = 'none';
                tabMenu[q].className = '';
                tabSpan[q].style.display = 'none';

            }
            tabMenuLi[this.index].style.display = 'block';
            tabSpan[this.index].style.display = 'block';
            tabMenu[this.index].className = 'first';
        }
    }


    for (var i = 0; i < focusLI.length; i++) {
        focusLI[i].index = i;
        focusLI[i].onclick = function () {

            for (var z = 0; z < focusLI.length; z++) {
                focusLI[z].className = '';
            }
            this.className = 'selected';
            rewardBtn(this.index);
        }
    }
    function rewardBtn(idx) {
        btn_red_fill.onclick = function () {
            alert(idx);
            showStatus('打赏成功！');
        };
    }

    rewardBtn(1);

}();

$(window).resize(function () {
    var Width = $(window).width();
    var m_qr = document.querySelector('.m-qr');
    var m_qr_icon = document.querySelector('.m-qr-icon');

    if (Width > 1470) {
        m_qr.style.display = 'block';
        m_qr_icon.style.display = 'none';

    } else {
        m_qr.style.display = 'none';
        m_qr_icon.style.display = 'block';
    }
});
$(document).ready(function () {
    var timer = null;
    var returnHead = document.getElementById('returnHead');

    window.onscroll = function () {
        var topScroll = document.documentElement.scrollTop;
        if (topScroll > 200) {
            returnHead.style.display = 'block';
        } else {
            returnHead.style.display = 'none';
        }
    };

    returnHead.onclick = function () {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    }
});
(function ($) {
    $.fn.extend({
        Scroll: function (opt, callback) {

            if (!opt) var opt = {};
            var _this = this.eq(0).find("ul:first");
            var lineH = _this.find("li:first").height(),
                line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10),
                speed = opt.speed ? parseInt(opt.speed, 10) : 500,
                timer = opt.timer ? parseInt(opt.timer, 10) : 3000;
            if (line == 0) line = 1;
            var upHeight = 0 - line * lineH;

            scrollUp = function () {
                _this.animate({
                    marginTop: upHeight
                }, speed, function () {
                    for (i = 1; i <= line; i++) {
                        _this.find("li:first").appendTo(_this);
                    }
                    _this.css({marginTop: 0});
                });
            }

            _this.hover(function () {
                clearInterval(timerID);
            }, function () {
                timerID = setInterval("scrollUp()", timer);
            }).mouseout();
        }
    })
})(jQuery);
$(document).ready(function () {
    $("#scrollDiv").Scroll({line: 1, speed: 800, timer: 1000});
});
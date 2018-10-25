/**
 * Created by QinBrother on 2018/5/21.
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

//登录/退出
// window.onload = function () {
//
//
// }


// $(window).resize(function () {
//     var Width = $(window).width();
//     var m_qr = document.querySelector('.m-qr');
//     var m_qr_icon = document.querySelector('.m-qr-icon');
//
//     if (Width > 1470) {
//         m_qr.style.display = 'block';
//         m_qr_icon.style.display = 'none';
//
//     } else {
//         m_qr.style.display = 'none';
//         m_qr_icon.style.display = 'block';
//     }
// });

!function () {
    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    }

    window.onload = function () {
        var index = 0;
        var timer = null;
        var pic = $("pic").getElementsByTagName("li");
        var num = $("num").getElementsByTagName("li");
        var flash = $("flash");
        var left = $("left");
        var right = $("right");
        //单击左箭头
        left.onclick = function () {
            index--;
            if (index < 0) {
                index = num.length - 1
            }

            changeOption(index);
        };

        right.onclick = function () {
            index++;
            if (index >= num.length) {
                index = 0
            }

            changeOption(index);
        };

        flash.onmouseover = function () {
            clearInterval(timer);
        };

        flash.onmouseout = function () {
            timer = setInterval(run, 2000)
        };

        for (var i = 0; i < num.length; i++) {
            num[i].id = i;
            num[i].onmouseover = function () {
                clearInterval(timer);
                changeOption(this.id);
            }
        }

        timer = setInterval(run, 3000);

        function run() {
            index++;
            if (index >= num.length) {
                index = 0
            }
            changeOption(index);
        }

        function changeOption(curindex) {

            for (var j = 0; j < num.length; j++) {
                pic[j].style.display = "none";
                num[j].className = "";
            }
            pic[curindex].style.display = "block";
            num[curindex].className = "active";
            index = curindex;
        }
    }
}();

!function () {
    var J_MM = document.getElementById('J_MM');
    var subList = J_MM.getElementsByClassName('sub');
    var more_m_list = document.getElementsByClassName('more-m-list');
    //国风
    var node_GF_p = document.getElementsByClassName('node-GF-p');
    var node_GF = document.getElementsByClassName('node-GF');
    var node_GF_li = document.getElementsByClassName('node-GF-li');
    //采薇
    var node_cw_p = document.getElementsByClassName('node-cw-p');
    var node_cw_div = document.getElementsByClassName('node-cw-div');
    var node_cw_li = document.getElementsByClassName('node-cw-li');
    //图书
    var nono_ts_p = document.getElementsByClassName('none-ts-p');
    var none_ts_div = document.getElementsByClassName('none-ts-div');
    var none_ts_li = document.getElementsByClassName('none-ts-li');
    //漫画
    var node_mh_p = document.getElementsByClassName('node_mh_p');
    var node_mh_div = document.getElementsByClassName('node_mh_div');
    var node_mh_li = document.getElementsByClassName('node_mh_li');
    //菜单移入模块--->>>

    let GF_index = cookie.get("GF_index");
    let CW_index = cookie.get("CW_index");
    let TS_index = cookie.get("TS_index");
    let MH_index = cookie.get("MH_index");

    if (!GF_index) {
        window.GF_index = 0;
        cookie.set("GF_index", window.GF_index, 1);
        GF_index = cookie.get("GF_index");
    }
    if (!CW_index) {
        window.CW_index = 0;
        cookie.set("CW_index", window.CW_index, 1);
        CW_index = cookie.get("CW_index");
    }
    if (!TS_index) {
        window.TS_index = 0;
        cookie.set("TS_index", window.TS_index, 1);
        TS_index = cookie.get("TS_index");
    }
    if (!MH_index) {
        window.MH_index = 0;
        cookie.set("MH_index", window.MH_index, 1);
        MH_index = cookie.get("MH_index");
    }

    node_GF[GF_index].style.display = 'block';
    node_GF_p[GF_index].style.display = 'none';

    node_cw_div[CW_index].style.display = 'block';
    node_cw_p[CW_index].style.display = 'none';

    none_ts_div[TS_index].style.display = 'block';
    nono_ts_p[TS_index].style.display = 'none';

    node_mh_div[MH_index].style.display = 'block';
    node_mh_p[MH_index].style.display = 'none';

    function gfMenuGF(nodeP, nodeDiv, cookieName, nodeLi) {

        for (var i = 0; i < nodeLi.length; i++) {
            nodeLi[i].index = i;


            nodeLi[i].onmouseover = function () {

                for (var z = 0; z < nodeDiv.length; z++) {
                    nodeDiv[z].style.display = 'none';
                    nodeP[z].style.display = 'block';
                }
                nodeDiv[this.index].style.display = 'block';
                nodeP[this.index].style.display = 'none';

            };
            nodeLi[i].onmouseout = function () {
                nodeDiv[this.index].style.display = 'none';
                nodeP[this.index].style.display = 'block';
                cookie.set(cookieName, this.index, 1);

                GF_index = cookie.get(cookieName);

            };
        }
    }

    function gfMenuCW(nodeP, nodeDiv, cookieName, nodeLi) {

        for (var i = 0; i < nodeLi.length; i++) {
            nodeLi[i].index = i;


            nodeLi[i].onmouseover = function () {

                for (var z = 0; z < nodeDiv.length; z++) {
                    nodeDiv[z].style.display = 'none';
                    nodeP[z].style.display = 'block';
                }
                nodeDiv[this.index].style.display = 'block';
                nodeP[this.index].style.display = 'none';

            };
            nodeLi[i].onmouseout = function () {
                nodeDiv[this.index].style.display = 'none';
                nodeP[this.index].style.display = 'block';
                cookie.set(cookieName, this.index, 1);

                CW_index = cookie.get(cookieName);

            };
        }
    }

    function gfMenuTS(nodeP, nodeDiv, cookieName, nodeLi) {

        for (var i = 0; i < nodeLi.length; i++) {
            nodeLi[i].index = i;


            nodeLi[i].onmouseover = function () {

                for (var z = 0; z < nodeDiv.length; z++) {
                    nodeDiv[z].style.display = 'none';
                    nodeP[z].style.display = 'block';
                }
                nodeDiv[this.index].style.display = 'block';
                nodeP[this.index].style.display = 'none';

            };
            nodeLi[i].onmouseout = function () {
                nodeDiv[this.index].style.display = 'none';
                nodeP[this.index].style.display = 'block';
                cookie.set(cookieName, this.index, 1);

                TS_index = cookie.get(cookieName);

            };
        }
    }

    function gfMenuMH(nodeP, nodeDiv, cookieName, nodeLi) {

        for (var i = 0; i < nodeLi.length; i++) {
            nodeLi[i].index = i;


            nodeLi[i].onmouseover = function () {

                for (var z = 0; z < nodeDiv.length; z++) {
                    nodeDiv[z].style.display = 'none';
                    nodeP[z].style.display = 'block';
                }
                nodeDiv[this.index].style.display = 'block';
                nodeP[this.index].style.display = 'none';

            };
            nodeLi[i].onmouseout = function () {
                nodeDiv[this.index].style.display = 'none';
                nodeP[this.index].style.display = 'block';
                cookie.set(cookieName, this.index, 1);

                MH_index = cookie.get(cookieName);

            };
        }
    }

    gfMenuGF(node_GF_p, node_GF, "GF_index", node_GF_li);
    gfMenuCW(node_cw_p, node_cw_div, "CW_index", node_cw_li);
    gfMenuTS(nono_ts_p, none_ts_div, "TS_index", none_ts_li);
    gfMenuMH(node_mh_p, node_mh_div, "MH_index", node_mh_li);

    $(document).mousemove(function (e) {
        var x, y, div, y1, y2, x1, x2;
        x = e.pageX;
        y = e.pageY;

        function mouseStatusGF(nodeBox, nodeP, nodeDiv, cookieIdx) {
            div = $('#' + nodeBox + '');
            y1 = div.offset().top;
            y2 = y1 + div.height();
            x1 = div.offset().left;
            x2 = x1 + div.width();

            if (x < x1 || x > x2 || y < y1 || y > y2) {

                nodeDiv[cookieIdx].style.display = 'block';
                nodeP[cookieIdx].style.display = 'none';
            }
        }

        function mouseStatusCW(nodeBox, nodeP, nodeDiv, cookieIdx) {
            div = $('#' + nodeBox + '');
            y1 = div.offset().top;
            y2 = y1 + div.height();
            x1 = div.offset().left;
            x2 = x1 + div.width();

            if (x < x1 || x > x2 || y < y1 || y > y2) {

                nodeDiv[cookieIdx].style.display = 'block';
                nodeP[cookieIdx].style.display = 'none';
            }
        }

        function mouseStatusTS(nodeBox, nodeP, nodeDiv, cookieIdx) {
            div = $('#' + nodeBox + '');
            y1 = div.offset().top;
            y2 = y1 + div.height();
            x1 = div.offset().left;
            x2 = x1 + div.width();

            if (x < x1 || x > x2 || y < y1 || y > y2) {

                nodeDiv[cookieIdx].style.display = 'block';
                nodeP[cookieIdx].style.display = 'none';
            }
        }

        function mouseStatusMH(nodeBox, nodeP, nodeDiv, cookieIdx) {
            div = $('#' + nodeBox + '');
            y1 = div.offset().top;
            y2 = y1 + div.height();
            x1 = div.offset().left;
            x2 = x1 + div.width();

            if (x < x1 || x > x2 || y < y1 || y > y2) {

                nodeDiv[cookieIdx].style.display = 'block';
                nodeP[cookieIdx].style.display = 'none';
            }
        }

        mouseStatusGF('right-GF-wrap', node_GF_p, node_GF, GF_index);
        mouseStatusCW('right-CW-wrap', node_cw_p, node_cw_div, CW_index);
        mouseStatusTS('right-TS-wrap', nono_ts_p, none_ts_div, TS_index);
        mouseStatusMH('right-MH-wrap', node_mh_p, node_mh_div, MH_index);
    });


    //菜单移入模块---<<<
    //菜单移入模块--->>>
    (function () {
        for (var i = 0; i < subList.length; i++) {
            subList[i].index = i;

            subList[i].onmouseover = function () {
                for (var z = 0; z < more_m_list.length; z++) {
                    more_m_list[z].style.display = 'none';
                }
                more_m_list[this.index].style.display = 'block';
            };

        }
        for (var j = 0; j < more_m_list.length; j++) {
            more_m_list[j].index = j;
            more_m_list[j].onmouseover = function () {
                more_m_list[this.index].style.display = 'block';
            };
            more_m_list[j].onmouseout = function () {
                more_m_list[this.index].style.display = 'none';
            }
        }
        J_MM.onmouseout = function () {
            for (var j = 0; j < more_m_list.length; j++) {
                more_m_list[j].style.display = 'none';
            }
        };

    })();
    //菜单移入模块---<<<

    // //登录弹框模块切换--->>>
    // var login_layer = document.getElementById('login-layer');
    // var sj = login_layer.querySelector('.sj');
    // var wy = login_layer.querySelector('.wy');
    // var lyclose = login_layer.querySelector('.lyclose');
    // var login = document.querySelector('.login');
    // var lytt_h1 = login_layer.querySelector('.lytt-h1');
    //
    // sj.onclick = function () {
    //     var i = sj.style.display == 'block';
    //
    //     sj.style.display = i ? 'none' : 'block';
    //     wy.style.display = i ? 'block' : 'none';
    //     lytt_h1.style.backgroundPosition = i ? '-271px -136px' : '-273px 11px';
    //     lytt_h1.innerText = '手机号登录';
    // };
    // wy.onclick = function () {
    //     var i = wy.style.display == 'block';
    //
    //     wy.style.display = i ? 'none' : 'block';
    //     sj.style.display = i ? 'block' : 'none';
    //     lytt_h1.style.backgroundPosition = i ? '-273px 11px' : '-271px -136px';
    //     lytt_h1.innerText = '网易邮箱登录';
    // };
    // //登录弹框模块切换---<<<<
    //
    // //登录弹框关闭按钮
    // lyclose.onclick = function () {
    //     login_layer.style.display = 'none';
    // };
    // login.onclick = function () {
    //     login_layer.style.display = 'block';
    // };


}();

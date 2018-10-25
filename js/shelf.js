/**
 * Created by NameX on 2018/5/30.
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
!function () {
    var J_DT = document.getElementById('J_DT');
    var m_booklist_1 = J_DT.querySelector('.m-booklist-1');
    var J_DT_list = J_DT.querySelectorAll('.J_DT_list');


    var J_YueduSNS = J_DT.getElementsByClassName('J_YueduSNS');
    var sns_droplist = document.querySelector('.sns-droplist');
    var sns_li = sns_droplist.querySelectorAll('li');
    var sns_overlay = document.querySelector('#sns-overlay1');
    var sns_overlay0 = document.querySelector('#sns-overlay0');
    var J_Closesns0 = sns_overlay0.querySelector('.J_Close');
    var J_Close0 = sns_overlay.getElementsByClassName('J_Close')[0];
    var J_Close1 = sns_overlay.getElementsByClassName('J_Close')[1];
    var J_GoAuth = sns_overlay.querySelector('.J_GoAuth');
    var sns_overlay_i = sns_overlay.querySelector('i');
    var sns_overlay_h4 = sns_overlay.querySelector('h4');
    var num, title, index = 0, stusDT, stusLB, open1, open2;

    var J_CBinner_1 = document.getElementById('J_CBinner-1');
    var J_fr = J_CBinner_1.querySelector('.fr');
    var J_btn4 = J_CBinner_1.querySelector('.btn-4');

    var J_btn = J_CBinner_1.querySelectorAll('.btn');
    var linkA = J_CBinner_1.querySelectorAll('.link');
    var J_box = document.querySelectorAll('.J_box');

    var J_ControlBar = document.getElementById('J_ControlBar');

    var J_SJ_DT = document.getElementById('J_SJ_DT');
    var SJ_DT_m_infos = J_SJ_DT.querySelectorAll('.m-infos');
    var SJ_DT_f_db2 = J_SJ_DT.querySelectorAll('.f-db2');

    var SJ_DT_m_bookshow = J_SJ_DT.querySelectorAll('.m-bookshow');
    var J_SJ_control = J_SJ_DT.querySelectorAll('.control');


    var bookrackListStatus = cookie.get("bookrackListStatus");
    var listAStatus = cookie.get("listAStatus");

    //删除
    var J_Settings = document.getElementById('J_Settings');
    var J_CBinner2 = document.getElementById('J_CBinner-2');


    var btn_finish = J_CBinner2.querySelector('.btn-finish');
    var controlList0 = J_SJ_DT.querySelectorAll('.control');
    var J_CBinner2Link = J_CBinner2.querySelectorAll('.link');
    var J_SelectAll = J_CBinner2.querySelector('#J_SelectAll');
    var J2btn_del = J_CBinner2.querySelector('.btn-del');


    var J_SJ_tick = J_SJ_DT.querySelectorAll('.tick');//111111111111


    var boole_num = false;
    var strName = '';
    // linkA[0].innerText = '我的书架(' + controlList0.length + ')';
    // linkA[1].innerText = '已删书籍(' + controlList1.length + ')';


    //列表删除操作书架
    var SJ_selectall = J_DT.querySelectorAll('.selectall');
    var SJ_ipt = J_DT.querySelectorAll('.SJ_ipt');
    var SJ_Jtoolbar1 = J_DT.querySelector('.J-toolbar-1');
    var SJ_Jtoolbar2 = J_DT.querySelector('.J-toolbar-2');
    var SJ_body = J_DT.querySelector('#SJ_body');


    function setLBDel(nodeAll, nodeList, J1, J2, body, nodeWrap) {

        var num_i = 0;

        nodeAll[0].onclick = function () {
            if (nodeAll[0].checked) {
                J1.style.display = 'none';
                J2.style.display = 'table-row';
                J2.querySelector('.selectall').checked = true;
                J2.querySelector('.f-fcr-2').innerText = nodeList.length;
                num_i = nodeList.length;
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].checked = true;
                }
            } else {
                J1.style.display = 'table-row';
                J2.style.display = 'none';
                num_i = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].checked = false;
                }
            }
        };
        J2.querySelector('.selectall').onclick = function () {
            if (this.checked) {
                J1.style.display = 'none';
                J2.style.display = 'table-row';
                num_i = nodeList.length;
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].checked = true;
                }
            } else {
                J1.style.display = 'table-row';
                J2.style.display = 'none';
                J1.querySelector('.selectall').checked = false;
                J2.querySelector('.f-fcr-2').innerText = '0';
                num_i = 0;
                for (var i = 0; i < nodeList.length; i++) {
                    nodeList[i].checked = false;
                }
            }
        };

        var noBook = nodeWrap.querySelector('.m-shelfempty');
        var listBook = nodeWrap.querySelector('.m-booklist-1');


        J2.querySelector('#J_DelSelectDT').onclick = function () {

            var iptList = body.querySelectorAll('input');
            var j_vip = body.querySelectorAll('.j-vip');


            if (iptList.length == num_i) {
                //    没有书籍状态
                setShowStatus(listBook, 'none');
                setShowStatus(noBook, 'block');

                if (nodeWrap.id == 'J_DT') {
                    stusDT = true;
                }
                if (nodeWrap.id == 'J_LB') {
                    stusLB = true;
                }


            }

            for (var i = 0; i < iptList.length; i++) {
                if (iptList[i].checked == true) {
                    body.removeChild(j_vip[i]);
                    num_i = 0;
                    J2.querySelector('.f-fcr-2').innerText = '0';
                }
            }

            var liLen = body.querySelectorAll('.j-vip');


            // if (index == 0) {
            //     J_CBinner2Link[0].innerText = '我的书架(' + liLen.length + ')';
            //     linkA[0].innerText = '我的书架(' + liLen.length + ')';
            // } else {
            //     J_CBinner2Link[1].innerText = '阅读历史(' + liLen.length + ')';
            //     linkA[1].innerText = '阅读历史(' + liLen.length + ')';
            // }


        };


        for (var o = 0; o < nodeList.length; o++) {

            nodeList[o].onclick = function () {

                if (this.checked) {
                    this.checked = true;
                    num_i++;
                } else {
                    this.checked = false;
                    num_i--;
                }

                J2.querySelector('.f-fcr-2').innerText = num_i;

                if (num_i > 0) {
                    J1.style.display = 'none';
                    J2.style.display = 'table-row';
                } else {
                    J1.style.display = 'table-row';
                    J2.style.display = 'none';
                }
            };
        }
    }

    function initList() {

        setLBDel(SJ_selectall, SJ_ipt, SJ_Jtoolbar1, SJ_Jtoolbar2, SJ_body, J_DT);
    }

    initList();


    function setAllBoole(none, str) {
        for (var i = 0; i < none.length; i++) {
            none[i].className = str;
        }
    }

    var idx_num = 0;

    function setControl(node) {
        for (var i = 0; i < node.length; i++) {
            node[i].idx = i;
            node[i].onclick = setClickControl;
        }
    }

    function setClickControl() {

        open1 = J_SJ_tick[this.idx].className == 'tick j-mask tick-x';

        J_SJ_tick[this.idx].className = open1 ? 'tick j-mask tick-o' : 'tick j-mask tick-x';

        if (open1) {
            idx_num++;
        } else {
            idx_num--;
        }

    }

    //删除
    J2btn_del.onclick = function () {

        var delNode = $(".tick-o").parent().parent().parent();
        J_CBinner2Link[index].className = 'link ';

        if (delNode.length == 0) {
            showStatus('请选择要删除的书籍!')
        } else {
            var nodWrap = $(".tick-o").parent().parent().parent().parent();
            var nodeBox = document.getElementById(nodWrap[0].id);


            for (var i = 0; i < delNode.length; i++) {
                nodeBox.removeChild(delNode[i]);
            }

            // var liLen = nodeBox.querySelectorAll('li');


            // if (index == 0) {
            //     J_CBinner2Link[0].innerText = '我的书架(' + liLen.length + ')';
            //     linkA[0].innerText = '我的书架(' + liLen.length + ')';
            // } else {
            //     J_CBinner2Link[1].innerText = '阅读历史(' + liLen.length + ')';
            //     linkA[1].innerText = '阅读历史(' + liLen.length + ')';
            // }


            var nodeLi = nodeBox.querySelectorAll('li');
            //删除所有书籍
            if (nodeLi.length == 0) {
                var wrapBox = $("#" + nodWrap[0].id).parent().parent().parent().parent();
                var wrap_w = document.getElementById(wrapBox[0].id);

                var wrap_w_m = wrap_w.querySelector('.m-shelfempty');
                setShowStatus(wrap_w_m, 'block');
                setShowStatus(J_CBinner2, 'none');
                setShowStatus(J_CBinner_1, 'block');

                controlList0 = J_SJ_DT.querySelectorAll('.control');


                // linkA[0].innerText = '我的书架(' + controlList0.length + ')';


                // J_CBinner2Link[0].innerText = '我的书架(' + controlList0.length + ')';


                if (wrapBox[0].id == 'J_DT') {
                    stusDT = true;
                }


            }
            idx_num = 0;
        }
    };

    //全选/全不选
    J_SelectAll.onclick = function () {
        boole_num = !boole_num;

        if (boole_num) {
            strName = 'tick j-mask tick-o'
        } else {
            strName = 'tick j-mask tick-x'
        }


        setAllBoole(J_SJ_tick, strName);


    };
    //完成
    btn_finish.onclick = function () {
        setShowStatus(J_CBinner2, 'none');
        setShowStatus(J_CBinner_1, 'block');
        boole_num = false;
        J_CBinner2Link[index].className = 'link ';


        showControlList(controlList0, 'none');
        setAllBoole(J_SJ_tick, 'tick j-mask tick-x');

    };

    //书架管理
    J_Settings.onclick = function () {

        setShowStatus(J_CBinner2, 'block');
        setShowStatus(J_CBinner_1, 'none');
        // J_CBinner2Link[0].innerText = '我的书架(' + controlList0.length + ')';
        // J_CBinner2Link[1].innerText = '阅读历史(0)';
        J_CBinner2Link[index].className = 'link crt';

        if (index == 0) {
            //单选
            setControl(J_SJ_control);

            showControlList(controlList0, 'block');

        }
    };

    function showControlList(none, status) {
        for (var i = 0; i < none.length; i++) {
            none[i].style.display = status;
        }
    }

    function K(idx) {
        cookie.set("listAStatus", idx, 1);
        listAStatus = cookie.get("listAStatus");
    }

    function setShowList(idx) {
        //没有书籍的node
        var m_shelfempty = document.querySelector('.m-shelfempty');

        if (m_shelfempty.style.display != 'block'){
            for (var i = 0; i < J_DT_list.length; i++) {
                J_DT_list[i].style.display = 'none';

            }
            J_DT_list[idx].style.display = 'block';
        }
    }

    function setListStatus() {

        function J(idx) {
            cookie.set("bookrackListStatus", idx, 1);
            bookrackListStatus = cookie.get("bookrackListStatus");
        }

        function Q(idx) {

            if (idx == 0) {
                m_booklist_1.style.display = 'block';

            } else {
                J_SJ_DT.style.display = 'block';

            }
        }

        if (!listAStatus) {
            K(0);
        }

        if (!bookrackListStatus) {
            J(1);
        }

        Q(bookrackListStatus);

        if (bookrackListStatus == 0) {
            J_btn[bookrackListStatus].className = 'btn btn-2-crt png last';
            setShowGL('none');
        } else {
            J_btn[bookrackListStatus].className = 'btn btn-1-crt png';
            setShowGL('block');
        }


        function setShowGL(status) {
            J_fr.style.display = status;
            J_btn4.style.display = status;
        }

        //列表
        J_btn[0].onclick = function () {


            J(0);
            J_btn[1].className = 'btn btn-1 png';
            J_btn[0].className = 'btn btn-2-crt png last';
            setShowGL('none');
            setShowList(0);
            initList();

        };
        //大图
        J_btn[1].onclick = function () {

            J(1);
            J_btn[1].className = 'btn btn-1-crt png';
            J_btn[0].className = 'btn btn-2 png last';
            setShowGL('block');
            setShowList(1);
            initList();
        };
    }


    setListStatus();

    function setDBMouseover() {
        for (var i = 0; i < SJ_DT_f_db2.length; i++) {
            SJ_DT_f_db2[i].onmouseover = DBMouseover;
            SJ_DT_f_db2[i].onmouseout = DBMouseout;
            SJ_DT_f_db2[i].idx = i;
        }
    }

    setDBMouseover();

    function DBMouseover() {
        for (var i = 0; i < SJ_DT_f_db2.length; i++) {
            SJ_DT_m_infos[i].style.display = 'none';
            SJ_DT_m_bookshow[i].style.zIndex = '0';
        }
        if (SJ_DT_f_db2[this.idx] == this) {
            SJ_DT_m_infos[this.idx].style.display = 'block';
            SJ_DT_m_bookshow[this.idx].style.zIndex = '1000';
        }
    }

    function DBMouseout() {
        for (var i = 0; i < SJ_DT_f_db2.length; i++) {
            SJ_DT_m_infos[i].style.display = 'none';
            SJ_DT_m_bookshow[i].style.zIndex = '0';
        }
    }


    // function setLink() {
    //     for (var i = 0; i < linkA.length; i++) {
    //         linkA[i].onclick = setAClick;
    //         linkA[i].idx = i;
    //     }
    // }
    //
    // setLink();
    //
    // function setAClick() {
    //     for (var i = 0; i < linkA.length; i++) {
    //         linkA[i].className = 'link';
    //         J_box[i].style.display = 'none';
    //     }
    //     if (linkA[this.idx] == this) {
    //         linkA[this.idx].className = 'link crt';
    //
    //         J_box[this.idx].style.display = 'block';
    //
    //         K(this.idx);
    //         index = this.idx;
    //     }
    //     if (this.idx == 1) J_ControlBar.style.backgroundPosition = '0 -90px';
    //     else J_ControlBar.style.backgroundPosition = '0 0';
    //
    //
    //     initList();
    //
    // }

    function setNode() {
        for (var i = 0; i < J_YueduSNS.length; i++) {
            J_YueduSNS[i].onclick = setClick;
        }
    }

    setNode();

    function setClick(event) {

        event = event || window.event;

        sns_droplist.style.display = 'block';
        sns_droplist.style.top = (event.pageY + 20) + 'px';
        sns_droplist.style.left = (event.pageX - 10) + 'px';
        sns_droplist.style.position = 'absolute';
        sns_droplist.style.width = '80px';
        event.stopPropagation();
    }


    function setSns() {
        for (var i = 0; i < sns_li.length; i++) {
            sns_li[i].onclick = snsClick;
            sns_li[i].idx = i;
        }
    }

    setSns();

    function snsClick() {
        // alert(this.idx)
        if (this.idx == 0) {
            setShowStatus(sns_overlay0, 'block');
        } else {
            setShowStatus(sns_overlay, 'block');

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
            sns_overlay_h4.innerHTML = '<i></i>' + title;
            sns_overlay_i = sns_overlay.querySelector('i');
            sns_overlay_i.style.backgroundPosition = num;
            sns_overlay_i.style.height = '24px';

        }


    }


    $('body').click(function () {
        if (sns_droplist.style.display == 'block') {
            setShowStatus(sns_droplist, 'none')
        }
    });
    J_Close0.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    J_Close1.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    J_GoAuth.onclick = function () {
        setShowStatus(sns_overlay, 'none')
    };
    function setShowStatus(node, status) {
        node.style.display = status;
    }

    J_Closesns0.onclick = function () {
        setShowStatus(sns_overlay0, 'none');
    };
}();

/**
 * Created by NameX on 2018/5/29.
 */
function getNode(XZNode, GMNode, status1, status2) {
    XZNode.style.display = status1;
    GMNode.style.display = status2;
}



!function () {
    var J_ChapSelect = document.getElementById('J_ChapSelect');
    var J_Recharge = document.getElementById('J_Recharge');
    var J_After = document.getElementById('J_After');

    var ok = J_Recharge.querySelector('.ok');
    var j_closeX = J_Recharge.getElementsByClassName('j-close')[0];
    var j_closeQX = J_Recharge.getElementsByClassName('j-close')[1];
    var j_close = J_After.querySelector('.j-close');

    var m_mask = document.querySelector('.m-mask');


    //章节------------------------>>>>
    var g_bdcXZ = document.getElementsByClassName('g-bdc')[0];

    //收起
    var j_switch = g_bdcXZ.querySelector('.j-switch');
    var J_ChapTable = document.getElementById('J_ChapTable');
    var listTR = J_ChapTable.querySelectorAll('.group0');
    var listIpt = J_ChapTable.querySelectorAll('input');
    var J_Volumn0 = document.getElementById('J_Volumn0');
    var J_SelectAllChap = g_bdcXZ.querySelector('#J_SelectAllChap');


    var j_level2 = J_ChapTable.querySelectorAll('.j-level2');
    //判断是否全部选中的条件
    console.log(j_level2.length);

    //章节------------------------<<<<<<<<<<<<<

    //购买------------------------>>>>
    var g_bdcGM = document.getElementsByClassName('g-bdc')[1];


    // var tocart = g_bdcGM.querySelector('.tocart');

    //购买------------------------<<<<<

    var J_Buy = document.getElementById('J_Buy');

    var record_list = $("tr[name=record]");  // 所有记录元素
    var frame_list = $("input[name=record_frame]");  // 所有选框元素

    record_list.click(function() {
        var index = $(this).index();   // 当前记录下标
        var status = !frame_list.eq(index).is(":checked");  // 选中后的状态

        frame_list.eq(index).prop("checked", status);   // 更改当前记录选中状态

        if (status) {   // 选中=》所有子选框是否都选中(勾选全选)
            var select = true;
            frame_list.each(function(index, node) {
                if ($(this).is(":checked") == false) { select = false; return; }
            });
            $("#J_SelectAllChap").prop("checked", select);  // 更改全选框选中状态

        } else {    // 取消=》全选状态置为空
            $("#J_SelectAllChap").prop("checked", false);  // 更改全选框选中状态
        }

        var id_list = select_id_list();
        var count = id_list.length;
        // $('#J_ChapterTotal').html(count);    // 章节数
        // $('#j-chaptatol').html(count*{$datas.score} + '阅点');    // 总书币
        // $('#j-rmb').html(count*{$datas.score}/100);    // 金额
    });


    //全选 ----------- 不选
    J_SelectAllChap.onclick = function () {

        var open = J_SelectAllChap.checked;

        for (var i = 0; i < listIpt.length; i++) {
            listIpt[i].checked = open;
        }

    };



//成功----失败  弹框
    var J_PayBack = document.getElementById('J_PayBack');
    var a_list = J_PayBack.querySelectorAll('a');

    //关闭
    a_list[0].onclick = function () {
        getNode(J_PayBack, m_mask, 'none', 'none');
    };
    //完成
    a_list[1].onclick = function () {
        getNode(J_PayBack, m_mask, 'none', 'none');
    };
    //关闭
    a_list[2].onclick = function () {
        getNode(J_PayBack, m_mask, 'none', 'none');
    };



    // tocart.onclick = function () {
    //     getNode(g_bdcXZ, g_bdcGM, 'block', 'none');
    // };

    J_Buy.onclick = function () {
        //余额不足
        getNode(J_Recharge, m_mask, 'block', 'block');
    //    有钱任性 ------- 成功弹框
    //     getNode(J_PayBack, m_mask, 'block', 'block');
    };

    ok.onclick = function () {
        getNode(J_Recharge, J_After, 'none', 'block');
    };

    j_closeX.onclick = function () {
        getNode(J_Recharge, m_mask, 'none', 'none');
    };

    j_closeQX.onclick = function () {
        getNode(J_Recharge, m_mask, 'none', 'none');
    };

    j_close.onclick = function () {
        getNode(J_After, m_mask, 'none', 'none');
    };
}();

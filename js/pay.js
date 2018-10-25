/**
 * Created by NameX on 2018/6/4.
 */

!function () {
    var J_Form1 = document.getElementById('J_Form1');
    var listLi = J_Form1.querySelectorAll('li');

    var iptList = document.querySelector('.m-banks').querySelectorAll('input');
    var J_RehargeBox = document.getElementById('J_RehargeBox');
    var setClick = J_RehargeBox.querySelectorAll('.setClick');
    var J_Constant = document.getElementById('J_Constant');
    var iptSel = J_Constant.querySelectorAll('input');
    var J_DSB = document.getElementById('J_DSB');
    var J_RMB = document.getElementById('J_RMB');
    var J_Amount = document.getElementById('J_Amount');
    var J2_PayBack = document.getElementById('J2_PayBack');
    var jcloseList = J2_PayBack.querySelectorAll('.j-close');
    //遮罩层
    var m_mask = document.querySelector('.m-mask');

//    第三方支付选中
    function setListLI() {
        for (var i = 0; i < listLi.length; i++) {
            listLi[i].idx = i;
            listLi[i].onclick = clickListLI;
        }
    }
    function clickListLI() {
        for (var i = 0; i < listLi.length; i++) {
            listLi[i].className = '';
            iptList[i].checked = false;
        }
        console.log('第三方下标 : ' + this.idx)
        this.className = 'active';
        iptList[this.idx].checked = true;
    }

    //选择充值金额
    function selPayList() {
        for (var i = 0; i < setClick.length; i++) {
            setClick[i].idx = i;
            setClick[i].onclick = selClick;
        }
    }
    function selClick() {
        if (this.idx < 5){
            var score = $(iptSel[this.idx]).data('score');
            var money = $(iptSel[this.idx]).data('money');

            J_DSB.innerText = score;
            J_RMB.innerText = money;
        }else {
            $('#J_Amount').bind('input propertychange', function() {
                J_DSB.innerText = this.value;
                J_RMB.innerText = parseInt(this.value)/100;
            });
        }
        console.log('金额下标 : ' + this.idx)
    }
    J_Amount.onclick = function () {
          document.getElementById('J_AmountRadio').checked = true;
        for (var i = 0; i < listLi.length; i++) {
            iptList[i].checked = false;
        }
    };
    //充值按钮
    document.querySelector('#J_Gopay').onclick = function () {
        showNode(m_mask,'block');
        showNode(J2_PayBack,'block');
    };

    jcloseList[0].onclick = function () {
        showNode(m_mask,'none');
        showNode(J2_PayBack,'none');
    };
    jcloseList[1].onclick = function () {
        showNode(m_mask,'none');
        showNode(J2_PayBack,'none');
    };

    setListLI();selPayList();

    function showNode(node,stus) {
        node.style.display = stus;
    }
}();
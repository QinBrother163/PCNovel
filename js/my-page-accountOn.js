/**
 * Created by NameX on 2018/6/9.
 */
/**
 * Created by NameX on 2018/5/29.
 */
function getShowStatus(node, status) {
    node.style.display = status;
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

//账号绑定
function bindingUser(none, idx) {
    var J_WPop1 = document.getElementById('J_WPop1');
    var j_close1 = J_WPop1.getElementsByClassName('j-close')[0];
    var j_close2 = J_WPop1.getElementsByClassName('j-close')[1];
    var J_Unbind = document.getElementById('J_Unbind');
    var m_wb = document.getElementById('m-wb');
    var h6List = m_wb.querySelectorAll('h6');

    j_close1.onclick = function () {
        getShowStatus(J_WPop1, 'none');
    };
    j_close2.onclick = function () {
        getShowStatus(J_WPop1, 'none');
    };
    J_Unbind.onclick = function () {
        var title;
        getShowStatus(J_WPop1, 'none');
        showStatus('解除成功!');
        none.innerText = '绑定账号';

        switch (idx) {
            case 1 :
                title = '搜狐微博';
                break;
            case 2 :
                title = '腾讯微博';
                break;
            case 3 :
                title = '人人网';
                break;
            default:
                title = '新浪微博';
                break;
        }

        h6List[idx].innerText = title;
    };

    if (none.innerText == '解除绑定') {
        getShowStatus(J_WPop1, 'block');
    } else {
        h6List[idx].innerText = '老王' + idx;
        none.innerText = '解除绑定';
    }

}


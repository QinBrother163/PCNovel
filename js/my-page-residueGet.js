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

setTimeout(function () {
    !function () {
        //余额查询
        var J2_TAB = document.getElementById('J2_TAB');
        var listLi = J2_TAB.querySelectorAll('li');

        var J2_mainbox = document.getElementById('J2_mainbox');
        var j_contents = J2_mainbox.querySelectorAll('.j-contents');
        var obj = document.getElementById('J2_Select');

        var index = obj.selectedIndex;
        var text = obj.options[index].text;
        var value = obj.options[index].value;
        console.log(text);
        console.log(value);

        function getTab() {
            for(var i=0;i<listLi.length;i++){
                listLi[i].onclick = getClick;
                listLi[i].idx = i;
            }
        }
        getTab();
        function getClick() {
            for(var i=0;i<listLi.length;i++){
                j_contents[i].style.display = 'none';
                listLi[i].className = 'll';
            }
            if (listLi[this.idx] == this){
                listLi[this.idx].className = 'll crt';
                j_contents[this.idx].style.display = 'block';
            }
        }
    }();
},300);


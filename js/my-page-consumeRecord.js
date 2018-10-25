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


setTimeout(function () {
    //消费记录
    var obj = document.getElementById('J3_Select');
    var J3_mainbox = document.getElementById('J3_mainbox');
    var listLi_J3 = J3_mainbox.querySelectorAll('li');
    var J3_div = J3_mainbox.querySelectorAll('.J3_div');

    function getTab() {
        for(var i=0;i<listLi_J3.length;i++){
            listLi_J3[i].onclick = getClickJ3;
            listLi_J3[i].idx = i;
        }
    }
    getTab();
    function getClickJ3() {
        for(var i=0;i<listLi_J3.length;i++){
            J3_div[i].style.display = 'none';
            listLi_J3[i].className = 'll';
        }
        if (listLi_J3[this.idx] == this){
            listLi_J3[this.idx].className = 'll crt';
            J3_div[this.idx].style.display = 'block';
        }
    }


    var index = obj.selectedIndex;
    var text = obj.options[index].text;
    var value = obj.options[index].value;
    console.log(text);
    console.log(value);


},200);

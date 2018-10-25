/**
 * Created by NameX on 2018/6/12.
 */
function capsLock(e) {
    var valueCapsLock = e.keyCode ? e.keyCode : e.which; // 按键
    var valueShift = e.shiftKey ? e.shiftKey : ((valueCapsLock == 16 ) ? true : false ); // shift键是否按住
    if (((valueCapsLock >= 65 && valueCapsLock <= 90 ) && !valueShift) // 输入了大写字母，并且shift键没有按住，说明Caps Lock打开
        || ((valueCapsLock >= 97 && valueCapsLock <= 122 ) && valueShift)) {// 输入了小写字母，并且按住 shift键<span style="font-family:Arial, Helvetica, sans-serif;">，说明</span><span style="font-family:SimSun;">Caps Lock</span><span style="font-family:Arial, Helvetica, sans-serif;">打开</span>
        document.querySelector('.capslock').style.display = 'block';
        return true;
    } else {
        document.querySelector('.capslock').style.display = 'none';
        return false;
    }
}

function keydown(e) {
    var currKey = 0, e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    if (currKey == 13) {
        alert("我保证，你现在用的是演示一 回车");
    }
}

document.onkeydown = keydown;


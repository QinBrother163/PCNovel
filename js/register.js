/**
 * Created by NameX on 2018/6/12.
 */


//提交函数
function getBeg() {
    var passStatusList = document.querySelectorAll('.passStatus');
    var loginList = document.querySelectorAll('.login');
//    成功
//     passStatusList[0].style.display = 'block';


//    失败
    passStatusList[1].style.display = 'block';

    loginList[1].onclick = function () {
        passStatusList[1].style.display = 'none';
    };
}


//获取验证码倒计时
var times = 60;

function getTime(o) {

    if (o.innerText == "获取验证码") {
        function time(o) {

            if (times == 0) {
                o.removeAttribute("disabled");
                o.className = 'b-btn btn-getsms';
                o.innerText = "获取验证码";
                times = 60;
            } else {
                o.className = 'b-btn btn-getsms btn-getsms-btndisabled';
                o.innerText = "重新发送(" + times + ")";
                times--;
                setTimeout(function () {
                    time(o)
                }, 1000)
            }
        }

        time(o);
    }
}



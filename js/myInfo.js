/**
 * Created by NameX on 2018/5/29.
 */
// var form = document.getElementById('upload'),
//     formData = new FormData(form);
// $.ajax({
//     url:"https://sscpre.boe.com/v1/medical-console/medical/file/upload",
//     type:"post",
//     data:formData,
//     processData:false,
//     contentType:false,
//     success:function(res){
//         if(res){
//             alert("上传成功！");
//         }
//         console.log(res);
//         $("#pic").val("");
//         $(".showUrl").html(res);
//         $(".showPic").attr("src",res);
//     },
//     error:function(err){
//         alert("网络连接失败,稍后重试",err);
//     }
//
// })
//编辑用户资料保存
function updateUser() {
    showStatus('保存成功!');
    getShowStatus(document.getElementById('profile'), 'none');
}

//文件上传
function uploadFiles() {
    var profile = document.getElementById('profile');

    var btnD = document.getElementById('btnD');
    var file = btnD.files[0];

    var form = document.getElementById('edit1Form');
    var formData = new FormData(form);


    if (btnD.files[0].size){
        var reader = new FileReader();


        reader.onloadstart = function (e) {
            console.log("开始读取....");
        };
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        };
        reader.onabort = function (e) {
            console.log("中断读取....");
        };
        reader.onerror = function (e) {
            console.log("读取异常....");
        };
        reader.onload = function (e) {
            console.log("成功读取....");
            var img = document.getElementById("photoshow");
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log(reader)

    }
}


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

// setTimeout(function () {
//     !function () {
//         //余额查询
//         var J2_TAB = document.getElementById('J2_TAB');
//         var listLi = J2_TAB.querySelectorAll('li');
//
//         var J2_mainbox = document.getElementById('J2_mainbox');
//         var j_contents = J2_mainbox.querySelectorAll('.j-contents');
//         var obj = document.getElementById('J2_Select');
//
//         var index = obj.selectedIndex;
//         var text = obj.options[index].text;
//         var value = obj.options[index].value;
//         console.log(text);
//         console.log(value);
//
//         function getTab() {
//             for(var i=0;i<listLi.length;i++){
//                 listLi[i].onclick = getClick;
//                 listLi[i].idx = i;
//             }
//         }
//         getTab();
//         function getClick() {
//             for(var i=0;i<listLi.length;i++){
//                 j_contents[i].style.display = 'none';
//                 listLi[i].className = 'll';
//             }
//             if (listLi[this.idx] == this){
//                 listLi[this.idx].className = 'll crt';
//                 j_contents[this.idx].style.display = 'block';
//             }
//         }
//     }();
// },500);



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

setTimeout(function () {
    var iwrap = document.getElementById('g-iwrap');
    var J_Edit = document.getElementById('J_Edit');
    var eq = document.getElementById('ep');
    var profile = document.getElementById('profile');
    var J_Popclose = document.getElementById('J_Popclose');
    var J_CKJF = document.getElementById('J_CKJF');
    var J_YECX = document.getElementById('J_YECX');
    var J_XFJL = document.getElementById('J_XFJL');
    var J_WDHB = document.getElementById('J_WDHB');
    var J_GSD = document.getElementById('J_GSD');
    var J_GSDBox = document.getElementById('J_GSDBox');

    var userLayerClose = profile.querySelector('.userLayerClose');
    var listLi = iwrap.querySelectorAll('.listLi');
    var m_mainbox = iwrap.querySelectorAll('.m-mainbox');

    // var idx = 0;
    // listLi[idx].className = 'crt listLi';


    function getLiShow(idx) {
        for (var i = 0; i < listLi.length; i++) {
            m_mainbox[i].style.display = 'none';
            listLi[i].className = 'listLi';
        }
        m_mainbox[idx].style.display = 'block';
        listLi[idx].className = 'crt listLi';
    }

    J_CKJF.onclick = function () {
        getLiShow(4);
    };
    J_YECX.onclick = function () {
        getLiShow(2);
    };
    J_XFJL.onclick = function () {
        getLiShow(3);
    };
    J_WDHB.onclick = function () {
        getLiShow(5);
    };
    J_YPJL.onclick = function () {
        getLiShow(4);
    };
    J_GSD.onclick = function () {
        getLiShow(7);
    };


    function getClick() {
        for (var i = 0; i < listLi.length; i++) {
            listLi[i].onclick = get_click;
            listLi[i].idx = i;
        }
    }

    getClick();

    function get_click() {
        for (var i = 0; i < m_mainbox.length; i++) {
            m_mainbox[i].style.display = 'none';
            listLi[i].className = 'listLi';
        }
        if (listLi[this.idx] == this) {
            m_mainbox[this.idx].style.display = 'block';
            listLi[this.idx].className = 'crt listLi';
        }
    }

    J_Edit.onclick = function () {
        getShowStatus(profile, 'block');
    };
    eq.onclick = function () {
        getShowStatus(profile, 'block');
    };
    J_Popclose.onclick = function () {
        getShowStatus(profile, 'none');
    };
    userLayerClose.onclick = function () {
        getShowStatus(profile, 'none');
    };




    // //消费记录
    // var obj = document.getElementById('J2_Select');
    // var J3_mainbox = document.getElementById('J3_mainbox');
    // var listLi_J3 = J3_mainbox.querySelectorAll('li');
    // var J3_div = J3_mainbox.querySelectorAll('.J3_div');
    //
    // function getTab() {
    //     for(var i=0;i<listLi_J3.length;i++){
    //         listLi_J3[i].onclick = getClickJ3;
    //         listLi_J3[i].idx = i;
    //     }
    // }
    // getTab();
    // function getClickJ3() {
    //     for(var i=0;i<listLi_J3.length;i++){
    //         J3_div[i].style.display = 'none';
    //         listLi_J3[i].className = 'll';
    //     }
    //     if (listLi_J3[this.idx] == this){
    //         listLi_J3[this.idx].className = 'll crt';
    //         J3_div[this.idx].style.display = 'block';
    //     }
    // }


    // var index = obj.selectedIndex;
    // var text = obj.options[index].text;
    // var value = obj.options[index].value;
    // console.log(text);
    // console.log(value);


},500);

/**
 * Created by NameX on 2018/6/6.
 */

setTimeout(function () {
    $(document).ready(function () {
        var J_DLH = document.getElementById('J_DLH');

        var name = J_DLH.querySelector('.ulink');
        var submenu = J_DLH.querySelector('.submenu');
        var tcdl = J_DLH.querySelector('.tcdl');

        var J_DLQ = document.getElementById('J_DLQ');


        var dologin = J_DLQ.querySelector('.login');

        function loginStatus(nodeId, status) {
            nodeId.style.display = status;
        }

        name.onmouseover = function () {
            loginStatus(submenu, 'block');
        };
        submenu.onmouseover = function () {
            loginStatus(submenu, 'block');
        };

        name.onmouseout = function () {
            loginStatus(submenu, 'none');
        };
        submenu.onmouseout = function () {
            loginStatus(submenu, 'none');
        };
        //退出
        tcdl.onclick = function () {
            loginStatus(J_DLQ, 'block');
            loginStatus(J_DLH, 'none');
        };
//    登录
        dologin.onclick = function () {
            loginStatus(J_DLQ, 'none');
            loginStatus(J_DLH, 'block');
        };


        //移入事件顶部公众号
        var J_Header = document.getElementById('J_Header');
        var list_li = J_Header.querySelectorAll('li');
        var m_codelayer = J_Header.querySelector('.m-codelayer');

        var login = J_Header.querySelector('.login');

        // login.style.paddingRight = '0px';

        list_li[6].onmouseover = function () {
            m_codelayer.style.display = 'block';
            m_codelayer.style.left = '180px';
        };
        list_li[6].onmouseout = function () {
            setTimeout(function () {
                m_codelayer.style.display = 'none';
            }, 500);
        };


        //移入事件底部手机
        var J_rightsidebar = document.getElementById('J_rightsidebar');
        var m_qr_icon = J_rightsidebar.querySelector('.m-qr-icon');
        var m_qr_hover = J_rightsidebar.querySelector('.m-qr-hover');

        m_qr_icon.onmouseover = function () {
            m_qr_hover.style.display = 'block';
        };

        m_qr_icon.onmouseout = function () {
            m_qr_hover.style.display = 'none';
        };

//回到顶部

        var timer = null;
        var returnHead = document.getElementById('returnHead');

        returnHead.style.right = '85px';

        window.onscroll = function () {

            // var topScroll = document.documentElement.scrollTop;
            var topScroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

            if (topScroll > 200) {

                $("#J_HeaderFix").fadeIn();
                returnHead.style.display = 'block';
            } else {
                $("#J_HeaderFix").fadeOut();
                returnHead.style.display = 'none';
            }
        };

        returnHead.onclick = function () {

            var scrollToptimer = setInterval(function () {
                var top = document.body.scrollTop || document.documentElement.scrollTop;
                var speed = top / 4;
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= speed;
                } else {
                    document.documentElement.scrollTop -= speed;
                }
                if (top == 0) {
                    clearInterval(scrollToptimer);
                }
            }, 30);
        }
    });
}, 500);



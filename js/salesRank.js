/**
 * Created by NameX on 2018/6/7.
 */

//页脚切换
!function () {
    var getPage = document.getElementById('getPage');

    if (getPage){
        var list_A = getPage.querySelectorAll('a');
        var go_p = getPage.querySelector('.go-p');
        var go_n = getPage.querySelector('.go-n');


        function setList() {
            for (var i = 0; i < list_A.length; i++) {
                list_A[i].onclick = setClick;
                list_A[i].idx = i;
            }
        }

        setList();
        function setClick() {

            var crt = getPage.querySelector('.j-crt').innerText;

            for (var i = 0; i < list_A.length; i++) {

                if (list_A[0] == this) {

                    list_A[0].className = 'go go-p';
                    list_A[crt].className = 'ng-scope ng-binding';
                    crt --;
                    list_A[crt].className = 'ng-scope ng-binding j-crt';
                    break;

                } else if (list_A[(list_A.length) - 1] == this) {

                    list_A[0].className = 'go go-n';
                    list_A[crt].className = 'ng-scope ng-binding';
                    crt++;
                    list_A[crt].className = 'ng-scope ng-binding j-crt';
                    break;

                } else {
                    if ((i > 0) && (i < (list_A.length) - 1)) {

                        list_A[i].className = 'ng-scope ng-binding';
                        this.className = 'ng-scope ng-binding j-crt';

                        crt = this.innerText;
                    }
                }
            }

            if (crt < 2) {
                go_p.style.display = 'none';
                go_n.style.display = 'inline-block';
            } else if (crt > 1 && crt < (list_A.length) - 2) {
                go_p.style.display = 'inline-block';
                go_n.style.display = 'inline-block';
            }else if (crt == (list_A.length) - 2) {
                go_n.style.display = 'none';
                go_p.style.display = 'inline-block';
            }
        }
    }
}();

//榜单切换
!function () {
    var grad1 = document.getElementById('m-tabs');
    var G_li = grad1.querySelectorAll('li');

    function setG_li() {
        for (var i = 0; i < G_li.length; i++) {
            G_li[i].onclick = setClick;
        }
    }

    setG_li();
    function setClick() {
        for (var i = 0; i < G_li.length; i++) {
            G_li[i].className = '';
        }
        this.className = 'crt';
    }

}();
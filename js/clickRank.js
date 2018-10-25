/**
 * Created by NameX on 2018/6/7.
 */
!function () {
    var grad1 = document.getElementById('m-tabs');
    var G_li = grad1.querySelectorAll('li');

    function setG_li() {
        for(var i=0;i<G_li.length;i++){
            G_li[i].onclick = setClick;
        }
    }setG_li();
    function setClick() {
        for(var i=0;i<G_li.length;i++){
            G_li[i].className = '';
        }
        this.className = 'crt';
    }

}();
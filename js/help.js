/**
 * Created by NameX on 2018/5/24.
 */
!function () {
    var J_Tags = document.getElementById('J_Tags');
    var J_li = J_Tags.querySelectorAll('li');

    var m_help= document.getElementById('m-help');
    var m_help_div = m_help.querySelectorAll('div');

    function assignClick() {
        for(var i=0;i<J_li.length;i++){
            J_li[i].onclick = setClick;
        }
    }
    assignClick();

    function setClick() {
        for(var i=0;i<J_li.length;i++){

            m_help_div[i].style.display = 'none';
            J_li[i].className = '';

            if (J_li[i] == this){
                m_help_div[i].style.display = 'block';
                J_li[i].className = 'crt';
            }
        }
    }

}();
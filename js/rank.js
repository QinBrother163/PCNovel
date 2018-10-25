/**
 * Created by NameX on 2018/6/6.
 */


    function setApp(node) {
        var nodeId = node.id;
        var grad1 = document.getElementById(nodeId);
        var G_li = grad1.querySelectorAll('li');

        function setG_li() {
            for(var i=0;i<G_li.length;i++){
                G_li[i].onclick = setClick;
                G_li[i].idx = i;
            }
        }setG_li();
        function setClick() {
            for(var i=0;i<G_li.length;i++){
                G_li[i].className = '';
            }

            if (this.idx == 3){
                this.className = 'll crt';

            }else{
                this.className = 'crt';
                G_li[3].className = 'll';
            }

        }
    }

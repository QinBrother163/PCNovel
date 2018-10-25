/**
 * Created by NameX on 2018/6/6.
 */

function setCRT(node) {
    var G_li = node.querySelectorAll('li');


    function setG_li() {
        for (var i = 0; i < G_li.length; i++) {
            G_li[i].onclick = setClick;
            G_li[i].idx = i;
        }
    }

    setG_li();
    function setClick() {

        if (node.id == 'grad-1'){
        //    收藏榜
            console.log('收藏当前选中的下标:' + this.idx)
        }else {
        //    点击榜
            console.log('点击当前选中的下标:' + this.idx)
        }


        for (var i = 0; i < G_li.length; i++) {
            G_li[i].className = '';
        }
        this.className = 'crt';
    }


}

function setActive(node) {
    var G_li = node.querySelectorAll('li');

    function setG_li() {
        for (var i = 0; i < G_li.length; i++) {
            G_li[i].onclick = setClick;
            G_li[i].idx = i;
        }
    }

    setG_li();
    function setClick() {


        if (node.id == 'item-list'){
        //    左侧列表 -- 国风中文网书库
            console.log('国风中文网书库下标 : ' + this.idx)

        }else {


            switch (node.id){
                case 'list_inline1':
                    console.log(node.id)
                    console.log(node.id + ' 下标 : ' + this.idx);
                    break;
                case 'list_inline2':
                    console.log(node.id)
                    console.log(node.id + ' 下标 : ' + this.idx);
                    break;
                case 'list_inline3':
                    console.log(node.id)
                    console.log(node.id + ' 下标 : ' + this.idx);
                    break;
                case 'list_inline4':
                    console.log(node.id)
                    console.log(node.id + ' 下标 : ' + this.idx);
                    break;
                default:
                    console.log(node.id)
                    console.log(node.id + ' 下标 : ' + this.idx);
                    break;
            }




        }





        for (var i = 0; i < G_li.length; i++) {
            G_li[i].className = '';
        }
        this.className = 'active';

    }
}

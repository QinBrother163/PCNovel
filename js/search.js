/**
 * Created by NameX on 2018/6/7.
 */
//加载更多
!function getMore() {
    var getMore = document.getElementById('getMore');
    var data = 0;
    getMore.onclick = function () {
        data ++;
        //模拟没有数据
        if (data > 2){
            getMore.querySelector('a').innerText = '没有更多内容了';
            getMore.querySelector('div').style.display = 'block';
        }else {
            var J_Container = document.getElementById('J_Container');

            for (var i = 0; i < 3; i++) {

                var node = document.createElement('li');

                node.className = 'searchItem';
                node.innerHTML =
                    '<div class="book">'+
                    '<a class="cover" href="novelDetails.html" target="_blank">'+
                    '<img width="114" height="160" src="https://easyreadfs.nosdn.127.net/L_cPqp6gd1EQul4oEstI9Q==/8796093023065933624">'+
                    '<span class="png lian"></span>'+
                    '</a>'+
                    '<h5>'+
                    '<a href="novelDetails.html" target="_blank">吞天记'+ i +'</a>'+
                    '</h5>'+
                    '<p class="author">作者：风青阳</p>'+
                    '<div class="w-star w-star1">'+
                    '<span>&nbsp;</span> <span>&nbsp;</span>'+
                    '<span>&nbsp;</span> <span>&nbsp;</span>'+
                    '<span class="no">&nbsp;</span>'+
                    '</div>'+
                    '<p class="price"><em> ￥0.03/千字 </em></p>'+
                    '<p class="disc"><span class="j-cutted" words="72">炎黄古域，浩瀚无边，无尽岁月中诞生诸多太古仙妖，撕裂天地，超脱三界五行。更有万物神灵，天生神体，穿梭虚空，逆乱阴阳，无所不能。当今乃仙道盛世，万法通天，众生修道，妖孽横行！东吴太子吴煜，于绝境中得东方绝世战仙之衣钵，自此横空出世，逆天崛起。亿万世人心中，他是普渡众生的帝仙！漫天仙佛眼中，他是吞噬天地的妖魔。</span> </p>'+
                    '</div>';

                J_Container.appendChild(node);
            }
        }
    }
}();
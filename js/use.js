// 加载动画
var click_more = document.getElementById('click_more');
var loading_icon = document.getElementById('loading_icon');
click_more.onclick = function () {
    loading_icon.style.background = 'url(../img/loading-icon.gif) no-repeat bottom center';
    setInterval(function() {
        click_more.innerHTML = '没有更多了！！';
    },1200)
}


var xj_nav = document.getElementById('xj_nav');
// console.log(xj_nav);
    var xj_lis = xj_nav.getElementsByTagName('li');
// console.log(xj_lis);



var jiazai_donghua = document.getElementById('jiazai_donghua');



$(function () {

    // $('.jiazai_donghua').show();
    $('#xj_nav li').click(function () {
        $(this).addClass("active_").siblings().removeClass("active_");
        var index = $(this).index();
        // console.log(index);
        setTimeout(function () {
            jiazai_donghua.style.display = 'none';
            $('.sy_list').eq(index).show();
            click_more.style.display = 'block';
        }, 500)
    })

})


function hide_() {
    jiazai_donghua.style.display = 'block';
    sy_all_list.style.display = 'none';
    sy_sqz_list.style.display = 'none';
    sy_syz_list.style.display = 'none';
    sy_yjs_list.style.display = 'none';
    click_more.style.display = 'none';
}

xj_lis[0].onclick = function () {
    hide_();

}
xj_lis[1].onclick = function () {
    hide_();

    
}
xj_lis[2].onclick = function () {
    hide_();


}
xj_lis[3].onclick = function () {
    hide_();

}
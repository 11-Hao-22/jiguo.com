var more = document.getElementsByClassName('more')[0];
var more_ = document.getElementsByClassName('more_')[0];
var loading = document.getElementsByClassName('loading')[0];

function theAjax(elem, theUrl) {
    if (elem == undefined || elem == '') {
        elem = 'art';
    }
    var Ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    Ajax.open('get', theUrl, true);
    Ajax.send();
    Ajax.onreadystatechange = function () {
        if (Ajax.readyState == 4) {
            if (Ajax.status == 200) {
                // loading.style.display = 'none';
                // more.style.display = 'block';
                var res = JSON.parse(Ajax.responseText);
                useres(res, elem);
            } else {
                console.log(Ajax.status);
            }
        }
    }
}
theAjax('art', 'http://192.168.1.10:3000/guid/new');

function useres(res, elem) {
    var html = template(elem, {
        value: res
    })
    document.getElementsByClassName('page')[0].innerHTML = html;
    outhid();
}

// var main = document.getElementsByClassName('page')[0];

function outhid() {
    var out = document.getElementsByClassName('guid_out');
    var m = 1;
    for (var i = 0; i < out.length; i++) {
        if (i >= m * 16) {
            out[i].style.display = 'none';
        }
    }
    m++;
    more.style.display = 'block';
    if (out.length < m * 16) {
        // more.style.display = 'none';
    }
    var temer;
    more_.onclick = function () {
        temer = setInterval(function () {
            for (var i = 0; i < out.length; i++) {
                if (i < 16 * m) {
                    out[i].style.display = 'block';

                } else {
                    out[i].style.display = 'none';
                }
            }
            m++;
            if (out.length < m * 16) {
                more_.innerHTML = '没有更多内容！！';
                more.style.backgroundImage = 'url(../img/up.png)';
            }

        }, 1000)

    }

}


// <!-- 加载 hot -->
$(function () {
    $('.page').hide()
    $('.page').eq(0).show();
    $('.lis li').click(function () {
        // alert('111')
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // console.log(index);
        if ($(this).index() == 0) {
            theAjax('art', 'http://192.168.1.10:3000/guid/new');
        } else if ($(this).index() == 1) {
            theAjax('art', 'http://192.168.1.10:3000/guid/hot');
        } 

        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".item .page").eq(index).show().siblings(".page").hide();
    })

    $('.jiazai p').click(function () {
        $(this).siblings('.more').css("background-image", "url(../img/loading-icon.gif)");
    })


});
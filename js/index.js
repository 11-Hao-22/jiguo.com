 //  计时器
 var Christmas = document.getElementById('sd_time');
 countDown();
 setInterval(countDown, 1000)

 function countDown() {
     var shengdan = new Date("2021-12-25 0:00:00");
     var nowtime = new Date();
     var sy = shengdan.getTime() - nowtime.getTime();
     var d = Math.floor(sy / 1000 / 60 / 60 / 24);
     var h = Math.floor(sy / 1000 / 60 / 60 % 24);
     var m = Math.floor(sy / 1000 / 60 % 60);
     var s = Math.floor(sy / 1000 % 60);
     var shengyu = d + "天" + h + "时" + m + "分" + s + "秒";
     // console.log(shengyu);
     // console.log(Christmas);
     Christmas.innerHTML = shengyu;

 }




 var more = document.getElementsByClassName('more')[0];
 var more_ = document.getElementsByClassName('more_')[0];

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
                 // console.log(res);
                 useres(res, elem);
             } else {
                 console.log(Ajax.status);
             }
         }
     }
 }

 theAjax('art', 'http://192.168.1.10:3000/play/hot');

 function useres(res, elem) {
     var html = template(elem, {
         value: res
     })
     var html1 = template(elem, {
         value: res
     })
     var html2 = template(elem, {
         value: res
     })

     document.getElementsByClassName('choice_pics')[0].innerHTML = html;
     document.getElementsByClassName('shop_pic')[0].innerHTML = html1;
     
 }

 $.ajax({
     //请求方式
     type: 'get',

     //发送请求的地址
     //我这里的地址是不需要传数据的，所以没有拼接参数
     url: 'http://192.168.1.10:3000/report/hot',

     //服务器返回的数据类型
     dataType: 'json',

     //请求成功的处理
     success: function (data) {
        //  console.log(data);
         //获取需要的数据
         // var group = data.;
         // console.log(group);


         //拼接字符串
         var str = '';
         var str2 = '';
         var str3 = '';
         var str4 = '';
         //对数据做遍历，拼接到页面显示
         for (var i = 0; i < data.length; i++) {
             str += '<span>' +
                 '<img src ="' + data[i].img + '" alt="">' +
                 '<p>' + ' ' + data[i].text + '</p>' +
                 '<em>' + '3' + '</em>' +
                 '<em>' + '4' + '</em>' +
                 '</span>';

             str2 += '<li>' +
                 '<img src ="' + data[i].img + '" alt="">' +
                 '<p>' + ' ' + data[i].text + '</p>' +
                 '<a href=""#">' + 1 + '</a>' +
                 '<a href=""#">' + 2 + '</a>' +
                 '<p>' + '<em>' + '1392' + '</em>' + '申请' + '</p>' +
                 '<p>' + '剩余时间2天' + '</p>' +
                 '</li>'


             str3 += '<span>' +
                 '<img src ="' + data[i].img + '" alt="">' +
                 '<p>' + ' ' + data[i].text + '</p>' +
                 '<em>' + '3' + '</em>' +
                 '<em>' + '4' + '</em>' +
                 '</span>';

             str4 += '<span class = "out">' +
                 '<img src ="' + data[i].img + '" alt="">' +
                 '<p>' + data[i].text + '</p>' +
                 '<a>' + '可以测定食物成分及营养' + '</a>' +
                 '<em>' + '￥ 1212' + '</em>' +
                 '<em>' + '3' + '</em>' +
                 '<em>' + '4' + '</em>' +
                 '</span>'

         }
         //放入页面的容器显示
         $('.find_pic').html(str4);
         outhid();
     },
     //请求失败的处理
     error: function (jqXHR) {
         console.log(jqXHR);
     }
 });

 function outhid() {
    var out = document.getElementsByClassName('out');
    var m = 1;
    for (var i = 0; i < out.length; i++) {
        if (i >= m * 16) {
            out[i].style.display = 'none';
        }
    }
    m++;
    more.style.display = 'block';
    var temer;
    more_.onclick = function () {
        temer = setInterval(function () {
            for (var i = 0; i < out.length; i++) {
                if (i <= 16 * m) {
                    out[i].style.display = 'block';

                } else {
                    out[i].style.display = 'none';
                }
            }
            m++;
            if (out.length < m * 16) {
                more_.innerHTML = '没有更多内容！';
                more.style.backgroundImage = 'url(./img/up.png)';
            }

        }, 1000)

    }

}
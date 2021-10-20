 /*获取会员名的文本框、密码输入框以及确认密码的输入框*/
 /*获取P标签*/
 var tel = document.getElementById('tel'), //手机号
     yzm = document.getElementById('yzm'), //验证码
     numyzm = document.getElementById('numyzm'), //图片验证码
     user = document.getElementById("user"), //用户名
     psd = document.getElementById("psd"), //密码
     psd2 = document.getElementById("psd2"), //确认密码
     p1 = document.getElementById('p1'),
     p2 = document.getElementById('p2'),
     p3 = document.getElementById('p3'),
     p4 = document.getElementById('p4'),
     p5 = document.getElementById('p5'),
     p6 = document.getElementById('p6'),
     submitBtn = document.getElementById('submitBtn');


 //当光标聚集到文本框时，p标签里的文字显示

 //   手机部分显示
 tel.onfocus = function () {
     p1.style.display = "inlne-block";
     //光标再次聚集文本框时，改变文字显示
     p1.innerHTML = '<i class="ati"></i>6-12个字符，推荐使用中文会员名'
 }
 tel.onblur = function () {
     //正则判断
     reg = /^1[3|4|5|7|8]\d{9}$/; //手机号码的验证
     //如果值为空，则p标签的内容改为“不能为空”
     if (tel.value == '') {
         p1.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //如果长度不在6-12之间并且存在非法字符
     else if (!reg.test(tel.value)) {
         p1.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
         return false;
     }
     //用户名输入与要求一致
     else {
         p1.innerHTML = '<i class="ok"></i>正确'
         return true
     }
 }

 // 验证码部分
 yzm.onfocus = function () {
     p2.style.display = "inlne-block";
     //光标再次聚集文本框时，改变文字显示
     p2.innerHTML = '<i class="ati"></i>请输入图片显示数据'
 }
 yzm.onblur = function () {
     //正则判断
     reg = /^[a-zA-Z0-9]{4}$/; //手机号码的验证
     //如果值为空，则p标签的内容改为“不能为空”
     if (yzm.value == '') {
         p2.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //如果长度不在6-12之间并且存在非法字符
     else if (yzm.value === 'r2b7') {
         p2.innerHTML = '<i class="ok"></i>正确'
         return true;
     }
     //用户名输入与要求一致
     else {
         p2.innerHTML = '<i class="err"></i>请输入正确数据'
         return false;
     }
 }

 // 图片验证码部分
 numyzm.onfocus = function () {
     p3.style.display = "inlne-block";
     //光标再次聚集文本框时，改变文字显示
     p3.innerHTML = '<i class="ati"></i>请输入收到的验证码'
 }
 numyzm.onblur = function () {

     //正则判断
     reg = /^\d{6}$/; //手机短信验证码
     //如果值为空，则p标签的内容改为“不能为空”
     if (numyzm.value == '') {
         p3.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //如果长度不在6-12之间并且存在非法字符
     else if (!reg.test(numyzm.value)) {
         p3.innerHTML = '<i class="err"></i>长度不在范围内或存在非法字符'
         return false;
     }
     //用户名输入与要求一致
     else {
         p3.innerHTML = '<i class="ok"></i>正确'
         return true
     }
 }

 // 用户名部分
 user.onfocus = function () {
     p4.style.display = "inlne-block";
     //光标再次聚集文本框时，改变文字显示
     p4.innerHTML = '<i class="ati"></i>6-12个字符，推荐使用中文会员名'
 }
 user.onblur = function () {
     //正则判断
     reg = /^[\w\u4e00-\u9fa5]{6,12}$/; // [\w\u4e00-\u9fa5] 判断非法字符
     //如果值为空，则p标签的内容改为“不能为空”
     if (user.value == '') {
         p4.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //如果长度不在6-12之间并且存在非法字符
     else if (!reg.test(user.value)) {
         p4.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
         return false;
     }
     //用户名输入与要求一致
     else {
         p4.innerHTML = '<i class="ok"></i>正确'
         return true
     }
 }

 //密码部分
 psd.onfocus = function () {
     p5.style.display = 'inline-block';
     //光标再次聚集密码框时，改变文字显示
     p5.innerHTML = '<i class="ati"></i>长度在6-12个字符'
 }
 psd.onblur = function () {
     var reg = /^\w{6,12}$/;
     var reg1 = /[^0-9]/;
     var reg2 = /[^a-zA-Z]/;
     // console.log(reg1.test(psd.value));
     //不能为空
     if (psd.value == '') {
         p5.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //长度在6-12之间 字母数字下划线
     else if (!reg.test(psd.value)) {
         p5.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
         return false;
     }
     //不能全是数字  
     else if (!reg1.test(psd.value)) {
         p5.innerHTML = '<i class="err"></i>不能全是数字'
         return false;
     }
     //不能全是字母
     else if (!reg2.test(psd.value)) {
         p5.innerHTML = '<i class="err"></i>不能全是字母'
         return false;
     }
     //密码输入与要求一致
     else {
         p5.innerHTML = '<i class="ok"></i>正确'
         return true;
     }
 }

 //  确认密码部分
 psd2.onfocus = function () {
     p6.style.display = 'inline-block';
     //光标再次聚集确认密码框时，改变文字显示
     p6.innerHTML = '<i class="ati"></i>请输入相同密码';
 }
 psd2.onblur = function () {
     //不能为空
     if (psd2.value == "") {
         p6.innerHTML = '<i class="err"></i>不能为空';
         return false;
     }
     //两次密码输入不一致
     else if (psd.value != psd2.value) {
         p6.innerHTML = '<i class="err"></i>两次密码不一致';
         return false;
     }
     //密码输入与要求一致
     else {
         p6.innerHTML = '<i class="ok"></i>正确'
         return true;
     }
 }

 submitBtn.onclick = function () {
     if (tel.onblur() && yzm.onblur() && numyzm.onblur() &&
         user.onblur() && psd.onblur() && psd2.onblur()) {
         //document.forms[0].submit();
         document.getElementsByTagName("form")[0].submit();
     }
 }
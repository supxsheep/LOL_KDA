// 第一个轮播 制作 逐一制作
var vid1 =document.getElementById("vid1");
var vid2 =document.getElementById("vid2");
var vid3 =document.getElementById("vid3");
var pic1 =document.getElementById("img_1");
var pic2 =document.getElementById("img_2");
var pic3 =document.getElementById("img_3");
pic1.onclick = function(){
    vid2.style.display = "none";
    vid3.style.display = "none";
    vid1.style.display = "block";
}
pic2.onclick = function(){
    vid1.style.display = "none";
    vid3.style.display = "none";
    vid2.style.display = "block";
}
pic3.onclick = function(){
    vid1.style.display = "none";
    vid2.style.display = "none";
    vid3.style.display = "block";
}

//小小英雄 点击事件


// function myFun(n){
//     var li=document.getElementById("li");
//     li[n].style.opacity = "1";
// }


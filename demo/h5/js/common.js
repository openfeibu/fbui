
// //微信注入
// function fb_config(){
//    $.getJSON(locahost +'wechat/getConfig',{"url":location.href},function(data) {
//         if(data.code == 200){
//           wx.config({
//           debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//           appId: data.data.appId, // 必填，公众号的唯一标识
//           timestamp:data.data.timestamp , // 必填，生成签名的时间戳
//           nonceStr:data.data.nonceStr, // 必填，生成签名的随机串
//           signature: data.data.signature,// 必填，签名，见附录1
//           jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline","openAddress","scanQRCode"],// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//           // url:decodeURIComponent(data.data.url)
//         });
//       }
//     })
// }
// $(function(){
//   try {
//     if (wx && is_weixn()) {
//        fb_config();
//       }
//     } catch (e) {
       
//     }
// })
// //微信注入
$(function(){
var w = $(window).width();
var isAndroid = /(Android)/i.test(navigator.userAgent);
var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    imageObj = new Image(),
    imgObj=[];
$("#canvas").css({"width":w,"height":(w*1136)/640,"margin-top":-((w*1136)/640)/2,"top":"50%"});
$("#byl_video").css({"width":w,"height":(w*1136)/640,"margin-top":-((w*1136)/640)/2,"top":"50%"});
var fileList = [
   "video/img/1.jpg",
   "video/img/2.jpg",
   "video/img/3.jpg",
   "video/img/4.jpg",
   "video/img/5.jpg",
   "video/img/6.jpg",
   "video/img/7.jpg",
   "video/img/8.jpg",
   "video/img/9.jpg",
   "video/img/10.jpg",
   "video/img/11.jpg",
   "video/img/12.jpg",
   "video/img/13.jpg",
   "video/img/15.jpg",
];
 // 加载帧图资源
  loader = new PxLoader();
  for (var i = 0; i < fileList.length; i++) {
      imgObj[i] = loader.addImage(fileList[i]);
  }

  loader.start();
  // 加载完成
  loader.addCompletionListener(function () {
      var flag = false;
      var imageNumber = 0;
      var speed = 1000;
      var timer = null;
      var videoElem = document.getElementById('byl_video');
      var buffered = 0;
      runFun();
      if(isAndroid){
        videoElem.addEventListener('canplaythrough',function(){
            clearInterval(timer)
            speed = 200;
            runFun();
            videoElem.removeeventlistener("canplaythrough");
        });
      }else{
        var n = 0;
        var t = setInterval(function(){
            n++;
            if(n == 8){
              clearInterval(timer)
              clearInterval(t)
              speed = 200;
              runFun();
            }
        },500)
      }
      function runFun(){
          timer = setInterval(function () {
          context.drawImage(imgObj[imageNumber],0,0,375,668);
          imageNumber++;
          if (imageNumber === fileList.length) {
              imageNumber = fileList.length-2;
              if(!flag){
                $(".video_welcome").on("click",function(){
                  $("#video_welcome").css("opacity","1");
                  $("#byl_video")[0].play(); 
                  $(".video_welcome").hide();
                  clearInterval(timer);
                })
                flag == true;
              }
          }
       }, speed);
      }
 
  });

})



// $(function(){
//             var cont = $("#video_welcome")[0];
//             var cont1 = $("#video_content")[0];
//             var cw = window.innerWidth;
//             var ch = window.innerHeight;

//             var canvas = document.createElement('canvas');
//             canvas.width = cw;
//             canvas.height = ch;
//             canvas.style.zIndex = 8;
//             canvas.style.position = "absolute";
//             cont.appendChild(canvas);
//             var cont2D = canvas.getContext("2d");
//             var video = document.createElement('video');
//             video.preload = "auto";
//             video.volume = 0.3;
//             video.setAttribute('x-webkit-airplay', true);
//             video.setAttribute('webkit-playsinline', true);
//             video.setAttribute('webkit-playsinline', 'webkit-playsinline');
//             video.src = 'video/1.mp4';
//             video.autoplay = "autoplay"; //是自动播放

//             video.addEventListener("play", function() {
//                 draw(this, canvas, cont2D, cw, ch);
//             }, false)

//             function cerateCanvas(w, h) {
//                 var cr = doc.createElement("canvas");
//                 cr.width = w;
//                 cr.height = h;
//                 return cr;
//             }

//             function draw(v, c, c2, w, h) {
//                 if(v.paused || v.ended) {

//                     $("#video_welcome").one("click",function(){        
//                         $("#video_welcome").hide();
//                         video1.play();
//                     })
//                     cancelAnimationFrame(stop);
//                     return false;
//                 }
//                 c2.drawImage(v, 0, 0, w, h);
//                 var stop = requestAnimationFrame(function() {
//                     draw(v, c, c2, w, h);
//                 });
//             }
//             document.addEventListener("WeixinJSBridgeReady", function () { 
//                 video.play(); 
//                 alert(1)
//             }, false); 
//              // 第二个视频
//             var canvas1 = document.createElement('canvas');
//             canvas1.width = cw;
//             canvas1.height = ch;
//             canvas1.style.zIndex = 8;
//             canvas1.style.position = "absolute";
//             cont1.appendChild(canvas1);
//             var cont2D1 = canvas1.getContext("2d");
//             var video1 = document.createElement('video');
//             video1.preload = "auto";
//             video1.volume = 0.3;
//             video1.setAttribute('x-webkit-airplay', true);
//             video1.setAttribute('webkit-playsinline', true);
//             video1.setAttribute('webkit-playsinline', 'webkit-playsinline');
//             video1.src = 'video/2.mp4';
//             // video1.autoplay = "autoplay"; //是自动播放
//             video1.addEventListener("play", function() {
//                 draw1(this, canvas1, cont2D1, cw, ch);
//             }, false)

//             function cerateCanvas(w, h) {
//                 var cr = doc.createElement("canvas");
//                 cr.width = w;
//                 cr.height = h;
//                 return cr;
//             }

//             function draw1(v, c, c2, w, h) {
//                 if(v.paused || v.ended) {
//                     // $("#video_welcome").one("click",function(){
//                     //      $("#video_welcome").hide();
//                     // })
//                     cancelAnimationFrame(stop1);
//                     return false;
//                 }
//                 c2.drawImage(v, 0, 0, w, h);
//                 var stop1 = requestAnimationFrame(function() {
//                     draw(v, c, c2, w, h);
//                 });
//             }
//             // 第二个视频



// })
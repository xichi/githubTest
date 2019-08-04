<template onload="draw();">
   <div>
    <p>别人画的</p>
    <canvas id="canvas1" width="200" height="200">你的浏览器不支持 canvas，请升级你的浏览器。</canvas>
    <p>先按教程整一个(*^o^)人(^o^*)</p>
    <canvas id="canvas2" width="250" height="250">你的浏览器不支持 canvas，请升级你的浏览器。</canvas>
    <p>整一个时钟</p>
    <canvas id="canvas3" width="300" height="300">你的浏览器不支持 canvas，请升级你的浏览器。</canvas>
   </div>
   
</template>

<script>
export default{
    data(){
      return{}
    },
     mounted() {
      var canvas1 = document.getElementById('canvas1');
      if (canvas1.getContext){
      var ctx = canvas1.getContext('2d');

      roundedRect(ctx,12,12,150,150,15);
      roundedRect(ctx,19,19,150,150,9);
      roundedRect(ctx,53,53,49,33,10);
      roundedRect(ctx,53,119,49,16,6);
      roundedRect(ctx,135,53,49,33,10);
      roundedRect(ctx,135,119,25,49,10);

      ctx.beginPath();
      ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
      ctx.lineTo(31,37);
      ctx.fill();

      for(var i=0;i<8;i++){
      ctx.fillRect(51+i*16,35,4,4);
      }

      for(i=0;i<6;i++){
      ctx.fillRect(115,51+i*16,4,4);
      }

      for(i=0;i<8;i++){
      ctx.fillRect(51+i*16,99,4,4);
      }

      ctx.beginPath();
      ctx.moveTo(83,116);
      ctx.lineTo(83,102);
      ctx.bezierCurveTo(83,94,89,88,97,88);
      ctx.bezierCurveTo(105,88,111,94,111,102);
      ctx.lineTo(111,116);
      ctx.lineTo(106.333,111.333);
      ctx.lineTo(101.666,116);
      ctx.lineTo(97,111.333);
      ctx.lineTo(92.333,116);
      ctx.lineTo(87.666,111.333);
      ctx.lineTo(83,116);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91,96);
      ctx.bezierCurveTo(88,96,87,99,87,101);
      ctx.bezierCurveTo(87,103,88,106,91,106);
      ctx.bezierCurveTo(94,106,95,103,95,101);
      ctx.bezierCurveTo(95,99,94,96,91,96);
      ctx.moveTo(103,96);
      ctx.bezierCurveTo(100,96,99,99,99,101);
      ctx.bezierCurveTo(99,103,100,106,103,106);
      ctx.bezierCurveTo(106,106,107,103,107,101);
      ctx.bezierCurveTo(107,99,106,96,103,96);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101,102,2,0,Math.PI*2,true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(89,102,2,0,Math.PI*2,true);
      ctx.fill();
}

// 封装的一个用于绘制圆角矩形的函数.

function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.stroke();
}
//先按教程走一个
     var canvas2 = document.getElementById('canvas2');
      if (canvas2.getContext){
      var ctx2 = canvas2.getContext('2d');  
      ctx2.fillRect(10, 10, 200, 200)
      ctx2.clearRect(20,20,180,180)
      
      
      ctx2.beginPath()
      ctx2.moveTo(25,25)
      ctx2.lineTo(50,25)
      ctx2.lineTo(50,50)
      ctx2.closePath()
      ctx2.stroke()

      ctx2.beginPath()
      ctx2.moveTo(85,25)
      ctx2.lineTo(60,25)
      ctx2.lineTo(60,50)
      ctx2.closePath()
      ctx2.fill()

      ctx2.beginPath();
      ctx2.arc(25, 70, 20, 0, Math.PI / 2, false);
      ctx2.stroke();

      ctx2.beginPath()
      ctx2.moveTo(25,80)
      ctx2.quadraticCurveTo(30,50,45,90)
      ctx2.stroke();

      for (var k = 0; k < 6; k++){
          for (var j = 0; j < 6; j++){
            ctx2.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * k) + ',' +
                      Math.floor(255 - 42.5 * j) + ',0)';
            ctx2.fillRect(25+j*5, 100+k*5, 10, 10);
          }
        }

      for (var m = 0; m < 6; m++){
          for (var n = 0; n < 6; n++){
            ctx2.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * m) + ',' +
                      Math.floor(255 - 42.5 * n) + ',0)';
            ctx2.fillRect(30+n*5, 150+m*5, 1, 20);
          }
        }  
      }  
    //时钟诶  
    var canvas3 = document.getElementById('canvas3')
    if(canvas3.getContext){
      var ctx3 = canvas3.getContext('2d')
          let pi = Math.PI;
        setInterval(()=>{ 
          drawclock()
          let time = new Date();
 
          let s = time.getSeconds();
          let m = time.getMinutes();
          let h = time.getHours();
          
          let secondAngle = pi / 180 * 6 * s;  //计算出来s针的弧度
          let minuteAngle = pi / 180 * 6 * m + secondAngle / 60;  //计算出来分针的弧度
          let hourAngle = pi / 180 * 30 * h + minuteAngle / 12;  //计算出来时针的弧度
      
          drawHand(hourAngle, 60, 6, "#FFAB98", ctx3);  //绘制时针
          drawHand(minuteAngle, 106, 4, "#9D71BD", ctx3);  //绘制分针
          drawHand(secondAngle, 129, 2, "#75B570", ctx3);  //绘制秒针
        
        },100)
          
    }
      function drawHand(angle, len, width, color, ctx){
            ctx.save();
            ctx.translate(150, 150); //把坐标轴的远点平移到原来的中心
            ctx.rotate(-Math.PI / 2 + angle);  //旋转坐标轴。 x轴就是针的角度
            ctx.beginPath();
            ctx.moveTo(-4, 0);
            ctx.lineTo(len, 0);  // 沿着x轴绘制针
            ctx.lineWidth = width;
            ctx.strokeStyle = color;
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
          }
      function drawclock(){
          ctx3.clearRect(0, 0, 300, 300); //清除所有内容
          ctx3.save();
          let pi = Math.PI;
      
          ctx3.translate(150, 150); //一定坐标原点到原来的中心
          ctx3.beginPath();
          ctx3.arc(0, 0, 145, 0, 2 * pi); //绘制圆周
          ctx3.lineWidth = 5;
          ctx3.strokeStyle = "#658387";
          ctx3.stroke();
          ctx3.closePath();
          for (let i = 0; i < 60; i++){//绘制刻度。
              var height = i % 5 ? 120 : 110;
              ctx3.save();
              ctx3.rotate(-pi / 2 + i * pi / 30);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
              ctx3.beginPath();
              ctx3.moveTo(height, 0);
              ctx3.lineTo(140, 0);
              ctx3.lineWidth = i % 5 ? 2 : 3;
              ctx3.strokeStyle = i % 5 ? "#33BAFF" : "#1E95D4";
              ctx3.stroke();
              ctx3.closePath();
              ctx3.restore();
          }
           var hourNumbers=[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];//12个小时画圆时使用的数组，圆形是从3的位置为起始位置开始顺时针来画的
                hourNumbers.forEach(function (number,i) {
                  var rad =2 * Math.PI /12 *i ;//先求出每个点的弧度 sin和cos使用的是弧度的值
                  var x=Math.cos(rad) * 100;
                  var y=Math.sin(rad) * 100;
              
                  ctx3.font = "18px sans-serif"
                  ctx3.textAlign='center';
                  ctx3.textBaseline='middle'; 
                  ctx3.fillText(number, x, y);//方法在画布上绘制填色的文本。文本的默认颜色是黑色。为每个坐标x和y上的设置数值number
                });
          ctx3.restore();
        }    
    },    
} 
</script>

<style>
 canvas{
   border:1px solid pink;
 }
</style>

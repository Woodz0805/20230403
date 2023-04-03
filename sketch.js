// let ctx;
// let points = [[-8,4], [-5,4], [-5,5],[-4,6],[-2,6],[-1,5],[-1,2],[-2,1],[0,1],[3,0],[3,-3],[2,-5],[0,-5],[0,-6],[-1,-6],[-1,-5],[-2,-5],[-2,-6],[-3,-6],[-3,-5],[-4,-5],[-6,-4],[-6,-1],[-5,0],[-4,1],[-5,2],[-5,3],[-9,3]]; //list資料，


// function setup() {   //只會執行一次的函數
//   createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
//   //把points 內的值都*50
//   // for (let i = 0; i < points.length; i++) { 
//   //   for (let j = 0; j < points[i].length; j++) {
//   //     points[i][j] = points[i][j] * 20;//將圖片放大
//   //   }

//     ctx = canvas.getContext('2d');
//     ctx.lineWidth = 10;
//     ctx.lineCap = 'round'
//     //------

//     translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
//       scale(1, -1);  //上下翻轉
    
    

//     gradientLine(ctx, -160, 80, -100, 80, 'black', 'blue')
//     gradientLine(ctx, -100, 80, -100, 100, 'black', 'blue')
//     gradientLine(ctx, -100, 100, -80, 120, 'brown', 'orange')
//     gradientLine(ctx, -80, 120, -40, 120, 'brown', 'orange')
//     gradientLine(ctx, -40, 120, -20, 100, 'brown', 'orange')
//     gradientLine(ctx, -20, 100, -20, 40, 'lightblue', 'lime')
//     gradientLine(ctx, -20, 40, -40, 20, 'lightblue', 'lime')
//     gradientLine(ctx, -40, 20, 0, 20, 'black', 'blue')
//     gradientLine(ctx, 0, 20, 60, 0, 'black', 'blue')
//     gradientLine(ctx, 60, 0, 60, -60, 'brown', 'orange')
//     gradientLine(ctx, 60, -60, 40, -100, 'brown', 'orange')
//     gradientLine(ctx, 40, -100, 0, -100, 'brown', 'orange')
//     gradientLine(ctx, 0, -100, 0, -120, 'lightblue', 'lime')
//     gradientLine(ctx, 0, -120, -20, -120, 'lightblue', 'lime')

//     gradientLine(ctx, -20, -120, -20, -100, 'black', 'blue')
//     gradientLine(ctx, -20, -100, -40, -100, 'black', 'blue')
//     gradientLine(ctx, -40, -100, -40, -120, 'black', 'blue')
//     gradientLine(ctx, -40, -120, -60, -120, 'brown', 'orange')
//     gradientLine(ctx, -60, -120, -60, -120, 'brown', 'orange')
//     gradientLine(ctx, -60, -120, -60, -100, 'brown', 'orange')
//     gradientLine(ctx, -60, -100, -80, -100, 'lightblue', 'lime')
//     gradientLine(ctx, -80, -100, -120, -80, 'lightblue', 'lime')
//     gradientLine(ctx, -120, -80, -120, -80, 'black', 'blue')
//     gradientLine(ctx, -120, -80, -120, -20, 'black', 'blue')
//     gradientLine(ctx, -120, -20, -80, 20, 'brown', 'orange')
//     gradientLine(ctx, -80, 20, -100, 40, 'brown', 'orange')
//     gradientLine(ctx, -100, 40, -100, 60, 'lightblue', 'lime')
//     gradientLine(ctx, -100, 60, -180, 60, 'lightblue', 'lime')
//     gradientLine(ctx, -180, 60, -160, 80, 'black', 'blue')
    

//   }

// // }

// // function draw() {
// //   background(255);
// //   // scale(50)
// //   translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
// //   scale(1, -1);  //上下翻轉


// //   for (let i = 0; i < points.length-1; i++) {
// //     line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);

// //   }
  
// //   line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線

// // }

// function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//   gradient.addColorStop(0, c1);
//   gradient.addColorStop(1, c2);
//   ctx.strokeStyle = gradient;

//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ,[3,0],[3,-3],[2,-5],[0,-5],[0,-6],[-1,-6],[-1,-5],[-2,-5],[-2,-6],[-3,-6],[-3,-5],[-4,-5],[-6,-4],[-6,-1],[-5,0],[-4,1],[-5,2],[-5,3],[-9,3]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let ctx;
let points = [[-8,4], [-5,4], [-5,5],[-4,6],[-2,6],[-1,5],[-1,2],[-2,1],[0,1],[3,0],[3,-3],[2,-5],[0,-5],[0,-6],[-1,-6],[-1,-5],[-2,-5],[-2,-6],[-3,-6],[-3,-5],[-4,-5],[-6,-4],[-6,-1],[-5,0],[-4,1],[-5,2],[-5,3],[-9,3]]; //list資料，


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  
  for (let i = 0; i < points.length; i++) { 
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = (points[i][j]+(mouseX/20)) * 10;//將圖片放大(整體的圖片)
      
    }

    ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'

    

  }

}

function draw() {
  background(255);//背景
  textWidth(4)//文字寬度
  textSize(50*(mouseX/1000))  //文字大小
  fill(100, 202, 153);  //設定顏色
  text("教科作業",mouseX,mouseY)  //顯示文字
  // scale(50)
  translate(mouseX-20, mouseY-50); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉

for(k=1;k<6;k++){ //設定for迴圈，用此來畫出5個大小不同的圖

  for (let i = 0; i < points.length-1; i++) { //設定for迴圈，用此來畫出完整的圖
    // line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    gradientLine(ctx, (points[i][0]*(mouseX/1000))*k, (points[i][1]*(mouseX/1000))*k, (points[i+1][0]*(mouseX/1000))*k, (points[i+1][1]*(mouseX/1000))*k, '#fb6f92', 'orange') //(points[i+1][1]*(mouseX/1000))*k ，*(mouseX/1000)乘以mouseX/1000來跟隨著mouse放大縮小，*k是來畫出5個大小不同的圖，gradientLine是用來畫漸層
    

  }
  
  // line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
  gradientLine(ctx, (points[points.length-1][0]*(mouseX/1000))*k, (points[points.length-1][1]*(mouseX/1000))*k, (points[0][0]*(mouseX/1000))*k, (points[0][1]*(mouseX/1000))*k, 'lightblue', 'lime') //

}
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let points = [[-8,4], [-5,4], [-5,5],[-4,6],[-2,6],[-1,5],[-1,2],[-2,1],[0,1],[3,0],[3,-3],[2,-5],[0,-5],[0,-6],[-1,-6],[-1,-5],[-2,-5],[-2,-6],[-3,-6],[-3,-5],[-4,-5],[-6,-4],[-6,-1],[-5,0],[-4,1],[-5,2],[-5,3],[-9,3]];
// let color1, color2;

// function setup() {
// createCanvas(windowWidth, windowHeight);
// color1 = color("#e76f51"); // 設定第一個顏色為紅色
// color2 = color("#264653"); // 設定第二個顏色為藍色
// for (let i = 0; i < points.length; i++) {
// for (let j = 0; j < points[i].length; j++) {
// points[i][j] = points[i][j] * 40;
// }
// }
// }

// function draw() {
// background(255);
// strokeWeight(10)
// translate(width/2, height/2);
// scale(1, -1);
// for (let i = 0; i < points.length-1; i++) {
// let gradientColor = lerpColor(color1, color2, i/(points.length-2)); // 計算漸層顏色
// stroke(gradientColor); // 設定當前線段的顏色
// line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
// }
// let lastLineGradientColor = lerpColor(color1, color2, 1); // 最後一條線段的漸層顏色
// stroke(lastLineGradientColor);
// line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let ctx
// let points = [[-8,4], [-5,4], [-5,5],[-4,6],[-2,6],[-1,5],[-1,2],[-2,1],[0,1],[3,0],[3,-3],[2,-5],[0,-5],[0,-6],[-1,-6],[-1,-5],[-2,-5],[-2,-6],[-3,-6],[-3,-5],[-4,-5],[-6,-4],[-6,-1],[-5,0],[-4,1],[-5,2],[-5,3],[-9,3]];

//   function setup() {   //只會執行一次的函數
//     createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
//     //把points 內的值都50
//     for (let i = 0; i < points.length; i++) {
//       for (let j = 0; j < points[i].length; j++) {
//         points[i][j] = points[i][j]*5;//將圖片放大20倍
//       }
//     }
//     ctx = canvas.getContext('2d');
//     ctx.lineWidth = 10;
//     ctx.lineCap = 'round'
//     gradientLine(ctx, -160, 80, -100, 80, 'lightblue', '#ffba08')
//   }

//   function draw() {
//     background(255);
//     // scale(50)

//     textWidth(4)//文字寬度
//     textSize(50*(mouseX/1500))  //文字大小
//     fill("#d9ed92");  //設定顏色
//     textWidth(50)
//     text("早安",mouseX,mouseY)  //顯示文字
//     translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
//     scale(1, -1);  //上下翻轉
//     for(k=1;k<6;k++){
//     for (let i = 0; i < points.length-1; i++) {
//       line((points[i][0]*(mouseX/1000))*k, (points[i][1]*(mouseX/1000))*k, (points[i+1][0]*(mouseX/1000))*k, (points[i+1][1]*(mouseX/1000))*k);
//     }
//     line((points[points.length-1][0]*(mouseX/1000))*k, (points[points.length-1][1]*(mouseX/1000))*k, (points[0][0]*(mouseX/1000))*k, (points[0][1]*(mouseX/1000))*k); //把最後一點與第一點的連線

//   }
// }

 


//   function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
//     const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//     gradient.addColorStop(0, c1);
//     gradient.addColorStop(1, c2);
//     ctx.strokeStyle = gradient;

//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
//   }
var circles =[];



function setup() {
        createCanvas(500,500)
var pro = 0;
        while (circles.length<500) {

          circle= {
            x:random(width),
            y: random(height),
            r: random(25)
          }

          var overlap = false;
          for (var j = 0; j < circles.length; j++) {
            var other = circles[j]
              d = dist(circle.x,circle.y,other.x,other.y)
              if (d < circle.r+other.r) {
                overlap = true;
                break;  
              }
          }
          if (!overlap) {
            circles.push(circle)
          }
          pro++;
          if (pro>1000) {
            break;
          }

        }


        for (var d = 0; d < circles.length; d++) {
          let c = circles[d]
          fill(100,200,5)
          var r = 18;
          console.log('obj');
            ellipse(c.x,c.y,c.r*2,c.r*2)

        }
}


function draw() {



}



// let gravity = 0;
// let hig = 235;
// let pos  = 0;
// let r=1;
//
// var s;
// function setup() {
//   createCanvas(400,300)
// //   angleMode(DEGREES)
// // s = new Rak(100,100);
//
// for (var i = 0; i < 10; i++) {
//   ellipse(150,200,30,30)
// }
//
//
//  }
//
//
// let angle = 0;
// let x=0;
// let y=500;
// let scax=2;
//
//
// function draw() {
//   background(0)
//
//
// //
// // s.up()
// // pos = s.sh()
//
//
//
//
//
// //   push()
// // translate(x,250)
// //
// // //scale(mouseX/100)
// //
// //
// //   rotate(angle)
// //    stroke(120,100,140);
// //  rect(0,0,100,200)
// //  rectMode(CENTER)
// // fill(100,200,52)
// // x+=3
// // if (x>=500) {
// //   x=x%3;
// // }
// //
// //
// //   fill(100,200,300)
// //   pop()
// //   push()
// // //  scale(mouseX/100)
// //   translate(y,250)
// //   rotate(-angle *3)
// //    stroke(200,100,140);
// //
// //   rect(0,0,100,50)
// //   rectMode(CENTER)
// //   strokeWeight(10)
// //   y-=6
// //   if (y<=0) {
// //     y=500-(y%6)
// //   }
// //
// // angle+=-1;
// //
// // pop()
// // stroke(200,100,140);
// // translate(300,250)
// //
// // fill(255)
// // arc(0,gravity,50,50,80,80)
// // console.log(gravity);
// //
// // if (r) {
// //   gravity+=5;
// //   if (gravity==235) {
// //
// //     if (pos == 235) {
// //
// //
// //     }
// //
// //   r =0;
// //
// //   pos+=10;
// //
// //   }
// // }
// // else {
// //
// //   if (gravity<=pos) {
// //     r=1;
// //
// //     gravity = pos;
// //   }
// //   else {
// //     if (gravity>=235 && pos >=235) {
// //
// //     }
// //     else {
// //       gravity-=5;
// //     }
// //   }
// // }
// }

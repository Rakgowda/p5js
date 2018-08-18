var points=[];
function setup() {
  var c  = createCanvas(500,500)
  var b = createButton('click')
  b.mouseClicked(cl)

  c.mouseClicked(countPoint)
  var d = createButton('draw line')
d.mouseClicked(lineDraw)


}

var reached = []
 var unreached = points;
function lineDraw() {
  console.log(points);
  strokeWeight(5)
  noFill();

// for (var i = 0; i < points.length; i++) {
//   unreached.push(points[i])
// }

reached.push(unreached[0])
unreached.splice(unreached.indexOf(unreached[0]),1)




console.log('unreached length' + unreached.length);
while (unreached.length > 0) {
  var pos = 0;
var min = 10000;
  for (var i = 0; i < unreached.length ; i++) {
    var len = reached.length;
    var d = dist(reached[len-1].x,reached[len-1].y,unreached[i].x,unreached[i].y)
    if (d < min) {

      pos =i;


        min = d;


    }


  }

  console.log(pos);
  console.log(unreached[pos]);
  reached.push(unreached[pos])
  unreached.splice(unreached.indexOf(unreached[pos]),1)


}


console.log(reached);

for (var i = 0; i < reached.length - 1; i++) {
  var v1 = reached[i]
  var v2 = reached[i+1]
  strokeJoin(MITER);
  console.log('line');

  line(v1.x,v1.y,v2.x,v2.y,)

      createP(i).position((v1.x+v2.x)/2 + 10,(v1.y+v2.y)/2).size(30)


}



}
function cl() {
  console.log(points);
}

function countPoint() {
  console.log('calling countpoint');
  push()
  strokeWeight(20)
  fill(0)
point(mouseX,mouseY);

    var pt = {
      x:mouseX,
      y:mouseY
    }



var con = 1;

    for (var i = 0; i < points.length; i++) {
      if (dist(pt.x,pt.y,points[i].x,points[i].y)<=20) {
        con = 0;
        break;
      }
    }
    if (con) {
      points.push(pt)
    }


}

function draw() {
fill(255, 204, 0);


}

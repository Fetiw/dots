import filter from 'lodash/filter';
import random from 'lodash/random';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var n = 5000;
var dots = [];


function dotsCreate() {
  dots = lifeDots(dots);
  ctx.clearRect(0, 0, width, height);
  dots.forEach((dot, i) => {
    var {x,y,radius,color} = dot;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    dots[i].lifeTime--;
  });
  requestAnimationFrame(dotsCreate);
}

function lifeDots(dots) {
  dots = dots && dots.length ? filter(dots, 'lifeTime') : [];

  for(var j = 0; j < n - dots.length; j++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    var radius = Math.random() *10;
    var color = 'hsl('+ 360*Math.random() +',70%,50%)';
    dots.push({x, y, radius, color, lifeTime: random(1, 25)});
  }

  return dots;
}

dotsCreate();
lifeDots();
// {x: 1122.4812887342493, y: 376.6529325027235, radius: 9.089471110512694, color: "hsl(

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "Grey";
ctx.lineWidth = 5;
ctx.rect(125, 143, 430, 200)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "Black";
ctx.lineWidth = 5;
ctx.arc(345, 200, 50, 0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "Red";
ctx.lineWidth = 5;
ctx.arc(480, 200, 50, 0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth = 5;
ctx.arc(215, 200, 50, 0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth = 5;
ctx.arc(280, 250, 50, 0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Yellow";
ctx.lineWidth = 5;
ctx.arc(410, 250, 50, 0,2 * Math.PI)
ctx.stroke();
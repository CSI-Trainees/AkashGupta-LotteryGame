var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var mouse = {
    x:undefined,
    y:undefined
};
var width = window.innerWidth;
var height = window.innerHeight;
window.addEventListener("mousemove",function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
   console.log(mouse);
});
function LineMove(x,y)
{
    c.beginPath();
    c.moveTo(0,height);
    c.lineTo(x,y);
    c.strokeStyle = "white";
    c.lineTo(width,height);
    c.stroke();
}
function animate()
{
    c.clearRect(0,0,width,height);
    requestAnimationFrame(animate);
    LineMove(mouse.x,mouse.y);
}
animate();
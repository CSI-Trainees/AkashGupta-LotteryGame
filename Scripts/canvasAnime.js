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
var colorArray = ["#334752","#46B39D","#F0CA4D","#E37332","#DE4F3C"];
function circle (x,y,radius,dx,dy)
{
   this.x = x;
   this.y = y;
   this.radius = radius;
   this.dx =dx;
   this.dy=dy;
   this.color = colorArray[Math.floor(Math.random()*5)];
   this.minRadius = (Math.random() * 20)+2;
   this.draw = function()
   {
       c.beginPath();
       c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
       c.fillStyle = this.color;
       c.stroke();
       c.fill();
   }
   this.update = function()
   {
       if(this.x + this.radius >= width || this.x-this.radius < 0)
       {
          this.dx = -this.dx;
       }
       if(this.y + this.radius >= height || this.y-this.radius < 0)
       {
          this.dy = -this.dy;
       }
       this.x += this.dx;
       this.y += this.dy;

       if((mouse.x - this.x < 50 && mouse.x -this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50))
       {
           if(this.radius < 30)
           {
               this.radius += 1;
           }
       }else if (this.radius > this.minRadius)
       {
           this.radius -= 1 ;
       }
       this.draw();
   }
}
var array = new Array();

for(var i= 0 ;i<500;i++)
{
     var randr =   (Math.random()*20)+1;
     var ranx  = (Math.random()*(width - randr *2))+randr;
     var rany  = (Math.random()*(height - randr *2))+randr;
     var randx = Math.random() * 2 +1;  
     var randy = Math.random() * 2 +1;
     array.push(new circle(ranx,rany,randr,randx,randy));
}
function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,width,
        height);
    for(let i =0 ; i<500 ; i++)
    {
        array[i].update();
    }
}
animate();
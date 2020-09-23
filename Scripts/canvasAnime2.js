var canvas1 = document.querySelector("#SecondAnime");
canvas1.width = width;
canvas1.height = height;
var c1 = canvas1.getContext('2d');
function Motioncircle (x,y,Circleradius,velocity,OrbitRadius,color)
{
   this.x = x;
   this.y = y;
   this.radius = Circleradius;
   this.OrbitRadius = OrbitRadius;
   this.velocity = velocity;
   this.radian =0;
   this.color = color
   this.minRadius = (Math.random() * 20)+2;
   this.draw = function()
   {
       c1.beginPath();
       c1.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
       c1.fillStyle = this.color;
       c1.shadowColor = this.color;
       c1.shadowOffsetX = 0;
       c1.shadowOffsetX = 0;
       c1.shadowBlur = 20;
       c1.stroke();
       c1.fill();
   }
   this.update = function()
   {
        this.radian += this.velocity;
        this.x = x +   Math.cos(this.radian) * this.OrbitRadius;
        this.y =  y + Math.sin(this.radian) * this.OrbitRadius;
        this.draw();
   }
}
/*var Cir = new Motioncircle(width/2,height/2-100,20,0.05,2);*/
var SystemArray = [new Motioncircle(width/2,height/2,40,0,0,"#F0CA4D") /*Mercury*/ 
,new Motioncircle(width/2,height/2,5,0.06,50,"#DE4F3C") /*Mercury*/ ,
new Motioncircle(width/2,height/2,10,0.04,80,"#334752") /*Venus*/,
new Motioncircle(width/2,height/2,12,0.03,120,"#46B39D") /*Earth*/,
new Motioncircle(width/2,height/2,11,0.028,160,"#DE4F3C") /*Mars*/,
new Motioncircle(width/2,height/2,25,0.024,220,"#E37332") /*Jupiter*/,
new Motioncircle(width/2,height/2,22,0.022,280,"#334752") /*Some Random gas giant*/];

function animateSystem()
{
    requestAnimationFrame(animateSystem);
    c1.clearRect(0,0,width,
        height);
    for(var i =0 ; i<SystemArray.length ;i++)
    {
        SystemArray[i].update();
    }
}
animateSystem();
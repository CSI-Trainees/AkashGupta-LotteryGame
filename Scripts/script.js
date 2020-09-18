function GenRand()
{
 return Math.floor((Math.random()*10));
}
function ins()
{
   for(let i =0 ; i<10 ; i++)
   {
       $(".buttons").append("<input class=\"butstyle\" value="+ i +" type = \"button\"></input>");
   }  
}

 ins();

 $("input:button").click(function()
    {
        let inp = $(this).val();
        ValAppend(inp);
    }
   );

function appdiv(Val)
{
   $(".bruhh").append("<p>"+Val+"</p>");
}

let RandomArray = new Array(GenRand(),GenRand(),GenRand());
let InputArray = new Array(10,10,10);
let Input1 = false;
let Input2 = false;
let Input3 = false;
let points = 0;
console.log(RandomArray)
function CompArray(value,index,array)
{
  if(InputArray[index] == value )
  {
      points =  points+1;
  }
}

function ValAppend(_inp)
{
    if(Input1 == false)
    {
        InputArray[0] = _inp;
        appdiv(InputArray[0]);
        Input1 = true;
        return;        
    }
    if(Input2 == false)
    {
        InputArray[1] = _inp;
        appdiv(InputArray[1]);
        Input2 = true;
        return;        
    }
    if(Input3 == false)
    {
        InputArray[2] = _inp;
        appdiv(InputArray[2]);
        Input3 = true;        
    }
    if(Input1 ==  true && Input2 == true && Input3 == true)
    {
            RandomArray.forEach(CompArray);
            switch(points)
            {
                case 0 : alert("better luck next time");break;
                case 1 : alert("Congrats for winning $10");break;
                case 2 : alert("Congrats for winning $20");break;
                case 3 : alert("Congrats for winning $30");break;
            }
            return;  
    }
}
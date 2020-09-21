function GenRand()
{
 return Math.floor((Math.random()*10)+1);
}
function ins()
{
   for(let i =1 ; i<=9 ; i++)
   {
       $(".butcontain").append("<input class=\"butstyle col-3\"  value="+ i +" type = \"button\"></input>");
   }  
}

 ins();

 $("input:button").click(function()
    {
        let inp = $(this).val();
        ValAppend(inp);
    }
   );

function appdiv(Val,el)
{
   el.text(Val);
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
let flag = 0;
function ValAppend(_inp)
{
    if(Input1 == false)
    {
        InputArray[0] = _inp;
        appdiv(InputArray[0],$("#FirstDis"));
        Input1 = true;
        return;        
    }
    if(Input2 == false)
    {
        InputArray[1] = _inp;
        appdiv(InputArray[1],$("#SecondDis"));
        Input2 = true;
        return;        
    }
    if(Input3 == false)
    {
        InputArray[2] = _inp;
        appdiv(InputArray[2],$("#ThirdDis"));
        Input3 = true;        
    }
    if(Input1 ==  true && Input2 == true && Input3 == true && flag == 0)
    {
            RandomArray.forEach(CompArray);
            switch(points)
            {
                case 0 : ActiveClass("#Buck0");break;
                case 1 : ActiveClass("#Buck10");break;
                case 2 : ActiveClass("#Buck20");break;
                case 3 : ActiveClass("#Buck30");break;
            }
            flag = 1;
            return;  
    }
}
function ActiveClass(v) 
{
  $("#Lasun").removeClass("Non");
  $(v).addClass("Active");
  var el = document.getElementById("Lasun");
  el.scrollIntoView();
}


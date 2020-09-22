$(document).ready(function()
{
    var dataText = [ "Want to go to space ?","Earn some galactic bucks ?", "This is your oppurtunity" , "Play this lottery right now !"];
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.querySelector("#TypeWriter").innerHTML = text.substring(0, i+1)+'<span aria-hidden="true"></span>';
    
          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
           setTimeout(function() {
             StartTextAnimation(0);
           }, 20000);
        }
        // check if dataText[i] exists
       if (i < dataText[i].length) {
         // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
       }
     }
     StartTextAnimation(0);
});
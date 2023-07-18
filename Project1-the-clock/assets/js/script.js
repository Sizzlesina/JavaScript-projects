/** @format */
// in here we put all our code into a method that means "Document Object Metod Content Loaded":
//  you can read all about it on https://www.w3schools.com/js/js_htmldom.asp

window.addEventListener("DOMContentLoaded", () =>{
  // declaring the variables
  // declaring the tens and seconds that we want to use in the progress
  var tens = "00";
  var seconds = "00";
  var minutes = '00';
  // declaring the variables that we want to link to html file
  var tensH = document.getElementById("tens");
  var secondsH = document.getElementById("seconds");
  var start = document.getElementById("buttonStart");
  var end = document.getElementById("buttonEnd");
  var reset = document.getElementById("buttonReset");
  var minutesH = document.getElementById('minutes');
  var dot = document.getElementById('dot');
  var container;
  // Start Button Function
  let buttonStart = () => {
    clearInterval(container);
    container = setInterval(startTimer, 10); // in here we just call the startTimer function every 10 milliseconds => because every 0.01seconds is 10 milliseconds
  };
  // End Button Function
  let buttonEnd = () => {
    clearInterval(container);
  };
  // Reset Button Function
  let buttonReset = () => {
    clearInterval(container);
    tens = "00";
    seconds = "00";
    minutes = "00";
    tensH.innerHTML = tens;
    secondsH.innerHTML = seconds;
    minutesH.innerHTML = minutes;
    if(minutesH.classList.contains("show") && dot.classList.contains("show"))
    {
      minutesH.classList.remove("show");
      minutesH.classList.add("d-none");
      dot.classList.remove("show");
      dot.classList.add("d-none");
    }
  };
  // All Onclick Buttons
  start.addEventListener("click", buttonStart);
  end.addEventListener("click", buttonEnd);
  reset.addEventListener("click", buttonReset);
  // Note: for every button we need to clear the container variable when clicking it

  // startTimer Function

  let startTimer = () => {
    tens++;
    if (tens <= 9) {
      tensH.innerHTML = "0" + tens;
    } // an if for : 00:01 to 00:09
    if (tens > 9) {
      tensH.innerHTML = tens;
    } // an if for : 00:10 to 00:99
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      secondsH.innerHTML = "0" + seconds;
      tens = 0;
      tensH.innerHTML = "0" + tens;
    } // an if for : 00:99 to 09:99
    if (seconds > 9) {
      secondsH.innerHTML = seconds; // an if for : 10:00 to infinity
    }
    if(seconds > 59)
    {
      if(minutesH.classList.contains("d-none") && dot.classList.contains("d-none"))
      {
        minutesH.classList.remove("d-none")
        minutesH.classList.add("show")
        dot.classList.remove("d-none");
        dot.classList.add("show");
      }
      console.log("minutes");
      seconds = 0;
      secondsH.innerHTML = "0" + seconds;
      minutes++;
      minutesH.innerHTML = "0" + minutes;
    }
    if(minutes>9)
    {
      minutesH.innerHTML = minutes;
    }
  };
}) 

// The cornometer



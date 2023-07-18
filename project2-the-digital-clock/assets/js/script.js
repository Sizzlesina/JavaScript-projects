let setter = () =>
{
  let date = new Date(); // in here we just create a new date based on our system timezone then we can call methods on it
  let h = date.getHours(); // calling the hour method 0-23
  let m = date.getMinutes(); // calling the minute method 0-59  
  let s = date.getSeconds(); // calling the second method  0-59
  // Note : in case if we need month and year we can use date.getMonth() and date.getFullYear() methods
  let session = "AM"; // in here we just need an variable for "AM" and "PM"
  
  if(h==0) 
  {
    h=12;
  }
  // 0-12
  if(h > 12)
  {
    h -= 12;
    session = "PM";
  }
// 12-24
  h = (h<10)?"0"+h : h; // if hour is less than 10 return 0 + hour else return hour
  m = (m<10)?"0"+m: m; //if minute is less than 10 return 0 + minute else return minute
  s = (s<10)?"0"+s : s; //if second is less than 10 return 0 + second else return second

  return{h:h, m:m , s:s , session:session};
}

let showTime = () =>
{
  var timeObj = setter();
  var time = timeObj.h + ":" + timeObj.m + ":" + timeObj.s + " "+ timeObj.session;
  document.getElementById('myClockDisplay').innerText = time; // we set the inner text of the html to time
  document.getElementById('myClockDisplay').textContent = time; //  we set the text content of the html div to time
  // we have a question here: whats the diffrence between innerText and textContent?
  // Answer: the innerText have a same output as textContent but if we had an hidden text it will return that also 
  setTimeout(showTime,1000); // showTime is a function that i want to execute after 1 second
}
showTime();


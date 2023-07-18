//Wrap code in an IIFE => Immediately Invoked Function Expression
(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num; // in here using event.target.dataset.value we just select all the data-num tags
      screen.value += value; // then store it in the screen and return it
    })
  });
  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      let answer = eval(screen.value); // evak is a constructor function that evaculate the string numbers and return the result
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
  })
 
})(); //end IIFE


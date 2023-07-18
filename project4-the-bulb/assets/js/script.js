// the buttons

const bulb = document.getElementById("bulb");


let bulbButton =  () =>
{
  if(bulb.classList.contains("bulbOff"))
  {
    bulb.classList.remove("bulbOff");
    bulb.classList.add("bulbOn");
  }
  else
  {
    bulb.classList.remove("bulbOn");
    bulb.classList.add("bulbOff")
  }
}
bulb.addEventListener("click",bulbButton);


// im gonna get inspired by this piece of code here
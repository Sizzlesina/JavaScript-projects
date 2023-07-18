/** @format */
const result = document.getElementById("result");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (!height || height < 0 || isNaN(height)) {
    result.textContent = "Please enter a valid height";
  } else if (!weight || weight < 0 || isNaN(weight)) {
    result.textContent = "Please enter a valid weight";
  } else {
    const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);

    result.textContent = `${bmi}`;
  }
});

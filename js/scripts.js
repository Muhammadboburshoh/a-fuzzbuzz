var fuzz = 3;
var buzz = 5;
var fuzzBuzz = 15;

var elForm = document.querySelector(".form");
var result = document.querySelector(".result")

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()

  var inputNumber= parseFloat(elForm.querySelector(".number-input").value.trim(),10);

  if (inputNumber < 0) {
    alert("Iltimos musbat son kiriting :)")
    return;
  }

  if (inputNumber ==="" || isNaN(inputNumber)) {
    alert("Iltimos son kiriting :)")
    return;
  }

  if (inputNumber % fuzzBuzz === 0) {
    result.textContent = "FuzzBuzz";
  }
  else if(inputNumber % buzz === 0) {
    result.textContent = "Buzz";
  }
  else if( inputNumber % fuzz === 0){
    result.textContent = "Fuzz";
  }
  else {
    result.textContent = inputNumber;
  }
})



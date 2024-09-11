function calculate() {
  let userInput = document.getElementById("userInput");
  let userValue = parseInt(userInput.value);
  const unit1 = document.getElementById("unit1").value;
  const unit2 = document.getElementById("unit2").value;
  let resultTxt = document.querySelector("#result");
  let result;
  const cmToPx = 37.7952755906;
  const pixel = 0.0264583333;
  let statement;

  if (userInput.value == "") {
    alert("You need to input a value");
  } else if ((userInput.value = !"" && unit1 == "cm" && unit2 == "cm")) {
    let statement = userValue + " cm";
    resultTxt.innerHTML = userValue + "  cm => " + statement;
    clearInput();
  } else if (userInput.value != "" && unit1 == "cm" && unit2 == "px") {
    result = Math.round(userValue * cmToPx);
    let statement = result + " px";
    resultTxt.innerHTML = userValue + "  cm => " + statement;
    clearInput();
  } else if (userInput != "" && unit1 == "cm" && unit2 == "em") {
    let defaultPx = parseInt(prompt("What is the defualt Value of em"));
    result = Math.round((userValue * cmToPx) / defaultPx);
    let statement = result + " em";
    resultTxt.innerHTML = userValue + "  cm => " + statement;
    clearInput();
  } else if (userInput != "" && unit1 == "cm" && unit2 == "rem") {
    //   console.log("Hello");
    let defaultPx = parseInt(prompt("Wht is the default value of rem"));
    result = Math.round((userValue * cmToPx) / defaultPx);
    let statement = result + " rem";
    resultTxt.innerHTML = userValue + "  cm => " + statement;
    clearInput();
  } else if (userInput.value != "" && unit1 == "px" && unit2 == "cm") {
    result = Math.round(pixel * userValue);
    let statement = result + " cm";
    resultTxt.innerHTML = userValue + "  px => " + statement;
    clearInput();
  } else if (userInput.value != "" && unit1 == "px" && unit2 == "px") {
    let statement = userValue + " px";
    resultTxt.innerHTML = userValue + "  px => " + statement;
    clearInput();
  } else if (userInput != "" && unit1 == "px" && unit2 == "em") {
    let defaultPx = parseInt(prompt("What is the defualt Value of em"));
    result = Math.round((1 / defaultPx) * userValue);
    let statement = result + " em";
    resultTxt.innerHTML = userValue + "  px => " + statement;
    clearInput();
  } else if (userInput != "" && unit1 == "px" && unit2 == "rem") {
    let defaultPx = parseInt(prompt("What is the defualt Value of em"));
    result = Math.round((1 / defaultPx) * userValue);
    let statement = result + " rem";
    resultTxt.innerHTML = userValue + "  px => " + statement;
    clearInput();
  }
}
function clearInput() {
  userInput.value = "";
}

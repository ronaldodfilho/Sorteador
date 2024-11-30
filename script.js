
//elementos HTML
const Input1 = document.querySelector("#input1");
const Input2 = document.querySelector("#input2");
const button = document.querySelector("button");
const SelectedNumber = document.querySelector("#number")
const ShowTxt = document.querySelector("#show-results")

//função que sorteia os números
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//evento click no botão
button.addEventListener("click", function () {

  let min = parseInt(Input1.value); //igualando as variáveis ao valor do input
  let max = parseInt(Input2.value);

  if (max <= min) {
    alert("O valor máximo não pode ser MENOR ou IGUAL ao mínimo")
  }

  else {

  let result = getRandomNumber(min, max);
  SelectedNumber.textContent = result; //exibindo resultado HTML
  ShowTxt.style.display = "flex"; //exibindp resultado no CSS
  }
})

//enter no input2 da o resultado
Input2.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    button.click();
  }
})

//enter no input1 leva para o input2
Input1.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    Input2.focus();
  }
})
//Prendo il display dove stampare i numeri
const result = document.querySelector(".result");
console.log(result);

//prendo tutti i numeri
const number = document.querySelectorAll(".number");
console.log(number);

for (let i = 0; i < number.length; i++) {
  console.log(number[i].innerHTML);
  let btnNumb = number[i];
  btnNumb.addEventListener("click", function () {
    console.log(this.innerHTML);
    result.textContent += this.textContent;
  });
}

//____________________

const operators = document.querySelectorAll(".op");
console.log(operators);

for (let i = 0; i < operators.length; i++ ){
    console.log(operators[i].innerHTML);
}

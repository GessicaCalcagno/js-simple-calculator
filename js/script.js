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
    currentOp += this.textContent;
  });
}

//____________________OPERATORS_________________________

const operators = document.querySelectorAll(".op");
console.log(operators);

let currentOp = "";
let operator = "";

for (let i = 0; i < operators.length; i++) {
  console.log(operators[i].innerHTML);
  let btnOp = operators[i];

  btnOp.addEventListener("click", function () {
    console.log(this.innerHTML);

    //Se non è una stringa vuota allora posso fare le operazini
    if (currentOp !== "") {
      switch (this.textContent) {
        case "+":
        case "-":
        case "x":
        case "÷":
          operator = this.textContent;
          result.textContent = "";
          break;
      }
    }
  });
}

//Prendo il display dove stampare i numeri
let displayresult = document.querySelector(".result");
console.log(displayresult);

//prendo tutti i numeri
const number = document.querySelectorAll(".number");
console.log(number, typeof number);

//Stampo in cosole la lista dei numeri e controllo che sia stringa vuota se inserisco 0 o gli operatori
for (let i = 0; i < number.length; i++) {
  console.log(number[i].innerHTML, typeof number);

  let btnNumb = number[i];

  btnNumb.addEventListener("click", function () {
    // console.log(this.innerHTML, typeof this);

    if (
      displayresult.innerHTML === "0" ||
      displayresult.innerHTML === "+" ||
      displayresult.innerHTML === "-" ||
      displayresult.innerHTML === "x" ||
      displayresult.innerHTML === "÷"
    ) {
      displayresult.innerHTML = "";
    }
    displayresult.textContent += parseInt(this.textContent);
    console.log(parseInt(this.textContent));
  });
}

//____________________OPERATORS_________________________

//Prendo tuti gli operatori
const operators = document.querySelectorAll(".op");
console.log(operators);

// Variabili per il primo numero che scrivo e l'operatore
let firstNumber = "";
let operator = "";

for (let i = 0; i < operators.length; i++) {
  console.log(operators[i].innerHTML);
  let btnOp = operators[i];

  btnOp.addEventListener("click", function () {
    console.log(btnOp.innerHTML);

    // salvo operatore cliccato in una variabile
    if (this.innerHTML === "+") {
      operator = "+";
    } else if (this.innerHTML === "-") {
      operator = "-";
    } else if (this.innerHTML === "x") {
      operator = "x";
    } else if (this.innerHTML === "÷") {
      operator = "÷";
    }
    operator = this.textContent;
    // Salvo il primo numero selezionato
    firstNumber = parseInt(displayresult.textContent);
    // Resetto il numero visualizzato in alto
    displayresult.textContent = "";
    console.log(firstNumber);
  });
}

//__________________EQUAL____________________

// Prendo il pulsante "="
const equalBtn = document.querySelector(".equal");

// Aggiungo un event listener per il click sul pulsante "="
equalBtn.addEventListener("click", function () {
  // Salvo il secondo operando
  let secondOperand = displayresult.textContent;
  let finalResult;

  // Effettuo il calcolo corretto in base all'operatore selezionato
  switch (operator) {
    case "+":
      finalResult = parseInt(firstNumber) + parseInt(secondOperand);
      break;
    case "-":
      finalResult = parseInt(firstNumber) - parseInt(secondOperand);
      break;
    case "x":
      finalResult = parseInt(firstNumber) * parseInt(secondOperand);
      break;
    case "÷":
      finalResult = parseInt(firstNumber) / parseInt(secondOperand);
      break;
    default:
      finalResult = " ";
  }

  // Vedo il risultato nel display ed in console
  displayresult.textContent = finalResult;
  console.log(finalResult);
});

//_________________ Canceled___________
const resetButton = document.querySelector(".delete");
resetButton.addEventListener("click", function () {
  displayresult.textContent = "0";
});

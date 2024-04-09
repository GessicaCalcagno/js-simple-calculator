//_______________DISPLAY__________________
//Prendo il display dove stampare i numeri
let displayresult = document.querySelector(".result");
console.log(displayresult);


//_________________NUMBERS_______________________
//Prendo tutti i numeri con la classe
const number = document.querySelectorAll(".number");
console.log(number, typeof number);

//Stampo in console la lista dei numeri con il ciclo for [i]
//Aggiungo parseInt per assicurarmi che prenda solo numeri
for (let i = 0; i < number.length; i++) {
  console.log(number[i].innerHTML, typeof number); // Object (Elemnto HTML)

  let btnNumb = number[i];

  btnNumb.addEventListener("click", function () {
    //Inserisco un controllo per non stampare in display gli operatori e lo zero
    displayresult.textContent += this.textContent;
    displayresult.textContent = parseInt(displayresult.textContent);
  });
}


//____________________OPERATORS_________________________

//Prendo tutti gli operatori
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

    operator = this.textContent;
    // Salvo il primo numero selezionato e mi assicuro che sia un numero
    firstNumber = parseInt(displayresult.textContent);

    // Resetto il numero visualizzato nel display appena clicco gli operatori
    displayresult.textContent = "0";
  });
}

//__________________EQUAL____________________

// Prendo il pulsante "="
const equalBtn = document.querySelector(".equal");

// Aggiungo un event listener per il click sul pulsante "="
equalBtn.addEventListener("click", function () {
  // Salvo il secondo operando
  let secondOperand = parseInt(displayresult.textContent);
  let finalResult;

  // Effettuo il calcolo corretto FINALMENTE in base all'operatore selezionato
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
      //Bonus: aggiungo che se cerco di dividere per 0 mi da error
      if (parseInt(secondOperand) === 0) {
        finalResult = "Impossible";
      } else {
        finalResult = parseInt(firstNumber) / parseInt(secondOperand);
      }
      break;
    default:
      finalResult = null;
  }

  // Vedo il risultato nel display ed in console
  displayresult.textContent = finalResult;

  console.log(firstNumber);
  console.log(operator);
  console.log(secondOperand);
  console.log(finalResult);
});

//____________ Canceled___________
const resetButton = document.querySelector(".delete");
resetButton.addEventListener("click", function () {
  //reset display
  displayresult.textContent = "0";
  //reset primo numero dell'operazione
  firstNumber = "0";
  //reset secondo numero dell'operazione
  secondOperand = null;
  //reset operatori
  operator = null;
});



// const allBtns = [...document.getElementsByClassName("btn")];
// console.log(allBtns);

// let strToDisplay = ""

// const displayElm = document.querySelector(".result");
// const display = (str) => {
//     displayElm.innerText = str || "0.00";
// }

// const operators = ["/", "+", "*", "-", "."]

// allBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const val = btn.innerText;

//         if(val === 'AC'){
//             strToDisplay = "";
//             display(strToDisplay);
//             return;
//         }

//         if(val === "C"){
//             strToDisplay = strToDisplay.slice(0, -1);
//             return display(strToDisplay);
//         }

//         if(val === "="){
//             const lastChar = strToDisplay[strToDisplay.length - 1];

//             if (operators.includes(lastChar)) {}
//                 strToDisplay = strToDisplay.slice(0, -1);
//             return total();
//         }

//         if (operators.includes(val)) {
//             const lastChar = strToDisplay[strToDisplay.length - 1];

//             if (operators.includes(lastChar)) {}
//                 strToDisplay = strToDisplay.slice(0, -1);
//         }

//         strToDisplay = strToDisplay + val;

//         display(strToDisplay);
//     });
// });


// const total = () => {
//     const ttl = eval(strToDisplay)
//     display(ttl);
//     strToDisplay = ttl.toString();
// }


const allBtns = [...document.getElementsByClassName("btn")];

let strToDisplay = "";

const displaElm = document.querySelector(".result");
console.log(displaElm);

const operators = ["%", "/", "*", "+", "-", "."];

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      disply(strToDisplay);
      return;
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return disply(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    strToDisplay += val;
    disply(strToDisplay);
  });
});

const disply = (str) => {
  displaElm.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  disply(ttl);
  strToDisplay = ttl.toString();
};
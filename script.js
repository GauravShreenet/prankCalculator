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
// console.log(displaElm);

const audio = new Audio("./aaa.wav")

const operators = ["%", "/", "*", "+", "-"];

let lastOperator = "";
allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displaElm.style.background = "";
    displaElm.style.color = "";
    displaElm.classList.remove("prank")
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
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === "."){

      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);
      console.log(lastNumberSet, lastOperator);
      console.log(indexOfLastOperator);
      if(lastNumberSet.includes(".")){
        return;
      }

      if (!lastOperator && strToDisplay.includes(".")){
        return;
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

  const extraVal = randomNumber();
  if(extraVal){
    audio.play();
    displaElm.style.background = "red";
    displaElm.style.color = "white";
    displaElm.classList.add("prank")
  }

  const ttl = eval(strToDisplay);
  disply(ttl);
  strToDisplay = ttl.toString();
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);

  return num< 3 ? num : 0;
}
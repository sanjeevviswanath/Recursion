import "./style.css";
// REVERSE STRING USING RECURSION - START
// const reverseString = (inputString: string): string => {
//   if (inputString == "") return "";

//   return reverseString(inputString.slice(1)) + inputString[0];
// };
// const inputStr = "Sanjeev Viswanath";

// console.log("Input string: ", inputStr[0]);
// console.log("hello".slice(1));
// console.log("Reverse of {inputStr} : ", reverseString(inputStr));
// REVERSE STRING USING RECURSION - START

// REVERSE STRING WITHOUT RECURSION - START
const reverseString = (inputString: string): string => {
  return inputString.split("").reverse().join("");
};

console.log("Reverse of Sanjeev : ", reverseString("Sanjeev Viswanath"));
// REVERSE STRING WITHOUT RECURSION - END
// CHECK FOR PALANDROM - START

// let inputPalString = "Racecar";

// const checkPalandrom = (inputPalString: string): boolean => {
// Logic:
//base case: if the length of the inpt string is 1 or if the input string is empty string, then return True.
//implement base case
//   if (inputPalString.length === 0 || inputPalString.length === 1) {
//     return true;
//   }

// main logic for the smallest problem to solve - where length of string = 2
//implement main logic for palandrom

//   if (
//     inputPalString[0].toLowerCase ==
//     inputPalString[inputPalString.length - 1].toLowerCase
//   ) {
//     return checkPalandrom(inputPalString.slice(1, inputPalString.length - 1));
//   }

//   return false;
// };
// console.log(
//   "The string palandrom check returns:",
//   inputPalString,
//   checkPalandrom(inputPalString)
// );
// CHECK FOR PALANDROM WITH RECURSION - END
// CHECK FOR PALANDROM WITHOUT RECURSION - START

const checkPalandrom = (inputString: string): boolean => {
  return (
    inputString.toLowerCase() ===
    inputString.toLowerCase().split("").reverse().join("")
  );
};
console.log(
  "check palandrom for word 'Malayalam'",
  checkPalandrom("Malayalam")
);

// CHECK FOR PALANDROM WITHOUT RECURSION - START
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Recursion Tutorial</h1>
  <div>
    <h2>Reverse String</h2>
    <p></p>

  </div>
  </div>
`;

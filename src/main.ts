import "./style.css";
// REVERSE STRING USING RECURSION - START
const reverseString = (inputString: string): string => {
  if (inputString == "") return "";

  return reverseString(inputString.slice(1)) + inputString[0];
};
const inputStr = "Sanjeev Viswanath";

console.log("Input string: ", inputStr[0]);
console.log("hello".slice(1));
console.log("Reverse of {inputStr} : ", reverseString(inputStr));
// REVERSE STRING USING RECURSION - START

// CHECK FOR PALANDROM - START

let inputPalString = "Racecar";

const checkPalandrom = (inputPalString: string): boolean => {
  // Logic:
  //base case: if the length of the inpt string is 1 or if the input string is empty string, then return True.
  //TODO: implement base case
  if (inputPalString.length === 0 || inputPalString.length === 1) {
    return true;
  }

  // main logic for the smallest problem to solve - where length of string = 2
  //implement main logic for palandrom

  if (
    inputPalString[0].toLowerCase ==
    inputPalString[inputPalString.length - 1].toLowerCase
  ) {
    return checkPalandrom(inputPalString.slice(1, inputPalString.length - 1));
  }

  return false;
};
console.log(
  "The string palandrom check returns:",
  inputPalString,
  checkPalandrom(inputPalString)
);
// CHECK FOR PALANDROM - END

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Recursion Tutorial</h1>
  <div>
    <h2>Reverse String</h2>
    <p>${reverseString(inputStr)}</p>

  </div>
  </div>
`;

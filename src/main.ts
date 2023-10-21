import "./style.css";

const reverseString = (inputString: string): string => {
  if (inputString == "") return "";

  return reverseString(inputString.slice(1)) + inputString[0];
};
const inputStr = "Sanjeev Viswanath";

console.log("Input string: ", inputStr[0]);
console.log("hello".slice(1));
console.log("Reverse of {inputStr} : ", reverseString(inputStr));
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Recursion Tutorial</h1>
  <div>
    <h2>Reverse String</h2>
    <p>${reverseString(inputStr)}</p>

  </div>
  </div>
`;

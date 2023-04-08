import add from "./add.js";
import inquirer from "inquirer";

const prompt = await inquirer.prompt([
  {
    type: "number",
    message: "Enter First Number:",
    name: "n1",
  },
  {
    type: "number",
    message: "Enter Second Number:",
    name: "n2",
  },
]);

const number1 = prompt.n1;
const number2 = prompt.n2;

const result = add(number1, number2);
console.log(result);

#!/usr/bin/env node
import inquirer from "inquirer";

const operators = ["+", "-", "*", "/"];

const questions = [
  {
    type: "input",
    name: "num1",
    message: "Enter the first number:",
    validate: (value : any) => {
      const num = parseInt(value);
      if (!num) {
        return "Please enter a valid number.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "operator",
    message: "Select an operator:",
    choices: operators,
  },
  {
    type: "input",
    name: "num2",
    message: "Enter the second number:",
    validate: (value : any) => {
      const num = parseInt(value);
      if (!num) {
        return "Please enter a valid number.";
      }
      return true;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  const num1 = parseInt(answers.num1);
  const num2 = parseInt(answers.num2);
  const operator = answers.operator;

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  console.log(`Result: ${result}`);
});


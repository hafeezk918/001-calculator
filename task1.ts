//Write a TypeScript program that does the following:
  //  1. Declare three variables englishMarks, mathsMarks, and scienceMarks.
    //2. Use the prompt-sync library to get input from the user for each subject and assign them to respective variables.

   

    // var prompt1 = require('prompt-sync')();
    // //
    // // get input from the user.
    // //
    // var n = prompt('How many more times? ');

//let englishMarks: number;
//let mathsMarks: number;
//let scienceMarks: number;

//englishMarks = Number(prompt('80: '));
//mathsMarks = Number(prompt('100: '));
//scienceMarks = Number(prompt('85: '));


import inquirer from "inquirer";


async function getName() {

  let userName = await inquirer.prompt([{
    name:"name",
    type:"input",
    message:"Enter"
    
  }])
  console.log(userName.name)
  
}
getName()
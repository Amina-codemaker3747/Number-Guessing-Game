import inquirer from "inquirer";

const systemgeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        mesaage: "Guess the number between 1 to 10 & Write it.",
}]);

const {userGuess} = answers;
console.log(`User Guess: ${userGuess} \t Correct Answer: ${systemgeneratedNo}`);

if(userGuess === systemgeneratedNo) {
    console.log(`Correct Answer!👏 Congratulations You Win🥳`);
} else {
    console.log(`Wrong Answer!☹️ Try Again. Better Luck Next Time.`);
        
}

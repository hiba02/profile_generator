const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What music do you listen to?", (answer3) => {
      rl.question("Which meal is your favorite?", (answer4) => {
        rl.question("Which sport is your absolute favorite?", (answer5) => {
          rl.question("What is your superpower?", (answer6) => {
            console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer4} for brunch, prefers ${answer5} over any other sport, and is amazing at ${answer6}.`)
            rl.close();
          });
        });
      });
    });
  });
});
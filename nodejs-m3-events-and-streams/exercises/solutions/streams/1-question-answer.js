/*
 user process.stdin as input stream and process.stdout as output stream
 ["What is your name? ", "How old are you? ", "Where are you from? "]; use
 this array of questions. Pose this questions to user and collect answers
 into another array after all questions are answered print the questions and
 answers to stdout

 Hint:

 let inputStream = process.stdin;
 let outputStream = process.stdout;

 */


let inputStream = process.stdin;
let outputStream = process.stdout;

let questions = ["What is your name? ", "How old are you? ", "Where are you from? "];
let answers = [];
let currentQuestion = 0;

inputStream.on('data', function (chunk) {
  let inputData = chunk.toString();
  answers.push(inputData);
  if (answers.length !== questions.length) {
    askQuestion(questions[++currentQuestion]);
  } else {
    console.log("Thanks for your answers, nice talking to you!!");
    printAnswers();
    process.exit(0)
  }
});

function askQuestion(question) {
  outputStream.write(question);
}

function printAnswers() {
  for (let i = 0; i < questions.length; i++) {
    console.log(`Q${i + 1} : ${questions[i]}`);
    console.log(`A${i + 1} : ${answers[i]}`);
  }
}

askQuestion(questions[currentQuestion]);
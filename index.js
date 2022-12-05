var readlineSync = require("readline-sync");

var score = 0;
var user;

var highestScores = [
  {
    name: "Sailesh",
    score: 7,
  },

  {
    name: "Jitu",
    score: 6,
  },
];

var questionAndAnswers = [
  {
    q: "What is the leader of the Sand Village called? ",
    ans: "Kazekage"
  },
  {
    q: "Who is the Fourth Hokage? ",
    ans: "Minato"
  },
  {
    q: "Which clan did Naruto belong to? ",
    ans: "Uzumaki"
  },
  {
    q: "What is the Kekkai Genkai of the Uchiha ? ",
    ans: "Sharingan"
  },
  {
    q: "Who was called the copy ninja? ",
    ans: "Kakashi"
  },
  {
    q: "Who was the rival of Hashirama Senju? ",
    ans: "Madara"
  },
  {
    q: "What is the name of the Eight Tailed Beast ? ",
    ans: "Gyuki"
  },
]

function welcome() {
  user = readlineSync.question("Hey There, What is your name? ");
  console.log('Welcome ' + user + ' Are you a Naruto fan? Lets see how much you know about Naruto Anime!!! ')
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('Yay ' + user + ', You got this answer right!')
  }
  else {
    console.log('You got this answer wrong,Better luck on the next one!!!')
  }

  console.log("current score: ", score);
  console.log("********************")
}

function fifaGame() {
  for (let i = 0; i < questionAndAnswers.length; i++) {
    play(questionAndAnswers[i].q, questionAndAnswers[i].ans)
  }
}

function displayScore() {
  if (score <= (questionAndAnswers.length / 2)) {
    console.log('Hey ' + user + '! Your score is:' + score + ' .Better luck next time champ!');
  }
  else {
    console.log('Congrats ' + user + '! Your score is:' + score + '. You are the man!!! A True Naruto Fan!!! ')
  }

  console.log('Highest Scores')
  highestScores.map((value) => {
    console.log('Name: ' + value.name);
    console.log('Score: ' + value.score);

  })
  console.log("Check out the highest scores and if you should be there reach out to me and i'll update it.");
}

welcome();
fifaGame();
displayScore();
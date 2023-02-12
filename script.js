const timeGauge = document.getElementById("timeGauge");
let thisTime = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const Qcontainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
let shuffledQ;
let QIndex;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("we started!");
  startButton.classList.add("hide");
  shuffledQ = questions.sort(() => Math.random() - 0.5);
  QIndex = 0;
  Qcontainer.classList.remove("hide");
  nextQ();
}

function nextQ() {
  showQuestion(shuffledQ[QIndex]);
}

function showQuestion(question) {
  questionElement.innerText = questions.question;
}

function selectAnswer() {}

let questions = [
  {
    question: "Do all HTML tags have an end tag?",
    answers: [
      { text: " No, some HTML tags do not need a closing tag.", correct: true },

      {
        text: "Yes, it is very important to always put closing tags.",
        correct: false,
      },

      {
        text: "HTML is a language where you make your own rules up as you code.",
        correct: false,
      },
    ],
  },

  {
    question: "What is a marquee?",
    answers: [
      {
        text: "The marquee is a dance made up by children in Brazil.",
        correct: false,
      },

      {
        text: "The marquee HTML tag is a non-standard HTML element which is used to scroll an image or text automatically vertically or horizontally.",
        correct: true,
      },

      {
        text: "The marquee CSS tag is a non-standard CSS element which is used to scroll an image or text automatically vertically or horizontally.",
        correct: false,
      },
    ],
  },
  //   {
  //     question: "Is javascript a case sensitive language?",

  //     choiceA: "No",

  //     choiceB: "I dont know",

  //     choiceC: "yes",

  //     correct: "C",
  //   },
  //   {
  //     question: "A boolean is an HTML data type.",

  //     choiceA: "Yes of course!",

  //     choiceB: "No, It is a javascript data type.",

  //     choiceC: "It could be, who knows.",

  //     correct: "B",
  //   },
  //   {
  //     question: "What are CSS selectors?",

  //     choiceA: "Css selectors are used to set up projects on vs code.",

  //     choiceB:
  //       " Css selectors are used to select HTML elements based on their element name, id, attributes, etc.",

  //     choiceC:
  //       " CSS selectors are used to select javascript funtions based on their event listeners.",

  //     correct: "B",
  //   },
  //   {
  //     question: "How do you create a function in javascript?",

  //     choiceA: "function savannahMunn()",

  //     choiceB: " functionis savannahMunn",

  //     choiceC: "...functionsav",

  //     correct: "A",
  //   },
];

// const lastQuestion = questions.length - 1;
// let firstQuestion = 0;

// let timer;
// // set up a timer 8 minutes
// function startTimer(milliSec) {
//   timer = setInterval(function () {
//     let minutes = Math.floor(milliSec / 60000);
//     let seconds = ((milliSec % 60000) / 1000).toFixed(0);
//     let formattedSeconds = ("0" + seconds).slice(-2);
//     milliSec -= 1000;
//     thisTime.innerText = minutes + ":" + formattedSeconds;

//     if (minutes + ":" + formattedSeconds === "0:00") {
//       clearInterval(timer);
//       thisTime.innerText = "Time's up!";
//     }
//     // console.log(minutes + ":" + seconds);
//   }, 1000);
//}

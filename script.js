const timeGauge = document.getElementById("timeGauge");
let thisTime = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const Qcontainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
let shuffledQ, QIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  QIndex++;
  nextQ();
});

function startQuiz() {
  console.log("we started!");
  startButton.classList.add("hide");
  shuffledQ = questions.sort(() => Math.random() - 0.5);
  QIndex = 0;
  Qcontainer.classList.remove("hide");
  nextQ();
}

function nextQ() {
  resetState();
  showQuestion(shuffledQ[QIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButton.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQ.length > QIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

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
  {
    question: "Is javascript a case sensitive language?",
    answers: [
      { text: "No", correct: false },

      { text: "I dont know", correct: false },

      { text: "yes", correct: true },
    ],
  },
  {
    question: "A boolean is an HTML data type.",
    answers: [
      { text: "Yes of course!", correct: false },

      { text: "No, It is a javascript data type.", correct: true },

      { text: "It could be, who knows.", correct: false },
    ],
  },
  {
    question: "What are CSS selectors?",
    answers: [
      {
        text: "Css selectors are used to set up projects on vs code.",
        correct: false,
      },

      {
        text: " Css selectors are used to select HTML elements based on their element name, id, attributes, etc.",
        correct: true,
      },

      {
        text: " CSS selectors are used to select javascript funtions based on their event listeners.",
        correct: false,
      },
    ],
  },
  {
    question: "How do you create a function in javascript?",
    answers: [
      { text: "function savannahMunn()", correct: true },

      { text: " functionis savannahMunn", correct: false },

      { text: "...functionsav", correct: false },
    ],
  },
  {
    question: "What is the purpose of the This operator in JavaScript?",
    answers: [
      { text: "It can be used to create color themes.", correct: false },
      { text: "It has no purpose.", correct: false },
      {
        text: "The JavaScript this keyword refers to the object it belongs to.",
        correct: true,
      },
    ],
  },
  {
    question: " What is NaN in JavaScript?",
    answers: [
      {
        text: "Since 2 and 5 are integers, they will be added numerically.",
        correct: false,
      },
      { text: "NaN is a short form of Not a Number.", correct: true },
      {
        text: " It takes the string to be converted as its first parameter",
        correct: false,
      },
    ],
  },
];



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

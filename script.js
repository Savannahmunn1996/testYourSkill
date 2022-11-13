const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");


let questions = [

    {

        question : "Do all HTML tags have an end tag?",

        

        choiceA : "No, some HTML tags do not need a closing tag.",

        choiceB : "Yes, it is very important to always put closing tags.",

        choiceC : "HTML is a language where you make your own rules up as you code.",

        correct : "A"

    },{

        question : "What is a marquee?",

        

        choiceA : "The marquee is a dance made up by children in Brazil.",

        choiceB : "The marquee HTML tag is a non-standard HTML element which is used to scroll an image or text automatically vertically or horizontally.",

        choiceC : "The marquee CSS tag is a non-standard css element which is used to scroll an image or text automatically vertically or horizontally.",

        correct : "B"

    },{

        question : "Is javascript a case sensitive language?",

       

        choiceA : "No",

        choiceB : "I dont know",

        choiceC : "yes",

        correct : "C"

    }, {

        question : "A boolean is an HTML data type.",

      

        choiceA : "Yes of course!",

        choiceB : "No, It is a javascript data type.",

        choiceC : "It could be, who knows.",

        correct : "B"

    },{

        question : "What are CSS selectors?",

       

        choiceA : "Css selectors are used to set up projects on vs code.",

        choiceB : " Css selectors are used to select HTML elements based on their element name, id, attributes, etc.",
       
        choiceC : " CSS selectors are used to select javascript funtions based on their event listeners.",

        correct : "B"

    },{

        question : "How do you create a function in javascript?",

       

        choiceA : "function savannahMunn()",

        choiceB : " functionis savannahMunn",

        choiceC : "...functionsav",

        correct : "A"

    },

];

const lastQuestion= questions.length - 1;
let firstQuestion= 0;

function giveQuestion() {
    let q = questions[firstQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";

    

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",giveQuestion);
giveQuestion();


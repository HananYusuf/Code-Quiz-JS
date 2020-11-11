
const startButton = document.getElementById("start");
const questionsContainerElement = document.getElementById ("");
const questionElement = document.getElementById("question");
const answerButtonElement =document.getElementById("answer-buttons");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const scoreBoard = document.getElementById("score");
const scoreAmt = document.getElementById("scoreAmt");
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn")
const highscoreBoard = document.getElementById("highscoreBoard")
var timer = document.getElementById("timer");

var timeLeft = 60;
var score, currentQuestionIndex;
//creating an array of question and answer
var QnA = [
    {
        question: "Javascript basics inclue?",
        options: ["Variables", "Arrays", "If/Else statements", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which one of these are variable elements?",
        options: ["Numbers", "Strings", "Booliens", "All of the above"],
        correctAnswer: "All of the above"
    },

    {
        question: "Which one of the following defines a variable which will never change?",
        options: ["var", "let", "const", "none"],
        correctAnswer: "const"
    },

    {
        question: "Which of these options does NOT require the use of parentheses?",
        options:[ "console.log", "prompt", "alert", "innerHTML"],
        correctAnswer: "innerHTML"


    },

    {
        question: "In JavaScript the keyword ________ is used to declare a variable.",
        options:[ "var", "which", "for", "none"],
        correctAnswer: "var"

    },

    
]

function startquiz(){
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    score = 0;
    startTimer();
    nextQuestion();
    
}
//saving score in a local storage
function saveScore() {
    localStorage.setItem("score", input.value + " - " + score)
    scoreBoard.setAttribute("class","hide");
    highscoreBoard.setAttribute("class", "container");
    document.getElementById("high").textContent = localStorage.getItem("score")
}

//a function with an if condition to access the elements/text contents of the Q&A array 

function nextQuestion(){
    var lastAnswer = this.textContent;
    if(currentQuestionIndex !== 0){
        if(lastAnswer == QnA[currentQuestionIndex - 1].correctAnswer){
            console.log("correct");
            score++;
            // alert("Correct!");
        } else {
            console.log("bad, wrong.");
            // alert("Wrong!");
            timeLeft-=10;
        }
    }
    if(currentQuestionIndex<QnA.length){
        questionElement.textContent = QnA[currentQuestionIndex].question
        btnOne.textContent = QnA[currentQuestionIndex].options[0];
        btnTwo.textContent = QnA[currentQuestionIndex].options[1];
        btnThree.textContent = QnA[currentQuestionIndex].options[2];
        btnFour.textContent = QnA[currentQuestionIndex].options[3];
        currentQuestionIndex++;
    } else{
        currentQuestionIndex++;
    }
        
}

/*a function that will be called when the quiz starts to set time/countdown in a condition until the amount of 
time reaches 0 or all questions are attepted*/
function startTimer() {
    var interval = setInterval(function(){
        timer.textContent = timeLeft;
        if(timeLeft<=0 || currentQuestionIndex > QnA.length) {
            clearInterval(interval)
            scoreBoard.setAttribute("class","container");
            document.getElementById("invisible").setAttribute("class", "hide")
            scoreAmt.textContent=score;
            
        }
        timeLeft--;

        

    }, 1000)
}

//assigning an on click event lisner to the buttons
startButton.addEventListener("click", startquiz)
btnOne.addEventListener("click", nextQuestion);
btnTwo.addEventListener("click", nextQuestion);
btnThree.addEventListener("click", nextQuestion);
btnFour.addEventListener("click", nextQuestion);
inputBtn.addEventListener("click", saveScore)



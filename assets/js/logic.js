// Global Variables
var qIndex = 0;
var score = 0;
var timeEl = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var finalScoreEl = document.getElementById("final-score");
var startButton = document.getElementById("start");
var choice = "";


//start timer, change screen to show first question
function start() {
  timer();
  startScreen.classList.add("hide");
  questionsEl.classList.remove("hide");
  question();
}

function ending(){
  endScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
        document.getElementById("final-score").textContent = score;
        clearInterval(timeInterval);
  };

//Ask Question & give options
let j = 0; 
function question() {
    questionTitle.innerHTML = "";
    choicesEl.innerHTML = "";

    questionTitle.innerHTML = questions[j].question;
  for (let i = 0; i < questions[i].answer.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("id", i);
    answerButton.textContent = questions[j].answer[i];
    choicesEl.append(answerButton);
    answerButton.addEventListener("click",answer);
  }
  function answer(el){
    choice = el.target.textContent;
    console.log(choice);
checkAnswer(choice)
}
function checkAnswer() {
  console.log(choice);
  if (choice == questions[j].correct) {
    score++;
  } else {
    timeEl.innerHTML-=10;
  }
  j++;
    if (j >= questions.length){
      ending()
    }
    else { question()
    }
}
}


//timer will go down as questions are asked
function timer() {
  var timeInterval = setInterval(function () {
    if (timeEl.innerHTML >= 1) {
      //console.log(timeEl.innerHTML);
      timeEl.innerHTML--;
    } else if (timeEl.innerHTML == 0) {
      ending()
    }
  }, 1000);
}
//save high score in local storage
var initialsInput = document.getElementById("initials");
var submit = document.getElementById("submit");
submit.addEventListener("click", highScore)

function highScore() {
  var initials = initialsInput.value.trim();
  console.log(initials);
  if (initials !== ""){
  localStorage.setItem("initials",initials);
  localStorage.setItem("score",score);
}
else {
  alert("Please enter your intials!")
}
};



//event listener
startButton.addEventListener("click", start);

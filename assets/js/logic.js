let elem = document.querySelector('#time');
// let startBtn= document.querySelector('#submit');
let count = 3;
let buttonId = document.getElementById("start");
let questionBox = document.getElementById("start-screen");
let endScreenId = document.getElementById("end-screen")
let questionId = document.getElementById("questions");
let questionTitleId = document.getElementById("question-title");
let questionChoicesId = document.getElementById("choices");
let choiceListId = document.getElementById("choiceList");
let feedbackId = document.getElementById("feedback");
let finalScoreId = document.getElementById("final-score");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let penalty = 25;
let totalPoints = 100;
//This function is hiding the elements after the button is clicked 
function display(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}


// Create the function that will be called when the button is clicked

buttonId.addEventListener("click", function () {
  showQuestion();
  countDown()
  display(buttonId);
  display(questionBox);
  display(questionId);
  checkAnswer();
  // console.log(currentQuestion);

});
// Start the interval
function countDown() {
  // Create a variable to hold the interval ID
  var intervalId;
  intervalId = setInterval(function () {
    if (count < 0) {
      clearInterval(intervalId);

    } else {

      elem.textContent = count;
      count--;
    }


  }, 1000);
}


// Stop the interval when the button is clicked again
function clearScore() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;

  setWins();
  setLosses();
}


let currentQuestion = 0;
let listButton = "";
//The function below is displaying the question


function showQuestion() {
  console.log("test show question");
  console.log(currentQuestion + " currentquestion")
  console.log(currentQuestion + " questionsList.length")
  if (currentQuestion === questionsList.length) {
    display(questionId);
    endScreenId.classList.toggle("hide");
    return;

  }


  let answersValues = Object.values(questionsList[currentQuestion].answers)


  listButton.textContent = answersValues[currentQuestion];
  questionTitleId.textContent = questionsList[currentQuestion].question;

  option1.textContent = answersValues[0];
  option1.values = answersValues[0];
  option2.textContent = answersValues[1];
  option2.values = answersValues[1];
  option3.textContent = answersValues[2];
  option3.values = answersValues[2];
  option4.textContent = answersValues[3];
  option4.values = answersValues[3];

  // listButton.textContent = answersValues[currentQuestion];
  // console.log(listButton);


  // for(let i = 0; i <answersValues.length; i++){

  //   listButton = document.createElement("button");
  //   listButton.textContent = (i  + 1 +".") +  answersValues[i] ;
  //   questionChoicesId.appendChild(listButton);
  //   console.log(listButton);
  // }


}

function checkAnswer() {
  console.log(currentQuestion);
  console.log(questionsList.length);
  if (currentQuestion === questionsList.length) {
    return;
  }
  questionChoicesId.addEventListener("click", function (event) {

    if (event.target.values === questionsList[currentQuestion].correctAnswer) {
      feedbackId.textContent = "Correct Answer";
    } else {
      feedbackId.textContent = "Wrong Answer";
      totalPoints -= penalty;
    }
    currentQuestion++;
    console.log(currentQuestion);

    showQuestion();
    showFinalScore();
  });



}


function showFinalScore() {

  finalScoreId.textContent = totalPoints;
}
showFinalScore();
let elem = document.querySelector('#time');
// let startBtn = document.querySelector('#submit');
let count = 60;
let buttonId = document.getElementById("start");
let questionBox = document.getElementById("start-screen");
let endScreenId = document.getElementById("end-screen")
let questionId = document.getElementById("questions");
let questionTitleId = document.getElementById("question-title");
let questionChoicesContainer = document.getElementById("choices");
let choiceListId = document.getElementById("choiceList");
let feedbackId = document.getElementById("feedback");
let finalScoreId = document.getElementById("final-score");
let submitButtonId = document.getElementById("submit");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
// localStorage.clear();
let addPoint = 25;
let totalPoints = 0;
let currentQuestionIndex = 0;
let listButton = "";
//------------------------------------------------------------------------------
//This function is hiding the elements after the button is clicked 
function setInitial() {
  let inputValueInitials = document.getElementById("initials").value;
  let storedInitialsArray = JSON.parse(localStorage.getItem("iniArray")) || [];
  storedInitialsArray.push(inputValueInitials);
  localStorage.setItem("iniArray", JSON.stringify(storedInitialsArray));
  
}

function getInitial(){
  let initialsArray = JSON.parse(localStorage.getItem("iniArray"));
  return initialsArray;
}

console.log( getInitial());

//------------------------------------------------------------------------------
function setScore() {

  let storedInitialsArray = JSON.parse(localStorage.getItem("scArray")) || [];
  storedInitialsArray.push(totalPoints);
  localStorage.setItem("scArray", JSON.stringify(storedInitialsArray));
  
   
}

let getScore = function  (){
  
  let scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
  
  if(scoreArray===null){
    return 0;
  }
  console.log(scoreArray.length);
  return scoreArray;
}

console.log("This is the score" + getScore());
//------------------------------------------------------------------------------
//This function is initializing the localstorage values 
function init() {
  setInitial();
  setScore();
  
}
//------------------------------------------------------------------------------
//This function is hidding or displaying based on the element class
function display(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

//------------------------------------------------------------------------------
// Create the function that will be called when the button is clicked
// Also this is the entry point of the js application
buttonId.addEventListener("click", function () {
  
  showQuestion();
  countDown();
  display(buttonId);
  display(questionBox);
  display(questionId);
  checkAnswer();

 

});
//-----------------------------------------------------------------------------------
// Start the interval
let trig = false;

//----------------------------------------------------------------------------------
function countDown() {
  // Create a variable to hold the interval ID
  var intervalId;
  intervalId = setInterval(function () {
    if (count < 0) {
      clearInterval(intervalId);
      if (!trig) {
        display(questionId);
        endScreenId.classList.toggle("hide");
      }

    } else {
      if (trig) {
        elem.textContent = "";
      } else {
        elem.textContent = count;
        count--;
      }

    }


  }, 1000);
}

//The function below is displaying the question
//-----------------------------------------------------------------------------

function showQuestion() {
 console.log(currentQuestionIndex);
  if (currentQuestionIndex >= questionsList.length || count < 0) {
    display(questionId);
    endScreenId.classList.toggle("hide");
    trig = true;
    return;

  }

  let currentQuestion = questionsList[currentQuestionIndex];
  questionTitleId.textContent = currentQuestion.question;
  questionChoicesContainer.innerHTML = "";

  currentQuestion.answers.forEach(function (answer ,i) {
    let li = document.createElement("button");
    li.setAttribute("value", answer);
    li.textContent = (i  + 1 +".") + answer;
    li.onclick=checkAnswer;
    questionChoicesContainer.appendChild(li);
  });
}

//-----------------------------------------------------------------------------------
//This function is checking the answers and compares them if they are correct or wrong
function checkAnswer() {
   
  if (this.value === questionsList[currentQuestionIndex].correctAnswer) {
    feedbackId.textContent = "Correct Answer";
    totalPoints += addPoint;
   
  } else {
    feedbackId.textContent = "Wrong Answer";
    count -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questionsList.length) {
    return;
  }
  else{
    showQuestion();
    
  }   
  questionChoicesContainer.addEventListener("click", function (event) {
    showQuestion();
    showFinalScore();
    

  });

}
//--------------------------------------------------------------------------------------

//This function is displaying the total final score 
function showFinalScore() {
  finalScoreId.textContent = totalPoints;
}

//----------------------------------------------------------------------------------------
//This function is setting the initials  and redirects to next highscores page.
function submit() {

    submitButtonId.addEventListener("click", function (event) {
    event.preventDefault();

    // let inputValueInitials = document.getElementById("initials").value;
    // console.log(inputValueInitials);
    // let storedInitialsArray=JSON.parse(localStorage.getItem("iniArray")) || [];
    // storedInitialsArray.push(inputValueInitials);
    // localStorage.setItem("initialsArray", JSON.stringify(storedInitialsArray));
   
     setScore();
     setInitial();
     redirect();
     
  })
}



//---------------------------------------------------------------------------------------
function redirect() {
  window.location.href = "highscores.html";
}
submit();

function a (){ 
 for( let i =0; i<getInitial.length; i++){
  console.log( test[i] + setInitial[i]);
 }}

 a();
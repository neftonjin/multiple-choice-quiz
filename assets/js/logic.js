let elem = document.querySelector('#time');
// let startBtn = document.querySelector('#submit');
let count = 60;
let buttonId = document.getElementById("start");
let questionBox = document.getElementById("start-screen");
let endScreenId = document.getElementById("end-screen")
let questionId = document.getElementById("questions");
let questionTitleId = document.getElementById("question-title");
let questionChoicesId = document.getElementById("choices");
let choiceListId = document.getElementById("choiceList");
let feedbackId = document.getElementById("feedback");
let finalScoreId = document.getElementById("final-score");
let submitButtonId = document.getElementById("submit");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let addPoint= 25;
let totalPoints = 0;
let initialsArray=[];
let scoreArray=[];
let currentQuestion = 0;
let listButton = "";
////////////////////////////////////////////////////////////////////////////////////////
//This function is hiding the elements after the button is clicked 
function setInitial() {
  
  localStorage.setItem("initials", initials);
}
////////////////////////////////////////////////////////////////////
function setScore(){
  localStorage.setItem("highestScore", totalPoints);
}
/////////////////////////////////////////////////////////////////////
function init (){
  setInitial();
  setScore();

}
/////////////////////////////////////////////////////////////////////////////
function display(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// Create the function that will be called when the button is clicked

buttonId.addEventListener("click", function () {
  // questionChoicesId.style.display="none";
  showQuestion();
  countDown();
  display(buttonId);
  display(questionBox);
  display(questionId);
  checkAnswer();
  
  // console.log(currentQuestion);

});
////////////////////////////////////////////////////////////////////////////
// Start the interval
let trig = false;

///////////////////////////////////////////////////////////////////////////////////////
function countDown() {
  // Create a variable to hold the interval ID
  var intervalId;
  intervalId = setInterval(function () {
    if (count < 0) {
      clearInterval(intervalId);
      if(!trig){
        display(questionId);
        endScreenId.classList.toggle("hide");
      }
      
    } else {
      if(trig){
        elem.textContent="";
      }else{
        elem.textContent = count;
        count--;
      }
      
    }


  }, 1000);
}

//The function below is displaying the question
///////////////////////////////////////////////////////////////////////////////////////

function showQuestion() {
  // questionChoicesId.style.display="inline";
  if (currentQuestion === questionsList.length || count < 0  ) {
    display(questionId);
    endScreenId.classList.toggle("hide");
    trig=true;
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

  listButton.textContent = answersValues[currentQuestion];
  console.log(listButton);

//////////////////////////////////////////////////////////////////////////////////////////
// function createLIstAnswers()
// {
//   for(let i = 0; i <answersValues.length; i++){

//     listButton = document.createElement("button");
//     listButton.textContent = (i  + 1 +".") +  answersValues[i] ;
//     questionChoicesId.appendChild(listButton);
//     console.log(listButton);
//   }

// }

// createLIstAnswers();


}
////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function checkAnswer() {
  if (currentQuestion === questionsList.length) {
    return;
  }
  questionChoicesId.addEventListener("click", function (event) {

    if (event.target.values === questionsList[currentQuestion].correctAnswer) {
      feedbackId.textContent = "Correct Answer";
      totalPoints += addPoint;
    } else {
      feedbackId.textContent = "Wrong Answer";
      count -= 10;
    }
    currentQuestion++;
    showQuestion();
    showFinalScore();
    setScore();
 
  });

}
//////////////////////////////////////////////////////

//This function is displaying the total final score 
function showFinalScore() {
 finalScoreId.textContent = totalPoints;
}


//This function is setting the initials  and redirects to next highscores page.
function submit() {

  submitButtonId.addEventListener("click", function (event) {
   event.preventDefault();

    let initials = document.getElementById("initials").value;
    initialsArray.push(initials);
    localStorage.setItem("initials", initials);
    console.log("This is the value of " + initials);
    console.log("This is the value of " + initialsArray);
    redirect();

  })
}




function redirect() {
  window.location.href = "highscores.html";
}
submit();
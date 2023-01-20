
  let elem = document.querySelector('#time');
  // let startBtn= document.querySelector('#submit');
  let count=75;
  let buttonId = document.getElementById("start");
  let questionBox = document.getElementById("start-screen");
  let questionId =document.getElementById("questions");
  let questionTitleId = document.getElementById("question-title");
  let questionChoicesId =document.getElementById("choices");
  let choiceListId = document.getElementById("choiceList");



 function display(element){
  if (element.style.display === "none") {
    element.style.display = "block";
} else {
  element.style.display = "none";
}
 }


// Create the function that will be called when the button is clicked

buttonId.addEventListener("click", function() {
     showQuestion();

      display(buttonId);
      display(questionBox);
      display(questionId);
     
  // Create a variable to hold the interval ID
  var intervalId;

  // Start the interval

  intervalId = setInterval(function() {
    if (count < 0) {
            clearInterval(intervalId);
          
          }
          else{
            console.log(count);
            elem.innerHTML = count;
            count--;
          }
          
  }, 1000);

  // Stop the interval when the button is clicked again
 currentQuestion++;
 console.log(currentQuestion);
});

// function myFunction(item) 
//   sum += item;
// 
let currentQuestion = 0;
console.log(currentQuestion);
function showQuestion() { 


questionTitleId.innerHTML = questionsList[currentQuestion].question;

let answersValues = Object.values(questionsList[currentQuestion].answers); // Answer choices array
console.log(answersValues);

answersValues.forEach(function(ans){

  let listItem = document.createElement("li");
  listItem.setAttribute("class", "list-item"); //adding class to the answer option
  console.log(ans);
  listItem.textContent=ans;
  choiceListId.appendChild(listItem);
}
)

}

function checkAnswer(){
   
  

}

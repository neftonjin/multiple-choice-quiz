
  let elem = document.querySelector('#time');
  // let startBtn= document.querySelector('#submit');
  let count=75;
  let button = document.getElementById("start");

// Create the function that will be called when the button is clicked
button.addEventListener("click", function() {
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
 
});
function myFunction(item) {
  sum += item;
}
let q = questions;
console.log(questions)
// let ans = q[i].answers;
for( let i=0; i<q.length; i++){
  // console.log(q[i]);
  // console.log(q[i].question);
   console.log( typeof q.answers )
     
}

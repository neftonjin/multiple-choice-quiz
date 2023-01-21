// const initialArray2=JSON.parse(localStorage.getItem("initials"));
// const scoresArray2=JSON.parse(localStorage.getItem("highestScore"));
// let storedScoreArray = JSON.parse(localStorage.getItem(scoreArray));


let clearId=document.getElementById("clear");
let hightScoresId = document.getElementById("highscores");
// hightScoresId.textContent=localStorage.getItem("scoreArray");

// let listScore = document.createElement("li");
// hightScoresId.textContent=JSON.parse(localStorage.getItem("scoreArray")) ;
// hightScoresId.appendChild(listScore);
hightScoresId.textContent = localStorage.getItem("initials") + " - "+ localStorage.getItem("highestScore");
console.log( localStorage.getItem("initials"));

function clear (){
    localStorage.setItem("scoreArray", "No scores yet");
    localStorage.setItem("initials", "");
    hightScoresId.textContent = "- No scores yet";
    
}    

 clearId.addEventListener("click" , clear);


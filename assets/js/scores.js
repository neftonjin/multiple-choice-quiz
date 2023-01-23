
let clearId=document.getElementById("clear");
let hightScoresId = document.getElementById("highscores");


//This function is showing all the scores 
function showAllScores (){

    
   
    for( let i = 0; i < JSON.parse(localStorage.getItem("iniArray")).length; i++ ) { 
        let li= document.createElement("li"); 
        console.log("testing loop ");
        li.textContent =  JSON.parse(localStorage.getItem("iniArray"))[i] +" "  + JSON.parse(localStorage.getItem("scArray"))[i];
        hightScoresId.appendChild(li);
   }




  
}   
    
showAllScores();


//This function is clearing the localstorage API
function clear (){
    hightScoresId.textContent = localStorage.clear(); 
}    

 clearId.addEventListener("click" , clear);


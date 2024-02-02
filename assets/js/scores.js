var storedInitials = localStorage.getItem("initials");
var storedScore = localStorage.getItem("score");
var highScoreList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

    // Create a new list item and append it to the highScoreList
    if(storedInitials !== "" && storedScore !== "" && storedInitials !== null && storedScore !== null){
        var listItem = document.createElement("li");
        listItem.textContent = storedInitials + ", Score: " + storedScore;
        highScoreList.appendChild(listItem);
    }
    else {
        var p = document.createElement("p");
        p.textContent = "No High Scores";
        highScoreList.appendChild(p);
    };


    
    var listItem = document.createElement("li");
    listItem.textContent = storedInitials + ", Score: " + storedScore;
    highScoreList.appendChild(listItem);
    
  
    clearButton.addEventListener("click", function(){
        localStorage.clear()
        highScoreList.innerHTML = "";
    });
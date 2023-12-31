let homeScore = 0
let guestScore = 0; 

let homeScorePoints = document.getElementById("home-score");
homeScorePoints.textContent = homeScore;

let guestScorePoints = document.getElementById("guest-score");
guestScorePoints.textContent = guestScore; 
console.log(guestScorePoints.textContent); 

function homePlusOne() {
   homeScore += 1; 
   homeScorePoints.textContent = homeScore;
   checkWinner(); 
}

function homePlusTwo() {
   homeScore += 2; 
   homeScorePoints.textContent = homeScore;
   checkWinner(); 
}

function homePlusThree() {
   homeScore += 3; 
   homeScorePoints.textContent = homeScore;
   checkWinner(); 
}


function guestPlusOne() {
   guestScore += 1; 
   guestScorePoints.textContent = guestScore;
   checkWinner(); 
}

function guestPlusTwo() {
   guestScore += 2; 
   guestScorePoints.textContent = guestScore;
   checkWinner(); 
}

function guestPlusThree() {
   guestScore += 3; 
   guestScorePoints.textContent = guestScore;
   checkWinner(); 
}

function checkWinner() {
    if (homeScore > guestScore) {
        document.getElementById("home-score").style.backgroundColor = "#DDD6FE"; 
        document.getElementById("home-score").style.color = "black"; 
        document.getElementById("guest-score").style.backgroundColor = "#0a0001";
        document.getElementById("guest-score").style.color = "#6D28D9";
    }
    else if (guestScore > homeScore) {
        document.getElementById("guest-score").style.backgroundColor = "#DDD6FE"; 
        document.getElementById("guest-score").style.color = "black";
        document.getElementById("home-score").style.backgroundColor = "#0a0001";
        document.getElementById("home-score").style.color = "#6D28D9";
    }
    else {
        document.getElementById("guest-score").style.backgroundColor = "#0a0001";
        document.getElementById("guest-score").style.color = "#6D28D9";
        document.getElementById("home-score").style.backgroundColor = "#0a0001";
        document.getElementById("home-score").style.color = "#6D28D9";
    }
}

function newGame() {
   homeScore = 0;
    guestScore = 0;
    guestScorePoints.textContent = guestScore;
    homeScorePoints.textContent = homeScore;
    console.log("Start new game button was clicked")
}


//stretch goals 

//1 add a new game button - done ✅
// when I hit new game, it should reset current scores to 0


//2 highlight the leader somehow - - done ✅
//everytime, after a button press, check the scores
//if winner is home, manipulate the DOM to add a border or add a cup to the title
// if winner is guest, do the same thing 
// reset the colors of the previous winner 



//add other counters like penalties, fouls, etc 



//keep track of winners of previous games 
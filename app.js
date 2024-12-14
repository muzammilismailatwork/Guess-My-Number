let randomNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

function guessNumber(){
let inputNumber = document.querySelector("#inputValue").value
if(inputNumber > 20  || inputNumber == 0 || inputNumber == ''){
    document.querySelector(".heading").innerHTML = "Please enter number between 1 to 20";
}
else{
    
    if(randomNumber == inputNumber){
        if(highScore < score){
            highScore = score;
            document.querySelector("#highScore").innerHTML = highScore;
            document.querySelector(".heading").innerHTML = `You Won`;
        }
        else{
            document.querySelector("#highScore").innerHTML = highScore;
            document.querySelector(".heading").innerHTML = `You Won but higher score is ${highScore}`;
        }
        randomNumber = Math.ceil(Math.random() * 20)
        score = 20;
        document.querySelector("#score").innerHTML = score;
    }
    else{
        let updatedScore = score - 1;
        document.querySelector("#score").innerHTML = updatedScore;
        score = updatedScore;
        if(score <= 0){
            document.querySelector(".heading").innerHTML = "You loss the game please try again";
            score = 0;
            document.querySelector("#score").innerHTML = score;
        }
        else if(inputNumber < randomNumber){
            document.querySelector(".heading").innerHTML = "Please choose higher number";
        }
        else{
            document.querySelector(".heading").innerHTML = "Please choose lower number";
        }
    }
    document.querySelector("#inputValue").value = "";
    }
}


function reset(){
    randomNumber = Math.ceil(Math.random() * 20);
    score = 20;
    document.querySelector(".heading").innerHTML = "Start Guessing...";
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#inputValue").value = "";
}
 


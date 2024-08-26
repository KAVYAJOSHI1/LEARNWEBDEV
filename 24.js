const answer=Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submitbutton").onclick=function(){
    let guess=document.getElementById("guessfield").value;
    guesses++;
    if(guess==answer){
       alert(`${answer} is correct! You guessed it in ${guesses} guesses`);
    }else if(guess<answer){
        alert("Your guess is too low");
    }else{
        alert("Your guess is too high");
    }
}
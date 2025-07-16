let resetbtn = document.querySelector("#reset-btn");
const choices = document.querySelectorAll('.choice');
let usercounter = 0;
let userscore = document.querySelector("#user-score");
userscore.innerText = usercounter;
let compcounter = 0;
let compscore = document.querySelector("#comp-score");
compscore.innerText = compcounter;
const choicearr=['rock','paper','scissors'];
let userchoice = '';
let compchoice = '';

choices.forEach((choice, index) => {
    choice.addEventListener('click', () => {
        userchoice = ['rock', 'paper', 'scissors'][index];
        console.log(userchoice); // For testing
        compchoice = choicearr[Math.floor(Math.random() * choicearr.length)];
        console.log(compchoice);

        checkWinner();
        scoreboard();
    });
});

const resultDiv = document.getElementById('result');

function checkWinner() {
    if (userchoice === compchoice) {
        resultDiv.textContent = "It's a tie!";
        resultDiv.style.color = "#f7e1c1";
        return "tie";
    } else if (
        (userchoice === 'rock' && compchoice === 'scissors') ||
        (userchoice === 'paper' && compchoice === 'rock') ||
        (userchoice === 'scissors' && compchoice === 'paper')
    ) {
        resultDiv.textContent = "You win! " + ` Your ${userchoice} beats ${compchoice}`;
        resultDiv.style.color = "green";
        return "user";
    } else {
        resultDiv.textContent = "you lose! " + `${compchoice} beats your ${userchoice}`;
        resultDiv.style.color = "red";
        return "comp";
    }
}

function scoreboard() {
    let winner = checkWinner();
    if(winner === "tie")
        return;
    if(winner === "user")
    {
        usercounter++;
        userscore.innerText = usercounter;
        return;
    }
    else{
        compcounter++;
        compscore.innerText = compcounter;
        return;
    }
}
function reset(){
    usercounter = 0;
    compcounter = 0;
    userscore.innerText = usercounter;
    compscore.innerText = compcounter;
    resultDiv.innerText = "";
}
resetbtn.addEventListener("click",reset);
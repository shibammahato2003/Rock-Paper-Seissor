let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        msg.innerText = `you own thw game..wooohoo.. ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
        userScore++;
        userscore.innerText = userScore;
    }
    else{
        msg.innerText = `you lose the game ${compchoice} beats ${userchoice} `;
        msg.style.backgroundColor = "red";
        compScore++;
        compscore.innerText = compScore;
    }
}

const drowGame =() => {
    msg.innerText = " THE GAME WAS DROW PLAY AGAIN.."
}

const playgame = (userchoice) =>{
    console.log(" userchoice = ", userchoice);

    const compchoice = gencompchoice();
    console.log(" compchoice = ", userchoice);

    if(userchoice === compchoice){
        drowGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})
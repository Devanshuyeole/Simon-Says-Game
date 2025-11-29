let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let arr = ["yellow", "red", "purple", "green"];

// Start the game on key press or touch
document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

function startGame() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
}

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * arr.length);
    let randclr = arr[randidx];
    let randbtn = document.querySelector(`.${randclr}`);
    
    gameSeq.push(randclr);
    gameflash(randbtn);
}

function checkans(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key or tap to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    let userclr = btn.getAttribute('id');
    userSeq.push(userclr);

    checkans(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

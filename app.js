let gameSeq=[]
let userSeq=[]
let started=false;
let level =0
let h2=document.querySelector('h2')
let arr=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started")
        started=true

        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelup() {
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3)
    let randclr=arr[randidx]
    let randbtn=document.querySelector(`.${randclr}`)
    gameSeq.push(randclr)
    gameflash(randbtn)
}

function checkans(index){
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML=`game over! Your Score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset()
    }
}


function btnpress(){
    let btn=this;
    userflash(btn)

    userclr=btn.getAttribute('id')
    userSeq.push(userclr)

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
}

let started = false;
let def = ["red","green","yellow","blue"];
let com = [];
let user = [];
let ind = 0;
let level = 0;
let high = 0;
let buttoon = document.querySelector("#buttoon");
buttoon.addEventListener("click",()=>{
    
    if(started== false){
    console.log("game started");
    document.querySelector("h4").innerHTML = "Game is started";
    started = true;
    rand();
}
})


function rand(){
    user = [];
    let r = Math.floor(Math.random()*3);
    console.log(def[r]);
    let l = document.querySelector(`.${def[r]}`);
    l.classList.add("white");
    setTimeout(()=>{
        l.classList.remove("white");
    },200);
    com.push(def[r]);
    console.log(com);
    document.querySelector("h5").innerHTML = `Your Turn`;
}

let btn = document.querySelectorAll(".btn");
for(bt of btn){
bt.addEventListener("click",userClick);
}

function userClick(){
    let b = this;
    b.classList.add("grey");
    setTimeout(()=>{
        b.classList.remove("grey");   
    },250);
    user.push(b.getAttribute("id"));
    checkAns(user.length-1);

}

function checkAns(ind){
    if(com[ind]===user[ind]){
        if(com.length == user.length){
            console.log("true");
            level++;
            document.querySelector("h4").innerHTML = `level ${level}`;
            
            setTimeout(rand,1000);
            document.querySelector("h5").innerHTML = `Computer Turn`;
            if(high<=level && level != 0){
                high = level;
                document.querySelector("h3").innerHTML = `Highest score is ${high}`;
            }
        }


    }
    else{
        console.log("false");
        started= false;
        document.querySelector("body").classList.add("wrong");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("wrong"); 
        },250)
        document.querySelector("h4").innerHTML = "You are wrong !!<u><b>Again Start Game press the Start Button</b></u>";
        document.querySelector("h5").innerHTML = ``;
        com = [];
        user = [];
        ind = 0;
        level = 0;

    }
}

const startBtn = document.getElementById("start");
const scoreText = document.getElementById("score");
const score = document.querySelectorAll(".x");

let previousBox;
let timeUp = false;
let totalScore=0;


startBtn.addEventListener("click",()=>{
   totalScore=0;
  startGame(); 
   
});

score.forEach((x)=> {
   x.addEventListener("click",peep);
});
 

function randomBox(){
        const row= Math.floor(Math.random()*score.length);
        const chosenBox = score[row];
        if(previousBox===chosenBox)
          return randomBox();
        else
          previousBox = chosenBox;

        return chosenBox;

}

function randomTime(min,max){
    const time = Math.round(Math.random()* (max-min))+max;
    return time;
}

function up(){             
    const x = randomBox();
    const Time = randomTime(1000,1300);
    x.classList.add("chosen");
    setTimeout(()=> {
        x.classList.remove("chosen");
        if(!timeUp){
            up();}
        },Time);   
      
}


function startGame(){
   
   totalScore=0;
   timeUp=false;
   const interval = setInterval(()=>{
     if(timeUp) clearInterval(interval);
   },10000);
  
    up();
    setTimeout(()=>{
      timeUp=true;
    }, 10000);

}


function peep(e){
      if(e.target.classList.contains("chosen")){
          totalScore = totalScore+100;
          e.target.classList.remove("chosen");
      }
      scoreText.textContent = totalScore;
}



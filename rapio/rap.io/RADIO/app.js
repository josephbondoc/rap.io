var playBtn = document.querySelector("#PlayButton"),
    pauseBtn = document.querySelector("#PauseButton"),
    backBtn = document.querySelector("#Back"),
    audio1 = new Audio('./Stop.mp3');

playBtn.addEventListener("click", function(){
   playBtn.style.visibility = "hidden";
   pauseBtn.style.visibility = "visible";
   audio1.play();
});

pauseBtn.addEventListener("click", function(){
    pauseBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
    audio1.pause();
});

backBtn.addEventListener("click", function(){
    audio1.play();
});



var playBtn = document.querySelector("#PlayButton"),
    pauseBtn = document.querySelector("#PauseButton"),
    backBtn = document.querySelector("#BackButton"),
    i=0,
    playlist = new Audio('./songs/Stop.mp3');

playBtn.addEventListener("click", function(){
playlist.play();
   playBtn.style.visibility = "hidden";
   pauseBtn.style.visibility = "visible";
});

pauseBtn.addEventListener("click", function(){
    pauseBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
    playlist.pause();
});

function fwd(){
    playlist = "./music/"+i+++".mp3"
    playlist.play();
    if (i == 3){
        i=0;
    }
}



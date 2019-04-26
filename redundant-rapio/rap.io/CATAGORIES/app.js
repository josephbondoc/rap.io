//CATAGORIES

var logo = document.querySelector("#Logo");

var btn1 = document.querySelector("#Button1"),
    GF = document.querySelector("#GrandmasterFlash"),
    RDMC = document.querySelector("#RunDMC"),
    SG = document.querySelector("#SugarhillGang");

var btn2 = document.querySelector("#Button2"),
    PE = document.querySelector("#PublicEnemy"),
    LLCJ = document.querySelector("#LLCoolJ"),
    SR = document.querySelector("#SlickRick");


//When buttons are clicked, artists appear

btn1.addEventListener("click", function(){
    GF.style.opacity = 1;
    RDMC.style.opacity = 1;
    SG.style.opacity = 1;
});

btn2.addEventListener("click", function(){
    PE.style.opacity = 1;
    LLCJ.style.opacity = 1;
    SR.style.opacity = 1;
});



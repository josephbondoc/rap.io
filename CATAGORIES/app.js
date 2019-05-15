function but1slide(){
    document.querySelector(".artist1").style.left = "30px";
    document.querySelector(".artist1").style.top = "35px";
    document.querySelector(".artist2").style.left = "30px";
    document.querySelector(".artist2").style.top = "55px";
    document.querySelector(".artist3").style.left = "30px";
    document.querySelector(".artist3").style.top = "75px";

    document.querySelector(".artist4").style.left = "-200px";
    document.querySelector(".artist5").style.left = "-200px";
    document.querySelector(".artist6").style.left = "-200px";
    document.querySelector(".artist7").style.left = "-200px";
    document.querySelector(".artist8").style.left = "-200px";
    document.querySelector(".artist9").style.left = "-200px";
}

function but2slide(){
    document.querySelector(".artist4").style.left = "150px";
    document.querySelector(".artist4").style.top = "35px";
    document.querySelector(".artist5").style.left = "150px";
    document.querySelector(".artist5").style.top = "55px";
    document.querySelector(".artist6").style.left = "150px";
    document.querySelector(".artist6").style.top = "75px";

    document.querySelector(".artist1").style.left = "-200px";
    document.querySelector(".artist2").style.left = "-200px";
    document.querySelector(".artist3").style.left = "-200px";
    document.querySelector(".artist7").style.left = "-200px";
    document.querySelector(".artist8").style.left = "-200px";
    document.querySelector(".artist9").style.left = "-200px";
}

function but3slide(){
    document.querySelector(".artist7").style.left = "270px";
    document.querySelector(".artist7").style.top = "35px";
    document.querySelector(".artist8").style.left = "270px";
    document.querySelector(".artist8").style.top = "55px";
    document.querySelector(".artist9").style.left = "270px";
    document.querySelector(".artist9").style.top = "75px";

    document.querySelector(".artist1").style.left = "-200px";
    document.querySelector(".artist2").style.left = "-200px";
    document.querySelector(".artist3").style.left = "-200px";
    document.querySelector(".artist4").style.left = "-200px";
    document.querySelector(".artist5").style.left = "-200px";
    document.querySelector(".artist6").style.left = "-200px";
}

function biopage(){
    if (document.getElementsByClassName("but1")[0].innerHTML == "west coast"){
        document.getElementsByClassName("link").href = "..BIO_PAGE/idasdasndox.html";
        console.log("gf");
    }
}




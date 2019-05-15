//function to show the artists via css transition
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

//functions to href the genres to the artists pages
function but1(){
     if (document.getElementsByClassName("but1")[0].innerHTML == "west coast"){
         document.querySelector("#link").href = "../erapage/index.html";
     } else if (document.getElementsByClassName("but1")[0].innerHTML == "the struggle"){
        document.querySelector("#link").href = "../startpage/startpage.html";
    } else if (document.getElementsByClassName("but1")[0].innerHTML == "alternative"){
        document.querySelector("#link").href = "../startpage/startpage.html";
    }
}

function but2(){
    if (document.getElementsByClassName("but2")[0].innerHTML == "braggadocio"){
        document.querySelector("#link").href = "../erapage/index.html";
    } else if (document.getElementsByClassName("but2")[0].innerHTML == "instrumental"){
       document.querySelector("#link").href = "../startpage/startpage.html";
   } else if (document.getElementsByClassName("but2")[0].innerHTML == "conscious"){
       document.querySelector("#link").href = "../startpage/startpage.html";
   }
}

function but3(){
    if (document.getElementsByClassName("but3")[0].innerHTML == "party"){
        document.querySelector("#link").href = "../erapage/index.html";
    } else if (document.getElementsByClassName("but3")[0].innerHTML == "east coast"){
       document.querySelector("#link").href = "../startpage/startpage.html";
   } else if (document.getElementsByClassName("but3")[0].innerHTML == "trap"){
       document.querySelector("#link").href = "../startpage/startpage.html";
   }
}





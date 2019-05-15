var package = {
    eras: "",
    radio: "",
    artist: "",

}

var storePackage = localStorage.getItem("package");

if (storePackage) {
    package = JSON.parse(storePackage);
}

var handler = {
    set: function (obj, props, value) {

    }
}

var prox = new Proxy(package, handler)  

function ChangeEras(era) {
    package.eras = era;
    localStorage.setItem("package", JSON.stringify(package));
    location.href = "../CATAGORIES/new.html";
}


console.log(package);

function StartCat() {
    document.querySelector(".era").innerHTML = rapios[package.eras].title;
    document.querySelector(".but1").innerHTML = rapios[package.eras].button1;
    document.querySelector(".but2").innerHTML = rapios[package.eras].button2;
    document.querySelector(".but3").innerHTML = rapios[package.eras].button3;

    document.querySelector(".artist1").innerHTML = rapios[package.eras].struggle1;
    document.querySelector(".artist2").innerHTML = rapios[package.eras].struggle2;
    document.querySelector(".artist3").innerHTML = rapios[package.eras].struggle3;

    document.querySelector(".artist4").innerHTML = rapios[package.eras].bragg1;
    document.querySelector(".artist5").innerHTML = rapios[package.eras].bragg2;
    document.querySelector(".artist6").innerHTML = rapios[package.eras].bragg3;

    document.querySelector(".artist7").innerHTML = rapios[package.eras].party1;
    document.querySelector(".artist8").innerHTML = rapios[package.eras].party2;
    document.querySelector(".artist9").innerHTML = rapios[package.eras].party3;
    if (rapios[package.eras].button3) {
        //change innerHTML of button 1
    }
    //img.src = rapios[package.eras].image[randomNum];
}


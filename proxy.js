var package = {
    eras: "",
    radio: "",
    cat: "",

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
    if (rapios[package.eras].button3) {
        //change innerHTML of button 1
    }
    //img.src = rapios[package.eras].image[randomNum];
}
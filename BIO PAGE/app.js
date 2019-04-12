// VARIABLES
var img = document.getElementById("#biorect")



// FUNCTIONS

// function fadeOut(el){
//     el.classList.add('hide');
//     el.classList.remove('show');
//   }

// btn.addEventListener('onload', function(){
//     if (img.className.indexOf('hide') !== -1) {
//       fadeIn(img);
//       this.innerHTML = 'Fade Out';
//     }
//     else {
//       fadeOut(img);
//       this.innerHTML = 'Fade In';
//     }

function fadeOut() {
    var fadeTarget = document.getElementById("biorect");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

document.getElementById("biorect").addEventListener('load', fadeOut);


// FADE IN

// function fadeIn(el, display){
//     el.style.opacity = 0;
//     el.style.display = display || "block";
  
//     (function fade() {
//       var val = parseFloat(el.style.opacity);
//       if (!((val += .1) > 1)) {
//         el.style.opacity = val;
//         requestAnimationFrame(fade);
//       }
//     })();
//   };



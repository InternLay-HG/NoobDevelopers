
    document.addEventListener("DOMContentLoaded", function () {
        const dynamicText = document.querySelector(".highlight-text");

        setTimeout(() => {
            // Fade out "SKILL"
            dynamicText.classList.add("fade-out");
            
            // After fade out, change text and fade back in
            setTimeout(() => {
                dynamicText.textContent = "Scale";
                dynamicText.classList.remove("fade-out");
                dynamicText.classList.add("fade-in");
            }, 2000);  // Change text after 1 second (fade-out duration)
        }, 2000);  // Initial delay of 3 seconds
    });

    
window.addEventListener('scroll', reveal);
function reveal(){
var reveals = document.querySelectorAll('.reveal');
for (var i = 0; i < reveals.length; i++){
var windowheight = window.innerHeight;
var revealtop = reveals[i].getBoundingClientRect().top; var revealpoint = 12;
if (revealtop < windowheight - revealpoint){ reveals[i].classList.add('active');
}
else{reveals[i].classList.remove('active');
}
}
}

window.addEventListener('scroll', reveal1);
function reveal1(){
var reveals = document.querySelectorAll('.reveal1');
for (var i = 0; i < reveals.length; i++){
var windowheight = window.innerHeight;
var revealtop = reveals[i].getBoundingClientRect().top; var revealpoint = 12;
if (revealtop < windowheight - revealpoint){ reveals[i].classList.add('active1');
}
else{reveals[i].classList.remove('active1');
}
}
}

window.addEventListener('scroll', reveal2);
function reveal2(){
var reveals = document.querySelectorAll('.reveal2');
for (var i = 0; i < reveals.length; i++){
var windowheight = window.innerHeight;
var revealtop = reveals[i].getBoundingClientRect().top; var revealpoint = 12;
if (revealtop < windowheight - revealpoint){ reveals[i].classList.add('active2');
}
else{reveals[i].classList.remove('active2');
}
}
}









   
        
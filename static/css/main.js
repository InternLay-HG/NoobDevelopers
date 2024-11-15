
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
            }, 3000);  // Change text after 1 second (fade-out duration)
        }, 3000);  // Initial delay of 3 seconds
    });

    


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



window.addEventListener("scroll", () => {
    const downPage = document.querySelector(".container");
    const triggerPoint = window.innerHeight / 6; // Adjust based on when you want the down-page to start sliding up

    if (window.scrollY > triggerPoint) {
        downPage.classList.add("active");
    } else {
        downPage.classList.remove("active");
    }
});


const textElements = document.querySelectorAll(".hero");

// Scroll event listener
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight / 10; // Point at which to change effects

    // Change background based on scroll position
    if (scrollPosition > triggerPoint) {
        document.body.style.backgroundImage = "url('static/dublicate.png')"; // New background image
    } else {
        document.body.style.backgroundImage = "url('static/Screenshot 2024-11-06 135358.png')"; // Initial background image
    }

    // Apply zoom-out effect on text
    textElements.forEach((hero) => {
        // Scale down text and reduce opacity as you scroll down
        const scaleValue = Math.max(0.5, 1 - scrollPosition / (2 * window.innerHeight)); // Ensures it doesn't disappear
        const opacityValue = Math.max(0, 1 - scrollPosition / (1.5 * window.innerHeight)); // Controls fade-out
        text.style.transform = `scale(${scaleValue})`;
        text.style.opacity = opacityValue;
    });
});

window.addEventListener("scroll", function () {
    const revealElement = document.querySelector(".reveal2");
    const scrollTop = window.scrollY;
    
    // Apply or remove the 'active2' class based on scroll position
    if (scrollTop > 100) { // Change 300 to the scroll position you want to trigger the blur
        revealElement.classList.add("active2"); // Blur background when scrolled down
    } else {
        revealElement.classList.remove("active2"); // Remove blur when scrolled up
    }
});













   
        
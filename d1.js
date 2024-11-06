
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


// Get input and mouth element
const moodInput = document.getElementById("moodInput")
const mouth = document.getElementById("mouth")

// Listen to input changes
moodInput.addEventListener("input", function() {
    const mood = moodInput.value.toLowerCase().trim();
    if (mood === 'happy') {
        // smile (default)
        mouth.style.height = "50px";
        mouth.style.borderRadius ="0 0 50px 50px"
        mouth.style.background ="white"
        mouth.style.top = ""
        mouth.style.bottom = "40px"
    } else if (mood === "sad"){
        // Sad face (frown)
        mouth.style.height = "50px"
        mouth.style.borderRadius = "50px 50px 0 0"
        mouth.style.background = "white"
        mouth.style.top = "110px"
        mouth.style.bottom = ""
    } else if (mood === "angry"){
        // Flat angry mouth
        mouth.style.height = "10px"
        mouth.style.borderRadius = "10px"
        mouth.style.background = "red"
        mouth.style.top = ""
        mouth.style.bottom = "60px"
    } else {
        // Neutral or unknown mood = small neutral mouth
        mouth.style.height = "15px"
        mouth.style.borderRadius = "10px"
        mouth.style.background = "gray"
        mouth.style.top = ""
        mouth.style.bottom = "50px"
    }
});
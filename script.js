// Get input and mouth element
        const moodInput = document.getElementById("moodInput");
        const mouth = document.getElementById("mouth");

        // Listen to input changes
        moodInput.addEventListener("input", function() {
            const mood = moodInput.value.toLowerCase().trim();
            
            // Reset mouth positioning
            mouth.style.top = "";
            mouth.style.bottom = "";
            
            if (mood === 'happy') {
                // Smile (default)
                mouth.style.height = "50px";
                mouth.style.width = "100px";
                mouth.style.borderRadius = "0 0 50px 50px";
                mouth.style.background = "black";
                mouth.style.bottom = "40px";
            } else if (mood === "sad") {
                // Sad face (frown)
                mouth.style.height = "50px";
                mouth.style.width = "100px";
                mouth.style.borderRadius = "50px 50px 0 0";
                mouth.style.background = "black";
                mouth.style.bottom = "20px";
            } else if (mood === "angry") {
                // Flat angry mouth
                mouth.style.height = "8px";
                mouth.style.width = "80px";
                mouth.style.borderRadius = "0";
                mouth.style.background = "red";
                mouth.style.bottom = "50px";
            } else if (mood === "surprised") {
                // Surprised mouth (small circle)
                mouth.style.height = "30px";
                mouth.style.width = "30px";
                mouth.style.borderRadius = "50%";
                mouth.style.background = "black";
                mouth.style.bottom = "45px";
            } else if (mood === "neutral") {
                // Neutral mouth (small horizontal line)
                mouth.style.height = "4px";
                mouth.style.width = "60px";
                mouth.style.borderRadius = "2px";
                mouth.style.background = "gray";
                mouth.style.bottom = "50px";
            } else {
                // Default to neutral for unknown moods
                mouth.style.height = "4px";
                mouth.style.width = "60px";
                mouth.style.borderRadius = "2px";
                mouth.style.background = "gray";
                mouth.style.bottom = "50px";
            }
        });

        // Set initial neutral expression
        mouth.style.height = "4px";
        mouth.style.width = "60px";
        mouth.style.borderRadius = "2px";
        mouth.style.background = "gray";
        mouth.style.bottom = "50px";

        // Creating floating mood face
        function showFloatingFace(mood){
            const moodTrail = document.getElementById("moodTrail");
            const face = document.createElement("div");
            face.classList.add("floating-face");
            
            // Emoji based on mood
            let Emoji = "😐";
            if (mood === "happy") Emoji ="😊"
            else if (mood === "sad") Emoji ="😢"
            else if (mood === "angry") Emoji ="😠"
            face.textContent = Emoji;

            // Random horizontal position
            face.style.left = "${math.random()*(window.innerWidth - 60)}px";

            moodTrail.appendChild(face);

            // Remove after animation
            setTimeout(() => {
                moodTrail.removeChild(face);
            }, 3000);
        }
        moodInput.addEventListener("input", function(){
            const mood = moodInput.value.toLowerCase().trim();

            // existing code to change

            showFloatingFace(mood); 
        });
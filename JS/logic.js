const airblade = ["e", "q", "r" ]
let position = 0;

const pressedKey = document.getElementById("pressedKey-container");

const clickArea = document.getElementById("pressBorder");
const clickBlocker = document.getElementById("clickBlocker")

const actions = [
    () => document.getElementById("Eoutput").style.backgroundColor = "#32CD32",
    () => document.getElementById("Qoutput").style.backgroundColor = "#32CD32",
    () => document.getElementById("Routput").style.backgroundColor = "32CD32"
];

let points = 0;
    
function resetStats() {
    document.getElementById("points").innerHTML = ""
}

clickArea.addEventListener("keydown", (event) => {
    if (event.key === airblade[position]) {

        actions[position]();
        position++;
        

      if (position === airblade.length) {
        console.log("airblade completed!");
        position = 0;

        clickArea.style.display = "none";

        document.getElementById("end-message").innerHTML = "Combo Completed"
        document.getElementById("restart").innerHTML = "Press SPACE to restart"

        document.getElementById("points").innerHTML = points++;

        document.querySelectorAll(".outputs").forEach(el => { 
            el.style.backgroundColor = "#32CD32";
        });

      }
  
    } else {
      position = 0;
      
        document.querySelectorAll(".outputs").forEach(el => {
            el.style.backgroundColor = "#ff0000";
        });
    }
  });

     if(event2.key === " ") {

        clickArea.style.display = "block";

        document.querySelectorAll(".outputs").forEach(el => {
            el.style.backgroundColor = "#ff0000";

            document.getElementById("end-message").innerHTML = ""
        document.getElementById("restart").innerHTML = ""
        });
    }

  






// keyPressed.addEventListener("keydown",function(event) {
//     if(event.key === "e") {
//         document.getElementById("Eoutput").style.backgroundColor = "#32CD32"
//     }  else { 
      
//     } 
// });


// document.querySelectorAll(".outputs").forEach(el => {
//     el.style.backgroundColor = "#ff0000";
//   });



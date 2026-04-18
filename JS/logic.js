const eqFlash = ["e", "q"]
let position = 0;

const actions = [
    () => document.getElementById("Eoutput").style.backgroundColor = "#32CD32",
    () => document.getElementById("Qoutput").style.backgroundColor = "#32CD32"
]

const Fkey = document.getElementById("Foutput");
const clickAreaF = document.getElementById("second-dummy-F");

let comboTimer = document.getElementById("combo-timer");
let windowOpen = false;
let windowClosed = false;

let timer;

function startTimer() {
    let time = 1.00;

    timer = setInterval(() => {
        time -= 0.01;

        comboTimer.innerText = time.toFixed(2);

        if(time <= 0.17 && !windowOpen) {
            windowOpen = true;
        }

        if(time <= 0.00 && !windowClosed) {
            windowClosed = true;
        }

        if(time <= 0) {
            clearInterval(timer);
            comboTimer.innerText = "0.00";
        }
    },10)
}

    function pauseTimer() {
        clearInterval(timer);
    }

const clickArea = document.getElementById("first-dummy");

document.getElementById("first-dummy").onmouseover = function() {mouseOver()};
document.getElementById("first-dummy").onmouseout = function() {mouseOut()};

document.getElementById("second-dummy-F").onmouseover = function() {mouseOverF()};
document.getElementById("second-dummy-F").onmouseout = function() {mouseOutF()};

const output = document.querySelectorAll("#first-output div")


clickArea.addEventListener("keydown", (event1) => {
    if(event1.key === eqFlash[position]) {
        actions[position]();
        position++;

        if(position === eqFlash.length) {

            console.log("1completed");

            clickAreaF.addEventListener("keydown", (eventF)=> {
                if(eventF.key === "f") {
                    Fkey.style.backgroundColor = "#32CD32"
                    clickAreaF.style.display = "none"
                    clickArea2.style.display = "block"

                    startTimer();

                         clickArea2.addEventListener("keydown", (event) => {

                            if (!windowOpen) return;

                            if (event.key === airblade[position2]) {

                                actions2[position2]();
                                position2++;
                                

                            if (position2 === airblade.length) {
                                console.log("airblade completed!");
                                position2 = 0;

                                clickArea2.removeAttribute("tabindex");

                                document.getElementById("end-message").innerHTML = "Combo Completed"
                                document.getElementById("restart").innerHTML = "Press SPACE to try again"

                                document.getElementById("points").innerHTML = "Score: " + ++points;

                                secondOuput.forEach(el => { 
                                    el.style.backgroundColor = "#32CD32";
                                });

                               pauseTimer();
                            }
                        
                            } else {
                            position2 = 0;
                            
                                secondOuput.forEach(el => {
                                    el.style.backgroundColor = "#ff0000";
                                });
                            }
                        });

                }
            })

        }

    } else {
         position = 0;
        
            output.forEach(el => {
                el.style.backgroundColor = "#ff0000";
            }); 

    }
    });


const airblade = ["e", "q", "r" ]
let position2 = 0;

const clickArea2 = document.getElementById("second-dummy");

const secondOuput = document.querySelectorAll("#second-output div")
const firstOuput = document.querySelectorAll("first-output div")

const actions2 = [
    () => document.getElementById("2Eoutput").style.backgroundColor = "#32CD32",
    () => document.getElementById("2Qoutput").style.backgroundColor = "#32CD32",
    () => document.getElementById("2Routput").style.backgroundColor = "32CD32"
];

let points = 0;

document.getElementById("second-dummy").onmouseover = function() {mouseOver2()};
document.getElementById("second-dummy").onmouseout = function() {mouseOut2()};

/* Reset your stats */
function resetStats() {
    document.getElementById("points").innerHTML = ""
    points = 0;
}

/* Resets the the combo */
  document.addEventListener("keydown", (event2) => {
     if(event2.key === " ") {

        clickArea2.setAttribute("tabindex", "0");

        secondOuput.forEach(el => {
            el.style.backgroundColor = "#ff0000";
     });

        firstOuput.forEach(el => {
            el.style.backgroundColor = "#ff0000";


     });

        document.getElementById("end-message").innerHTML = ""
        document.getElementById("restart").innerHTML = ""
    }
});

/* Stops focus if you dont hover on second dummy */
function mouseOut2() {
    clickArea2.blur();
};

/* Starts focus if you hover over second dummy */
function mouseOver2() {
    clickArea2.focus();
};


function mouseOver() {
    clickArea.focus();
}

function mouseOut() {
    clickArea.blur();
}

function mouseOverF() {
    clickAreaF.focus();
}

function mouseOutF() {
    clickAreaF.blur();
}

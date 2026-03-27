const keyPressed = document.getElementById("pressedKey");

keyPressed.addEventListener("keydown",function(event) {
    document.getElementById("output").innerHTML = "you pressed: " + event.key
});
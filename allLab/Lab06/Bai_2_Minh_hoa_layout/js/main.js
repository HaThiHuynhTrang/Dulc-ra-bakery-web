function myFunction() {
    var x = document.getElementById("myContainer");
    if (x.className === "container") {
        x.className += " responsive";
    } else {
        x.className = "container";
    }
}
function displayColor() {
    const colorInput = document.getElementById("colorInput").value.toLowerCase();

    const outputDiv = document.getElementById("output")

    const validColors = {
        red: "red",
        blue: "blue",
        yellow: "yellow"
    };

    if (validColors[colorInput]) {

        outputDiv.style.backgroundColor = validColors[colorInput];
        outputDiv.style.color = "white";
        outputDiv.textContent = colorInput.charAt(0).toUpperCase() + colorInput.slice(1);
    } else {
        outputDiv.style.backgroundColor = "burlywood"
        outputDiv.style.color = "black"
        outputDiv.textContent = "ERROR: Color is Invalid!";
        outputDiv.className = "error";
    }
}
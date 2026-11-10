// Get the Date and time from the HTML input value when the button is clicked

function getEpochTime() {
    let seconds = epochSeconds(document.getElementById("time").value);
    
    document.getElementById("result").innerHTML = `Epoch time in seconds: ${seconds}`; // Displays the epoch time in seconds in the result <p>tag
}

// Convert the input date and time to epoch seconds and returns the value

function epochSeconds(epochTime) {
    const date = new Date(epochTime);
    return Math.floor(date.getTime() / 1000);
}


function updateClock(){
    // Get the current date
    let currentTime = new Date();

    
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 

  
    
    
   
    let timeOfDay = (currentHour < 12 ) ? "AM" : "PM";

    // currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    // currentHour = (currentHour==0) ?  12 : currentHour;

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}
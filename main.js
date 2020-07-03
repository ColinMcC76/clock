function showTime() {
    var amPM = " AM"
    var d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    if (h > 12){
        h = h-12
        amPM = " PM"
        
 
    }
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    let time = h +":"+ m +":"+ s + amPM
    //Creates the total time from the hour, minute, and second variables retreived from the Date function. 

    document.getElementById("clockDisplay").innerText = time // displays the time element in the clockDisplay div
    setTimeout(showTime, 1000) // repeats the function showTime every second

}
showTime()
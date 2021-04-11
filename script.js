function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    if(hours<10){
        hours = "0"+hours;
    }

    if(minutes<10){
        minutes = "0"+minutes;
    }

    if(seconds<10){
        seconds = "0"+seconds;
    }

    if(hours>12){
        hours = hours-12;
        document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds+" PM.";
    }
    else if(hours<12){
        document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds+" AM";
    }

    
}

setInterval(showTime, 1000)
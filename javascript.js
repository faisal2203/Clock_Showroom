setInterval(digitalTime, 1000);
setInterval(analogTime, 1000);

let time_element = document.getElementsByClassName("digital-clock")[0]
let clock_div = document.createElement("div")
let analog_hours = document.getElementById("hour");
let analog_minutes = document.getElementById("minute");
let analog_seconds = document.getElementById("second");

function digitalTime() {
    let time = new Date;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    month +=1;
    let year = time.getFullYear();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[time.getDay()];
    am_pm = "AM";
  
    if (hours > 12) {
        hours -= 12;
        am_pm = "PM";
    }
    if (hours == 0) {
        hours = 12;
        am_pm = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    clock_div.innerHTML = `${hours} : ${minutes} : ${seconds} ${am_pm} ${day} ${date} / ${month} / ${year}`;
    time_element.after(clock_div);
    clock_div.classList.add("current_time")
}

function analogTime() {
    let time = new Date;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let hours_rotation = 30*hours + minutes/2;
    let minutes_rotation = 6*minutes;
    let seconds_rotation = 6*seconds;

    analog_hours.style.transform = `rotate(${hours_rotation}deg)`;
    analog_minutes.style.transform = `rotate(${minutes_rotation}deg)`;
    analog_seconds.style.transform = `rotate(${seconds_rotation}deg)`;
}

function displayDigital() {
    let button = document.getElementsByClassName("current_time")[0];
    let b = button.toggleAttribute("none")
    if (b == true)
    {
        button.style.display = "block";
    }
    else
    {
        button.style.display = "none";
    }

}

function displayAnalog() {
    let button = document.getElementsByClassName("analog-clock")[0];
    let b = button.toggleAttribute("none")
    if (b == true)
    {
        button.style.display = "block";
    }
    else
    {
        button.style.display = "none";
    }

}

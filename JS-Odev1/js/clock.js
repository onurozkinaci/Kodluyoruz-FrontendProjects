let username = prompt("Adınız nedir?");
let greeting = document.querySelector("#myName");
if(isNaN(username))
    greeting.innerHTML = username;
else
   alert("Please enter your name as a word.");

//An array is defined to assign the day as a text to the returned value from getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showTime(){
    let clock = document.querySelector("#myClock");
    let today = new Date();
    let day = days[today.getDay()];
    let cTime = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    + " " + day;
    clock.innerHTML = cTime;
}
showTime(); //to show the time directly onload at the beginning
setInterval(showTime, 1000); //to increase the time as the second moves per second.

   

/*
* Author:Md.Sholayman
* Description: This file contains js for an analog clock
* Date:28 Dec 2023.
* */

//getting the hour,min and sec element via using query selector with their id.
let hr = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

//function for clock
function displayTime(){
   let date = new Date();

    // Getting hour, mins, secs from date
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let rotationHour = 30*hh + mm/2 ;
   let rotationMin = 6*mm;
   let rotationSec = 6*ss ;

   //changing the hand style and rotating it via using transform

   hr.style.transform = `rotate(${rotationHour}deg)`;
   min.style.transform = `rotate(${rotationMin}deg)`;
   sec.style.transform = `rotate(${rotationSec}deg)`;

    //Note: Don't forget to use deg here otherwise it's not going to work
}

setInterval(displayTime,1000)
"use strict";
/*
   Inkwell Chronicles Interactive
   Filename: fojuzarya.js


*/

function toggleDarkMode() {
    document.body.style.backgroundColor = "#29292a"; 
    document.body.style.color = "white";
    document.getElementsByClassName("maincontent single")[0].style.backgroundColor = "black";
    document.getElementsByClassName("sidebar single")[0].style.backgroundColor = "#29292a";
    document.getElementsByClassName("post")[0].style.backgroundColor = "#29292a";
    document.getElementsByClassName("post")[1].style.backgroundColor = "#29292a";
}

function toggleLightMode(){
    document.body.style.backgroundColor = "#E6E7EB";
    document.body.style.color = "black";
    document.getElementsByClassName("maincontent single")[0].style.backgroundColor = "white";
    document.getElementsByClassName("sidebar single")[0].style.backgroundColor = "white";
    document.getElementsByClassName("post")[0].style.backgroundColor = "white";
    document.getElementsByClassName("post")[1].style.backgroundColor = "white";
}

function toggleMessgBox(){
    document.getElementById("messageBox").disabled=false;
}

function untoggleMessgBox(){
    document.getElementById("messageBox").disabled=true;
}

const navButton = document.querySelector('#mobilenav');
const dropDownMenu = document.querySelector('.dropdown');

navButton.onclick = function (){
    dropDownMenu.classList.toggle('open');
}
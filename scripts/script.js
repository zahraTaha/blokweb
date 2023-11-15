// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav:nth-of-type(2)");

var lookButton = document.querySelector("main section:nth-of-type(1) h3 button");
var lookUL = document.querySelector("main section:nth-of-type(1) ul");




menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}


lookButton.onclick = lookOn;

function lookOn() {
  lookUL.classList.toggle("show");
}



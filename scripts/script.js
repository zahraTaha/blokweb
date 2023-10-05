// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");

var lookButton = document.querySelector("main h2 button");
var lookOpen = document.querySelector("main section section");



menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}


lookButton.onclick = toggleKlappen;

function toggleKlappen() {
	lookOpen.classList.toggle("open");

}
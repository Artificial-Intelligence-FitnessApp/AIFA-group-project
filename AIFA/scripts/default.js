//This file is used on all pages for login control on the header and for other global code.

document.getElementById("button_login").addEventListener("click", login);
document.getElementById("button_logoff").addEventListener("click", login);

var loggedIn = false;

document.getElementById("logged_in").style.display = "none";
document.getElementById("logged_off").style.display = "block";

function login(){
	if(loggedIn === false){
		loggedIn = true;
		document.getElementById("logged_in").style.display = "block";
		document.getElementById("logged_off").style.display = "none";
	} else {
		loggedIn = false;
		document.getElementById("logged_in").style.display = "none";
		document.getElementById("logged_off").style.display = "block";
	}
}
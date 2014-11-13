//This file is used on all pages for login control on the header and for other global code.

document.getElementById("button_login").addEventListener("click", login);
document.getElementById("button_logoff").addEventListener("click", login);

var loggedIn = false;

document.getElementById("login_header").style.display = "block";
document.getElementById("logoff_header").style.display = "none";

function login(){
	if(loggedIn === false){
		loggedIn = true;
		document.getElementById("login_header").style.display = "none";
		document.getElementById("logoff_header").style.display = "block";
	} else {
		loggedIn = false;
		document.getElementById("login_header").style.display = "block";
		document.getElementById("logoff_header").style.display = "none";
	}
}
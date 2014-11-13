//This file is used on all pages for login control on the header and for other global code.


//User Account Section
document.getElementById("button_login").addEventListener("click", loginShow);
document.getElementById("button_logoff").addEventListener("click", login);
document.getElementById("button_login_final").addEventListener("click", loginFinal);
document.getElementById("button_login_cancel").addEventListener("click", loginCancel);

var loggedIn = false;

document.getElementById("login_header").style.display = "block";
document.getElementById("logoff_header").style.display = "none";
document.getElementById("login_div").style.display = "none";

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

function loginFinal(){
}

function loginShow(){
	document.getElementById("login_div").style.display = "block";
	$("").addCla
}

function loginCancel(){

}

//Nav Section
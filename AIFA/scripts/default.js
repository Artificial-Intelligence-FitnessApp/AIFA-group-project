//This file is used on all pages for login control on the header and for other global code.


//User Account Section
document.getElementById("button_login").addEventListener("click", loginShow);
document.getElementById("button_logoff").addEventListener("click", logout);
document.getElementById("button_login_final").addEventListener("click", login);
document.getElementById("button_login_cancel").addEventListener("click", loginCancel);

var username;

document.getElementById("login_header").style.display = "block";
document.getElementById("logoff_header").style.display = "none";
document.getElementById("login_div").style.display = "none";
document.getElementById("login_bg").style.display = "none";

function logout(){
	document.getElementById("login_header").style.display = "block";
	document.getElementById("logoff_header").style.display = "none";
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
}

function login(){
	username = document.getElementById("username_input").value;
	document.getElementById("username_output").innerHTML = username;
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
	document.getElementById("login_header").style.display = "none";
	document.getElementById("logoff_header").style.display = "block";
	document.getElementById("username_input").value = "";
	document.getElementById("password_input").value = "";
}

function loginShow(){
	document.getElementById("login_div").style.display = "block";
	document.getElementById("login_bg").style.display = "block";
}

function loginCancel(){
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
	document.getElementById("username_input").value = "";
	document.getElementById("password_input").value = "";
}

//Nav Section

document.getElementById("button_drop_menu").addEventListener("click", toggleList);

var menuDown = false;

function toggleList(){
	if(menuDown === false){
		menuDown = true;
		console.log("Anim");
		$("footer").animate({ "top": "+=50px" }, "slow" );
		$("#main_section").animate({ "top": "+=50px" }, "slow" );
	} else {
		menuDown = false;
		$("footer").animate({ "top": "-=50px" }, "slow" );
		$("#main_section").animate({ "top": "-=50px" }, "slow" );
	}
}
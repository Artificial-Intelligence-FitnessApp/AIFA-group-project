document.getElementById("button_login_cta").addEventListener("click", loginShowAlt);
var accountShown = false;
var usernameProcessed;
var htmlContent = document.getElementById("account_content").innerHTML;

function loginShowAlt(){
	loginShow();
}

var interval = setInterval(function() {
	if(loggedIn == true){
		if(accountShown == false){
			checkUsername();
			document.getElementById("account_header_heading").innerHTML = usernameProcessed + ' Account';
			document.getElementById("account_header_paragraph").innerHTML = "Welcome to your account, " + username;
			document.getElementById("button_login_cta").style.display = "none";
			accountShown = true;
		}
	} else {
		if(accountShown == true){
			document.getElementById("account_content").innerHTML = htmlContent;
			document.getElementById("button_login_cta").addEventListener("click", loginShowAlt);
			accountShown = false;
		}
	}
}, 500);

function checkUsername(){
	if(username.slice(-1) == 's'){
		usernameProcessed = username + '\'';
	} else {
		usernameProcessed = username + '\'s';
	}
}
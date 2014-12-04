/* extended login system */
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

/* blog system */
var textArea = document.getElementById("account_textarea");
var displayLength = document.getElementById("account_blog_limit");
var postArea = document.getElementById("account_blog_posts");
var remainingLength;
textArea.addEventListener("keyup", checkLength);
document.getElementById("button_account_post").addEventListener("click", postMessage);

function checkLength(){
	remainingLength = 150 - textArea.value.length;
	displayLength.innerHTML = remainingLength;
	if(remainingLength < 0){
		displayLength.style.color = "red";
	} else {
		displayLength.style.color = "black";
	}
}

function postMessage(){
	if(textArea.value.length > 150){
		alert("Post exceeds maximum length.");
	} else {
		alert("Message successfully posted.");
		postArea.innerHTML = postArea.innerHTML + "<div class=account_divs><p>" +username+ " says...</p><p class=account_blog_content>"+textArea.value+"</p></div>";
		textArea.value = "";
		displayLength.innerHTML = "150";
	}
}
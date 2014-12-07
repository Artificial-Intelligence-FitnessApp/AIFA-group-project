/* get date */
var date = new Date();
var day = date.getDate();
var weekday = date.getDay();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var weekday_eng;

switch(weekday) {
	case 0:
        weekday_eng = "Sunday";
        break;
    case 1:
        weekday_eng = "Monday";
        break;
    case 2:
        weekday_eng = "Tuesday";
        break;
    case 3:
        weekday_eng = "Wednesday";
        break;
    case 4:
        weekday_eng = "Thursday";
        break;
    case 5:
        weekday_eng = "Friday";
        break;
    case 6:
        weekday_eng = "Saturday";
        break;
	default:
		weekday_eng = "idontknowday";
}
/* extended login system */
document.getElementById("button_login_cta").addEventListener("click", loginShowAlt);
var accountShown = false;
var usernameProcessed;
var htmlContent = document.getElementById("account_content").innerHTML;
var blogContent = document.getElementById("account_blog_posts").innerHTML;

function loginShowAlt(){
	loginShow();
}

var interval = setInterval(function() {
	if(loggedIn == true){
		if(accountShown == false){
			checkUsername();
			textArea = document.getElementById("account_textarea");
			displayLength = document.getElementById("account_blog_limit");
			postArea = document.getElementById("account_blog_posts");
			document.getElementById("account_blog_posts").innerHTML = blogContent;
			document.getElementById("account_header_heading").innerHTML = usernameProcessed + ' Account';
			document.getElementById("account_header_paragraph").innerHTML = "Welcome to your account, " + username;
			document.getElementById("account_username").innerHTML = username;
			document.getElementById("account_username_p").innerHTML = usernameProcessed;
			document.getElementById("button_login_cta").style.display = "none";
			document.getElementById("account_body").style.display = "inline-block";
			document.getElementById("button_account_post").addEventListener("click", postMessage);
			/* fitness slider */
			$('#account_program div.account_program_article').click(function() {
				$(this).children('div').slideToggle(500);
			});
			document.getElementById("day").innerHTML = day;
			document.getElementById("month").innerHTML = month;
			document.getElementById("year").innerHTML = year;
			document.getElementById("weekday_eng").innerHTML = weekday_eng;
			accountShown = true;
		}
	} else {
		if(accountShown == true){
			blogContent = document.getElementById("account_blog_posts").innerHTML;
			document.getElementById("account_content").innerHTML = htmlContent;
			document.getElementById("button_login_cta").addEventListener("click", loginShowAlt);
			document.getElementById("account_body").style.display = "none";
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
		postArea.innerHTML = "<div class=account_divs><p>" +username+ " says...</p><p class=account_blog_content>"+textArea.value+"</p></div>" + postArea.innerHTML;
		textArea.value = "";
		displayLength.innerHTML = "150";
	}
}
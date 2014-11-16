

$(document).ready(function(){
	var sw = document.body.clientWidth;
	if(sw < 481){
		smMenu();
	}else(sw >= 481 && <= 768){
		medMenu();
	}
});

//take care of resizing the window
$(window).resize(function(){
	var sw = document.body.clientWidth;
	if(sw < 481 && windownState != 'small'){
		smMenu();
	}
	if(sw > 480 && sw < 769 && windowState != 'medium'){
		medMenu();
	}
});

//handle menu for small screens
function smMenu(){
	$()
}
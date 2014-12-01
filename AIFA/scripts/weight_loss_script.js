$(document).ready(function() {
	$('#seven_hacks_exercise h3').click(function() {
		$(this).next('.seven_hacks').slideToggle(500);
		$(this).toggleClass('seven_hacks');
	});
});


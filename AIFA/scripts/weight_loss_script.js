$(document).ready(function() {
	$('#Nick h3').click(function() {
		$(this).next('.seven_hacks').slideToggle(500);
		$(this).toggleClass('close');
	});
});
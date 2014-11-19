$(document).ready(function() {
	$('#faq_content h3').click(function() {
		$(this).next('.faq_answer').slideToggle(500);
		$(this).toggleClass('close');
	});
});
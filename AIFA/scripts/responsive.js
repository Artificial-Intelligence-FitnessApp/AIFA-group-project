$(document).ready(function(){
	$("#menu-trigger").click(function(){
		$("#navTablet").slideToggle();
	});
	$(".sub").click(function(){
		$(".submenu").slideToggle();
	});
});
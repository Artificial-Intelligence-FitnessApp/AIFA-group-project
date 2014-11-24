$(document).ready(function() {
		loadApp();
	});
function loadApp() {
	var flipbook = $('.flipbook');

 	// Check if the CSS was already loaded
	
	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .recipe_double').scissor();

	// Create the flipbook
		$('.flipbook').turn({
			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

		});
		
		
		$(".flipbook").hover(function(){
			$(".recipes_screen").fadeTo(100, 1);
		},	function(){
			$(".recipes_screen").fadeTo(100, 0,
		function(){
				$(this).hide();
			});
		});

// Load the HTML4 version if there's not CSS transform

/*
yepnope({
	test : Modernizr.csstransforms,
	yep: ['../../lib/turn.min.js'],
	nope: ['../../lib/turn.html4.min.js'],
	both: ['../../lib/scissor.min.js', 'css/double-page.css'],
	complete: loadApp
});
*/
}
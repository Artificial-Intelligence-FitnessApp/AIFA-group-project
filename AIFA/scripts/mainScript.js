// faq script ======================================
$(document).ready(function() {
	$('#faq_section h3').click(function() {
		$(this).next('.faq_answer').slideToggle(500);
		$(this).toggleClass('close');
	});
});
// index side bar =================================
$(document).ready(function(){
	$("#chest").click(function(){
		$("#show-chest").slideToggle();
	});
	$("#back").click(function(){
		$("#show-back").slideToggle();
	});
	$("#arms").click(function(){
		$("#show-arms").slideToggle();
	});
	$("#legs").click(function(){
		$("#show-legs").slideToggle();
	});	

});
//slider banner-----------------------------------
       var hovering = false;
        var slideshow = $(".slider");

        slideshow.mouseenter(function() {
            hovering = true;
        }).mouseleave(function() {
            hovering = false;
            slideShow();
        });
        function slideShow() {
            if (!hovering) {
                var currentImg = (slideshow.children("img:visible").length) ? slideshow.children("img:visible") : slideshow.children("img:first");
                var nextImg = (currentImg.next().length) ? currentImg.next() : slideshow.children("img:first");

                currentImg.delay(1000).fadeOut(200, function() {
                    nextImg.fadeIn(200, function() {
                        setTimeout(slideShow, 1000);
                    });
                });
            }
        }
        $(document).ready(function() {
            slideShow();
        });

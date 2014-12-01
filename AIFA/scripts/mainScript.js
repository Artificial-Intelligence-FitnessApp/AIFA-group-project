// login script ====================================
document.getElementById("button_login").addEventListener("click", loginShow);
document.getElementById("button_logoff").addEventListener("click", logout);
document.getElementById("button_login_final").addEventListener("click", login);
document.getElementById("close-icon").addEventListener("click", loginCancel);

var username;

document.getElementById("login_header").style.display = "block";
document.getElementById("logoff_header").style.display = "none";
document.getElementById("login_div").style.display = "none";
document.getElementById("login_bg").style.display = "none";

function logout(){
	document.getElementById("login_header").style.display = "block";
	document.getElementById("logoff_header").style.display = "none";
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
}

function login(){
	username = document.getElementById("username_input").value;
	document.getElementById("username_output").innerHTML = username;
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
	document.getElementById("login_header").style.display = "none";
	document.getElementById("logoff_header").style.display = "block";
	document.getElementById("username_input").value = "";
	document.getElementById("password_input").value = "";
}

function loginShow(){
	document.getElementById("login_div").style.display = "block";
	document.getElementById("login_bg").style.display = "block";
}

function loginCancel(){
	document.getElementById("login_div").style.display = "none";
	document.getElementById("login_bg").style.display = "none";
	document.getElementById("username_input").value = "";
	document.getElementById("password_input").value = "";
}


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

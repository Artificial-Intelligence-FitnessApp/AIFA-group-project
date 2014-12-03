// news script =====================================
/* Toggle Popup */
$(".news_headline").click(function(){
	$("#news_bg").css({"display":"block"});
	$("#news_popup").css({"display":"inline-block"});
});

$("#news_bg").click(function(){
	$("#news_bg").css({"display":"none"});
	$("#news_popup").css({"display":"none"});
});

/* Reset Popup Scroll */
$(".news_headline").click(function(){
	$("#news_popup_content div").scrollTop(0);
});

/* Change Popup */
$("#news_one").click(function(){
	$("#news_popup_header h2").html($("#news_one h2").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_one img").attr("alt"));
	$("#news_popup_content div").html($("#news_one div").html());
});

$("#news_two").click(function(){
	$("#news_popup_header h2").html($("#news_two h2").html());
	$("#news_popup_content img").attr("src", $("#news_two img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_two img").attr("alt"));
	$("#news_popup_content div").html($("#news_two div").html());
});

$("#news_three").click(function(){
	$("#news_popup_header h2").html($("#news_three h2").html());
	$("#news_popup_content img").attr("src", $("#news_three img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_three img").attr("alt"));
	$("#news_popup_content div").html($("#news_three div").html());
});

$("#news_four").click(function(){
	$("#news_popup_header h2").html($("#news_four h2").html());
	$("#news_popup_content img").attr("src", $("#news_four img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_four img").attr("alt"));
	$("#news_popup_content div").html($("#news_four div").html());
});

$("#news_five").click(function(){
	$("#news_popup_header h2").html($("#news_five h2").html());
	$("#news_popup_content img").attr("src", $("#news_five img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_five img").attr("alt"));
	$("#news_popup_content div").html($("#news_five div").html());
});

$("#news_six").click(function(){
	$("#news_popup_header h2").html($("#news_six h2").html());
	$("#news_popup_content img").attr("src", $("#news_six img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_six img").attr("alt"));
	$("#news_popup_content div").html($("#news_six div").html());
});

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

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
var loggedIn = false;

document.getElementById("button_login").addEventListener("click", loginShow);
document.getElementById("button_logoff").addEventListener("click", logout);
document.getElementById("button_login_final").addEventListener("click", login);
document.getElementById("login_bg").addEventListener("click", loginCancel);

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
	loggedIn = false;
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
	loggedIn = true;
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
// Toogle  =================================
$(document).ready(function(){
    $("#chest").click(function(){
        if($(this).next("#show-chest").css("display")=="none"){
            $(this).next("#show-chest").show();
            $(this).find(".arrow-up").show();
            $(this).find(".arrow-down").hide();
        }
        else{
            $(this).next("#show-chest").hide();
            $(this).find(".arrow-up").hide();
            $(this).find(".arrow-down").show();
        }
    });	
    $("#back").click(function(){
        if($(this).next("#show-back").css("display")=="none"){
            $(this).next("#show-back").show();
            $(this).find(".arrow-up").show();
            $(this).find(".arrow-down").hide();
        }
        else{
            $(this).next("#show-back").hide();
            $(this).find(".arrow-up").hide();
            $(this).find(".arrow-down").show();
        }
    });	
    $("#arms").click(function(){
        if($(this).next("#show-arms").css("display")=="none"){
            $(this).next("#show-arms").show();
            $(this).find(".arrow-up").show();
            $(this).find(".arrow-down").hide();
        }
        else{
            $(this).next("#show-arms").hide();
            $(this).find(".arrow-up").hide();
            $(this).find(".arrow-down").show();
        }
    });	
    $("#legs").click(function(){
        if($(this).next("#show-legs").css("display")=="none"){
            $(this).next("#show-legs").show();
            $(this).find(".arrow-up").show();
            $(this).find(".arrow-down").hide();
        }
        else{
            $(this).next("#show-legs").hide();
            $(this).find(".arrow-up").hide();
            $(this).find(".arrow-down").show();
        }
    });		
});
//weight loss toggle script copy here===============
	$("#li1").click(function(){
		$("#pg1").slideToggle();
		$("#pg2").hide();
	});	
	$("#li2").click(function(){
		$("#pg2").slideToggle();
		$("#pg1").hide();
	});	
	$("#li3").click(function(){
		$("#pg3").slideToggle();
		$("#pg1").hide();
		$("#pg2").hide();
	});	
	$("#li4").click(function(){
		$("#pg4").slideToggle();
		$("#pg1").hide();
		$("#pg2").hide();
		$("#pg3").hide();
	});	
	$("#li5").click(function(){
		$("#pg5").slideToggle();
		$("#pg1").hide();
		$("#pg2").hide();
		$("#pg3").hide();
		$("#pg4").hide();
	});		
	$("#burpees").click(function(){
		$("#show-burpees").slideToggle();
	});	
	$("#one-arm-push-ups").click(function(){
		$("#show-one-arm-push-ups").slideToggle();
	});		
	$("#bent-over").click(function(){
		$("#show-bent-over").slideToggle();
	});	
	$("#biceps-curls").click(function(){
		$("#show-biceps-curls").slideToggle();
	});	
	$("#chin-up-grip").click(function(){
		$("#show-chin-up-grip").slideToggle();
	});	
	$("#hamstring-injuries").click(function(){
		$("#show-hamstring").slideToggle();
	});		
	
	
	
	var readMore = true;

	$(".button_weightloss").click(function(){
		$(this).next().slideToggle(500);
		if(readMore == true){
			$(this).children("p").html("Read less");
			readMore = false;
		} else {
			$(this).children("p").html("Read more");
			readMore = true;
		}
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
		
		
//simple fade in pages
$(function() {
	$("#rarrow").click(function(){
		if($(".present").is(":last-child")){
			console.log("return first");
			$(".page:first").addClass("present");
			$(".page:last").removeClass("present");
		} else {
			$(".present").next().addClass("present");
			$(".present:first").removeClass("present");
			console.log("next");
		}
	});
	$("#larrow").click(function(){
		if($(".present").is(":first-child")){
			console.log("return last");
			$(".page:last").addClass("present");
			$(".page:first").removeClass("present");
		} else {
			$(".present").prev().addClass("present");
			$(".present:last").removeClass("present");
			console.log("prev");
		}
	});
});
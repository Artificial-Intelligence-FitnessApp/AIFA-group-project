/* Toggle Popup */
$(".headline").click(function(){
	$("#news_bg").css({"display":"block"});
	$("#news_popup").css({"display":"inline-block"});
});

$("#news_bg").click(function(){
	$("#news_bg").css({"display":"none"});
	$("#news_popup").css({"display":"none"});
});

/* Reset Popup Scroll */
$(".headline").click(function(){
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
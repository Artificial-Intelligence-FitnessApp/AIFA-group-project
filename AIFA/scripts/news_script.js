/* Toggle Popup */
$(".news_headline").click(function(){
	$("#news_bg").css({"display":"block"});
	$("#news_popup").css({"display":"inline-block"});
});

$("#news_bg").click(function(){
	$("#news_bg").css({"display":"none"});
	$("#news_popup").css({"display":"none"});
});

/* Change Popup */
$("#news_one").click(function(){
	$("#news_popup_header h3").html($("#news_one h3").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_one img").attr("alt"));
	$("#news_popup_content div").html($("#news_one div").html());
});

$("#news_two").click(function(){
	$("#news_popup_header h3").html($("#news_two h3").html());
	$("#news_popup_content img").attr("src", $("#news_two img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_two img").attr("alt"));
	$("#news_popup_content div").html($("#news_two div").html());
});

$("#news_three").click(function(){
	$("#news_popup_header h3").html($("#news_three h3").html());
	$("#news_popup_content img").attr("src", $("#news_thre img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_three img").attr("alt"));
	$("#news_popup_content div").html($("#news_three div").html());
});

$("#news_four").click(function(){
	$("#news_popup_header h3").html($("#news_four h3").html());
	$("#news_popup_content img").attr("src", $("#news_four img").attr("src"));
	$("#news_popup_content img").attr("alt", $("#news_four img").attr("alt"));
	$("#news_popup_content div").html($("#news_four div").html());
});
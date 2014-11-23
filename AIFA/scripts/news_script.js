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
	$("#news_popup_header h3").html($("#news_one div h3").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html($("#news_one div p").html());
});

$("#news_two").click(function(){
	$("#news_popup_header h3").html($("#news_two div h3").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html($("#news_two div p").html());
});

$("#news_three").click(function(){
	$("#news_popup_header h3").html($("#news_three div h3").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html($("#news_three div p").html());
});

$("#news_four").click(function(){
	$("#news_popup_header h3").html($("#news_four div h3").html());
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html($("#news_four div p").html());
});
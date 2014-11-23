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
	$("#news_popup_header h3").html("Test One");
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html("<p>T1 P1</p><p>T1 P2</p><p>T1 P3</p>");
});

$("#news_two").click(function(){
	$("#news_popup_header h3").html("Test Two");
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html("<p>T2 P1</p><p>T2 P2</p><p>T2 P3</p>");
});

$("#news_three").click(function(){
	$("#news_popup_header h3").html("Test Three");
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html("<p>T3 P1</p><p>T3 P2</p><p>T3 P3</p>");
});

$("#news_four").click(function(){
	$("#news_popup_header h3").html("Test Four");
	$("#news_popup_content img").attr("src", $("#news_one img").attr("src"));
	$("#news_popup_content div").html("<p>T4 P1</p><p>T4 P2</p><p>T4 P3</p>");
});
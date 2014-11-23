var headline;
var imageurl;
var text;

$(".news_headline").click(function(){
	$("#news_bg").css({"display":"block"});
	$("#news_popup").css({"display":"inline-block"});
});

$("#news_bg").click(function(){
	$("#news_bg").css({"display":"none"});
	$("#news_popup").css({"display":"none"});
});
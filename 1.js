$(function(){
	$(".ul>li").hover(function(){
		$(this).children(".oul").stop().slideToggle(500);
		$(this).stop().toggleClass("bac");
	});
});
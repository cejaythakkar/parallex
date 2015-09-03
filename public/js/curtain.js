$(function(){
	var curtainWidth = 0;
	$(window).bind('mousewheel',function(e){
		var left = $(window).scrollLeft(),
			$parallax = $('.parallax').width(),
			wheelDelta = e.originalEvent.wheelDelta,
			val = left + (-1 * e.originalEvent.wheelDelta);
			curtainWidth = (wheelDelta < 0) && (curtainWidth + 28.5) || (curtainWidth - 28.5);
			$(window).scrollLeft(val);
			$('#curtain').width(val + curtainWidth);
		// $(el).css('backgroundPosition',"50% " + y_pos +'px');
	});
});	
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>10){
			$("header").addClass("small");
			$(".main").addClass("scroll");
		}else{
			$("header").removeClass("small");
            $(".main").removeClass("scroll");
		}
	});
});

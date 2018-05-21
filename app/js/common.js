$(function() {

	// Пользовательские 
	$('.chosen-select').chosen({
		disable_search: true,
	});
	
	var send = $('.dash_search_input');
	$('.search').click(function(){
		if($(send).val() !== ""){
			// submit
			alert($(send).val());
		}
	})

	$('#sliderz .slider').prrpleSlider({
		transition: 'fade',
		loop: true
	});
	
	$('.burger').on("click", function(){

		if($(".burger").hasClass('open')){
			$(".mob_menu").slideToggle("slow", function(){

				$(".one").css( "transform","rotate(0)");
				$(".one").css( "margin-bottom", "5px");
				$(".one").css( "bottom", "0px");
				$(".two").css( "opacity", "1");
				$(".three").css( "transform","rotate(0deg)");
				$(".three").css( "margin-bottom", "5px");
				$(".three").css( "bottom", "0px");
				$(".burger").removeClass('open');
				
			})

		} else {
			$(".mob_menu").slideToggle("slow", function(){
				$(".one").css( "transform","rotate(45deg)", "margin-bottom", "0");
				$(".one").css( "margin-bottom", "-11px");
				$(".one").css( "bottom","10px");
				$(".two").css( "opacity", "0");
				$(".three").css( "transform","rotate(-45deg)", "margin-bottom", "0");
				$(".three").css( "margin-bottom", "0");
				$(".three").css( "bottom","10px");
				$(".burger").addClass('open');
			})	
		}

	})
	$('.sub-menu ul').hide();
		$(".sub-menu a").click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

});
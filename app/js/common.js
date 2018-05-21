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
	

});
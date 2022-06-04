$(document).ready(function() {
	$(".js__popup-login").on("click", function() {
		$(".popup__login").addClass("popup_animation");
		$(".page-body").css({"overflow": "hidden"});
		// $(".popup__login").css({"display": "block"});
	});

	$(".js_popup-hide").on("click", function() {
		$(".popup__login").removeClass("popup_animation");
		$(".page-body").css({"overflow": "auto"});
	});
});
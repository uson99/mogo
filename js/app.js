$(function () {
	var header = $("#header"),
		introH = $("#intro").innerHeight();
	scrollOffset = $(window).scrollTop();

	/* fixed header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* smooth scroll */
	$("[date-scroll]").on("click", function (event) {
		event.preventDefault();
		var blockId = $(this).date('scroll'),
			blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});




});
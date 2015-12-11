jQuery(document).ready(function($) {

	$("#login-link").click(function(event){
			var form = $('#login-form');
			if (form.length > 0)
			{
					form.toggle();
					return false;
			}
	});

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800,'swing');
	});


	$(".company .image-holder").click(function(e){
	//alert('ver');
		//e.preventDefault();
	 //   $(".company").removeClass("hover");  // remove active class from all
	 //   $(this).parent(".company").toggleClass("hover");         // add active class to clicked element
				});
	
	if($(window).width() < 768){

		$(".company .image-holder").click(function(e){
			//e.preventDefault();
			if($(this).parent('.company').hasClass('hover')) {
				$(this).parent(".company").removeClass("hover"); 
			} else {
				$(".company").removeClass("hover"); 
				$(this).parent(".company").toggleClass("hover");
			}
			 
		});

		$(".company .information").click(function(){
			$(".company").removeClass("hover");
		});
	}
	 
	// $(".company .image-holder a.more-info").unbind("click");
	
	
	$("#company .sidebar .sub-menu a").click(function(e) {
		e.preventDefault();
		curContent = $(this).attr("href");
		$("#company .sidebar .sub-menu li").removeClass("active");
		$(this).parents('li').addClass("active");
		$("#company .main-content").hide();
		$(curContent).fadeIn("slow");
	});
	
	$('body').click(function(e) {
		if (!$(e.target).closest('.company').length){
			$(".company").removeClass("hover");
		}
	});
	
	$(".social li.heart").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	if($(window).width() < 992){
		$(".social li.share").click(function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
		});
	}
	
	$('.apply-form .form-group .form-control').focus(function() {
		$(this).parent('.form-group').addClass('focus');
	});
	$('.apply-form .form-group .form-control').blur(function() {
		if( $(this).val().length === 0 ) {
			$(this).parent('.form-group').removeClass('focus');
		}
	});
	
	$('.apply-form .form-group .form-control').each(function() {
		if( $(this).val().length != 0 ) {
			$(this).parent('.form-group').addClass('focus');
		}
		
	});
	
	$('.btn-green').click(function(e) {
		if($(this).hasClass('open-form')) {
			e.preventDefault();
			$(this).removeClass('open-form');
			$('.form-wrap').toggleClass('open');
		}
		
	});
	function youframe() {
		var frameWidth = $('iframe.youtube').width();
		$('iframe.youtube').css('height', frameWidth *.563); 
	}
	youframe();
	$(window).resize(youframe);

	function handleResize() {
		// var h = $(window).height();
		// $('.fullpage').css({'height':h+'px'});
	}

	$(function(){
		handleResize();

		$(window).resize(function(){
			handleResize();
		});
	});

	$('.mtRadio, .mtCheckbox').prettyCheckable();

	$('.goTop').click(function(e) {
		e.stopPropagation();
		$('html, body').animate({
			scrollTop: 0
		},800)
		return false;
	});


	$("#owl-service").owlCarousel({
		autoplay:true,
		autoplayHoverPause: false,
		navigation : false,
		margin: 6,
		loop:true,
		autoplayTimeout: 5000,
		smartSpeed: 600,
		onDragged: callback,
		mouseDrag: true,
		dragEndSpeed:1000,
		touchDra:true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			620:{
				items:3
			},
			900:{
				items:5
			},
			1200:{
				items:6
			},
			1400:{
				items:7
			}
		}
	});
	function callback(event) {
		if($(window).width() > 767){
			$(".company .image-holder").click(function(e){
				//e.preventDefault();
				$(".company").removeClass("hover");
				if(!$(this).parents('.company-info').find('.company').hasClass('hover')){
					$(this).parents('.company-info').css('z-index','1110');
				} else{
				}
				if($(this).parent('.company').hasClass('hover')) {
					$(this).parent(".company").removeClass("hover"); 
				} else {
					$(".company").removeClass("hover"); 
					$(this).parent(".company").toggleClass("hover");
				}
			});

			$(".company .information").click(function(){
				$(".company").removeClass("hover");
				$(this).parents('.company-info').css('z-index','1000');
			});
		}
	}

	$(document).on('change', 'input[type=file]', function() {
		var input = $(this),
		// numFiles = input.get(0).files ? input.get(0).files.length : 1,
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		$(this).parents('.form-control').find('.file-input').text(label);
	});


	var wow = new WOW(
		{
			boxClass:     'wowload',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true        // act on asynchronously loaded content (default is true)
		}
	);

	wow.init();


	$('.carousel').swipe({
		swipeLeft: function() {
			$(this).carousel('next');
		},
		swipeRight: function() {
			$(this).carousel('prev');
		},
		allowPageScroll: 'vertical'
	});


});

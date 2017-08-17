// JavaScript Document

$(document).ready(function(){
  $(window).scroll(function() {
  $('#viewBag')
      .stop()
      .animate({top: $(document).scrollTop()},'slow');
  }); 
  $(window).load(function() {
	  $('#slider').nivoSlider({
	   	effect: 'fade'
	  });
	 
  });

  $(function() {
	    //single book
	    $('#myBook').booklet({
			arrows: true,
			pageNumbers: false,
			pagePadding: 2
		});

	});
	$(".photoBook").fancybox({
		
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'padding'			: '2'
	});
	$(".loginPage").fancybox({
		
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'padding'			: '2',
		'height'			: '30',
		'width'				: '64'
	});
	$(".signUpPage").fancybox({
		
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'padding'			: '2',
		'height'			: '70',
		'width'				: '60'
	});
});
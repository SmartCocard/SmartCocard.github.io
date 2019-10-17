 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);

// Submit Application with Class
function submit_by_class() {
	var BusinessName = document.getElementById("BusinessName");
	var BusinessAddress = document.getElementById("BusinessAddress");
	var BusinessPhone = document.getElementById("BusinessPhone");
	var BusinessTax = document.getElementById("BusinessTax");
	var LegalBusinessName = document.getElementById("LegalBusinessName");
	var BusinessCheck = document.getElementById("BusinessCheck");
	const application_form = document.getElementById("form_id");
	const shake_location = document.querySelector("div#shake-spot");
	var form1 = document.getElementById("form_area1");
	var form2 = document.getElementById("form_area2");

	// Show form area
	form1.classList.remove("hide-check");
	form1.classList.add("show-check");
	application_form.classList.remove("hide-check");
	application_form.classList.add("show-check");

	if (validation()) {
		var x = document.getElementsByClassName("form_class");
		x[0].submit();
		var submit_wait = document.getElementsByClassName("submit_wait")[0].style.display="none";
		var submit_success = document.getElementsByClassName("submit_success")[0].style.display="block";
		
		// Remove missing required input warning
		document.getElementById("main").classList.remove("show-check");
		document.getElementById("main").classList.add("hide-check");

		// Hide Application 
		form1.classList.add("hide-check");
		form1.classList.remove("show-check");
		application_form.classList.add("hide-check");
		application_form.classList.remove("show-check");

		// Show thank you
		var thankyou = document.getElementById("thankyou");
		thankyou.classList.remove("invisible");
		thankyou.classList.add("visible");
		
		// Submit
		application_form.submit();
		}
	else {
		// Show Missing Required input warning
		document.getElementById("main").classList.remove("hide-check");
		document.getElementById("main").classList.add("show-check");	

		// Apply Shake Effect for incorrect input to help UX
		shake_location.classList.add("apply-shake");
		shake_location.addEventListener("animationend", (e) => {
			shake_location.classList.remove("apply-shake");
		});		
	}	
}

// Forum Validator
function validation() {
	
	// Applicant Information Var
	var ApplicantContactName = document.getElementById("ContactName");
	var ApplicantContactAddress = document.getElementById("ContactAddress");
	var ApplicantEmail = document.getElementById("ApplicantEmail");

	const applicantName_location = document.querySelector(".aName");
	const applicantAddress_location = document.querySelector(".aAddress");
	const applicantEmail_location = document.querySelector(".aEmail");
	
	var result = true;
	
	// Applicant Information Validation
	// 1. Owner's Name
	if (ApplicantContactName.value == '') {
		result = false;
		document.getElementById("required7").style.color = "red";
		applicantName_location.classList.add("visible");
		applicantName_location.classList.remove("invisible");
	} else {
		applicantName_location.classList.add("invisible");
		applicantName_location.classList.remove("visible");
	}
	// 2. Owner's Address
	if (ApplicantContactAddress.value == '') {
		result = false;
		document.getElementById("required8").style.color = "red";
		applicantAddress_location.classList.add("visible");
		applicantAddress_location.classList.remove("invisible");
	} else {
		applicantAddress_location.classList.add("invisible");
		applicantAddress_location.classList.remove("visible");
	}
	// 3. Owner's Email
	if (ApplicantEmail.value == '' ) {
		result = false;
		document.getElementById("required9").style.color="red";
		applicantEmail_location.classList.add("visible");
		applicantEmail_location.classList.remove("invisible");
	} else {
		if (!ValidateEmail(ApplicantEmail.value)) {
			// invalid email format
			document.getElementById("invalid-message").innerHTML ="Invalid email format.";
			result = false;
		} else {
			document.getElementById("invalid-message").innerHTML ="";
			applicantEmail_location.classList.add("invisible");
			applicantEmail_location.classList.remove("visible");
		}		
	}

	return result;
}

function ValidateEmail(mail) {
	return (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false);
}

function ValidatePhone(phone) {
	return (phone.match(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/) ? true : false);
}

function showForum() {
	var form = document.getElementById("application-form");
	form.classList.remove("hide-check");
	form.classList.add("show-check");
}

$('#myButton').click(function() {	
	$('html, body').animate({
		scrollTop: $('#Start-Applying').offset().top
	}, 1000);
	$('#myButton').prop('disabled', true);
	$('#myButton').text('Thank you for contacting us!');
});
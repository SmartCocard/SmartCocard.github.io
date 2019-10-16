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
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
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


// function makeTimer() {

// 		var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");			
// 		endTime = (Date.parse(endTime) / 1000);

// 		var now = new Date();
// 		now = (Date.parse(now) / 1000);

// 		var timeLeft = endTime - now;

// 		var days = Math.floor(timeLeft / 86400); 
// 		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
// 		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
// 		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

// 		if (hours < "10") { hours = "0" + hours; }
// 		if (minutes < "10") { minutes = "0" + minutes; }
// 		if (seconds < "10") { seconds = "0" + seconds; }

// 		$("#days").html(days + "<span>Days</span>");
// 		$("#hours").html(hours + "<span>Hours</span>");
// 		$("#minutes").html(minutes + "<span>Minutes</span>");
// 		$("#seconds").html(seconds + "<span>Seconds</span>");		

// }

//setInterval(function() { makeTimer(); }, 1000);

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

	if (validation()) {
		var x = document.getElementsByClassName("form_class");
		x[0].submit();
		var submit_wait = document.getElementsByClassName("submit_wait")[0].style.display="none";
		var submit_success = document.getElementsByClassName("submit_success")[0].style.display="block";
		document.getElementById("main").classList.remove("show-check");
		document.getElementById("main").classList.add("hide-check");
		application_form.submit();
		}
	else {
		document.getElementById("main").classList.remove("hide-check");
		document.getElementById("main").classList.add("show-check");		
		shake_location.classList.add("apply-shake");
		shake_location.addEventListener("animationend", (e) => {
			shake_location.classList.remove("apply-shake");
		});		
	}	
}

// Forum Validator
function validation() {
	// Business Information Var
	var BusinessName = document.getElementById("BusinessName");
	var BusinessAddress = document.getElementById("BusinessAddress");
	var BusinessPhone = document.getElementById("BusinessPhone");
	var BusinessTax = document.getElementById("BusinessTax");
	var LegalBusinessName = document.getElementById("LegalBusinessName");
	// var BusinessCheck = document.getElementById("BusinessCheck");

	const businessName_location = document.querySelector(".bName");
	const businessAddress_location = document.querySelector(".bAddr");
	const businessPhone_location = document.querySelector(".bPhone");
	const businessTax_location = document.querySelector(".bTax");
	const businessLegalName_location1 = document.querySelector(".bLegalName1");
	const businessLegalName_location2 = document.querySelector(".bLegalName2");
	// const businessCheck_location = document.querySelector(".bCheck");

	// Applicant Information Var
	var ApplicantContactName = document.getElementById("ContactName");
	var ApplicantContactAddress = document.getElementById("ContactAddress");
	var ApplicantEmail = document.getElementById("ApplicantEmail");
	var ApplicantDOB = document.getElementById("ApplicantDOB");
	// var ApplicantLicense = document.getElementById("ApplicantLicense");

	const applicantName_location = document.querySelector(".aName");
	const applicantAddress_location = document.querySelector(".aAddress");
	const applicantEmail_location = document.querySelector(".aEmail");
	const applicantDOB_location = document.querySelector(".aDOB");
	// const applicantLicense_location = document.querySelector(".aLicense");
	
	var result = true;

	// Business Information Validation
	// 1. DBA
	if (BusinessName.value == '' ) {
		result = false;
		document.getElementById("required1").style.color="red";
		businessName_location.classList.add("visible");
		businessName_location.classList.remove("invisible");
	} else {
		businessName_location.classList.add("invisible");
		businessName_location.classList.remove("visible");
	}
	// 2. Addr
	if (BusinessAddress.value == '') {
		result = false;
		document.getElementById("required2").style.color="red";
		businessAddress_location.classList.add("visible");
		businessAddress_location.classList.remove("invisible");
	} else {
		businessAddress_location.classList.add("invisible");
		businessAddress_location.classList.remove("visible");
	}
	// 3. Phone
	if (BusinessPhone.value == '' ) {
		result = false;
		document.getElementById("required3").style.color="red";
		businessPhone_location.classList.add("visible");
		businessPhone_location.classList.remove("invisible");
	} else {
		if (!ValidatePhone(BusinessPhone.value)) {
			// invalid phone format
			document.getElementById("invalid-phone").innerHTML = "Please enter valid format of XXX-XXX-XXXX.";
			result = false;
		} else {
			document.getElementById("invalid-phone").innerHTML = "";
			businessPhone_location.classList.add("invisible");
			businessPhone_location.classList.remove("visible");
		}		
	}
	// 4. Tax ID
	if (BusinessTax.value == '') {
		result = false;
		document.getElementById("required4").style.color="red";
		businessTax_location.classList.add("visible");
		businessTax_location.classList.remove("invisible");
	} else {
		if (!ValidateTax(BusinessTax.value)) {
			// invalid Tax ID format
			document.getElementById("invalid-tax").innerHTML = "Please enter valid id. XX-XXXXXXX"
			result = false;
		} else {
			document.getElementById("invalid-tax").innerHTML = "";
			businessTax_location.classList.add("invisible");
			businessTax_location.classList.remove("visible");
		}		
	}
	// 5. Legal Business Name
	if (LegalBusinessName.value == '') {
		result = false;
		document.getElementById("required5").style.color="red";
		businessLegalName_location1.classList.remove("visible");
		businessLegalName_location1.classList.add("invisible");
		businessLegalName_location2.classList.remove("invisible");
		businessLegalName_location2.classList.add("visible");
	} else {
		businessLegalName_location1.classList.remove("invisible");
		businessLegalName_location1.classList.add("visible");
		businessLegalName_location2.classList.remove("visible");
		businessLegalName_location2.classList.add("invisible");
	}
	// 6. Void Check Copy
	// if (BusinessCheck.value == '') {
	// 	result = false;
	// 	document.getElementById("required6").style.color="red";
	// 	businessCheck_location.classList.add("visible");
	// 	businessCheck_location.classList.remove("invisible");
	// } else {
	// 	businessCheck_location.classList.add("invisible");
	// 	businessCheck_location.classList.remove("visible");
	// }	

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
	// 4. Date of Birth
	if (ApplicantDOB.value == '') {
		result = false;
		document.getElementById("required10").style.color="red";
		applicantDOB_location.classList.add("visible");
		applicantDOB_location.classList.remove("invisible");
	} else {
		applicantDOB_location.classList.add("invisible");
		applicantDOB_location.classList.remove("visible");
	}
	// 5. Driver's License
	// if (ApplicantLicense.value == '') {
	// 	result = false;
	// 	document.getElementById("required11").style.color="red";
	// 	applicantLicense_location.classList.add("visible");
	// 	applicantLicense_location.classList.remove("invisible");
	// } else {
	// 	applicantLicense_location.classList.add("invisible");
	// 	applicantLicense_location.classList.remove("visible");
	// }

	//alert("Result: " + result);
	return result;
}

function ValidateEmail(mail) {
	return (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false);
}

function ValidatePhone(phone) {
	return (phone.match(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/) ? true : false);
}

function ValidateTax(tax) {
	return (tax.match(/^(\([0-9]{2}\)|[0-9]{2}-)[0-9]{7}$/) ? true : false);
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
});
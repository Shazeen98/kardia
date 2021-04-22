/*=======services======*/
$(function () {
	new WOW().init();
});

/*=====work===*/
$(function () {
	$("#work").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});
/*=================team===================*/
$(function () {
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,

		responsive: {
			/*0-480*/
			0: {
				items: 1
			},
			/*480-768*/
			480: {
				items: 2
			},
			/*grater then 768*/
			768: {
				items: 3
			},


		}

	});
});

/*=================testimonials===================*/
$(function () {
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
});

/*=================stats===================*/
$(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
});
/*=================clients===================*/
$(function () {
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {

			0: {
				items: 1
			},
			480: {
				items: 3
			},
			768: {
				items: 5
			},

			992: {
				items: 6
			}
		}
	});
});

/*=================Navigation===================*/
//show /hide transparent black navigation
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//hide navbar
			$("nav").removeClass("dotclass-top-nav");
			//hiding back-to-top btn
			$("#back-to-top").fadeOut();
		} else {
			//show navbar
			$("nav").addClass("dotclass-top-nav");
			$("#back-to-top").fadeIn();
			//show back-to-top-btn
		}

	});

});

//smooth scrolling
$(function () {
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();
		//get section id 
		var section = $(this).attr("href");

		$('html,body').animate({
			scrollTop: $(section).offset().top - 60
		}, 1250, "easeInOutExpo");

	});
});

//close mobile menu on click for medium device
$(function () {
	$(".navbar-collapse ul li a").on("click touch", function () {
		$(".navbar-toggle").click();

	});
});

//form valodation
function validateForm() {

  var fullName = document.forms["myForm"]["Full-name"].value;
  var email = document.forms["myForm"]["Email-Address"].value;
  if (fullName == "" ){
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email Address must be filled out");
    return false;
  }
}

function valid (){
	var fullName = document.forms["myForm"]["Full-name"].value;
	var email = document.forms["myForm"]["Email-Address"].value;
	var body = document.forms["myForm"]["message"].value;
	sendEmail(fullName,email,body);
	fullName.clear();
	email.clear();
	body.clear();
}


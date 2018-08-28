// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
// 	    e.preventDefault();

// 	    var target = this.hash,
// 	    $target = $(target);

// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 400, 'swing', function () {
// 	        window.location.hash = target;
// 	    });
// 	});
// });

// var type = new TypeIt('.type-it', {
// 	speed: 90,
// 	strings: ["web <em id=\"designer\">designer&nbsp;</em>", "front-end <em id=\"developer\">developer</em>", "<em id=\"uxui\">UX/UI&nbsp;</em>enthusiast"],
// 	autoStart: true,
// 	lifeLike: true,
// 	loop: true,
// 	breakLines: false,
// 	startDelay: 1500,
// 	nextStringDelay: 3000
// });

// var phone = $(".phone");

// phone.on("click touchstart", function(event) {
// 	if (phone.hasClass('nopointer')) {
// 		event.stopPropagation();
// 	} else  {
// 		phone.html('<i class="fas fa-phone"></i> 607-342-1509');
// 		phone.addClass('nopointer');
// 	}
// });

var captcha = $(".captcha");
var textArea = $("#message");
textArea.on("touchstart click focus", function() {
	if (captcha.hasClass('hidden')) {
		captcha.removeClass('hidden');
	};
});

$("form").submit(function(e) {
	e.preventDefault();
  
	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function() {
	  $form[0].reset();
	  captcha.addClass('hidden');
	  swal({title: 'Thanks!',
	  type: 'success',
	  html:
		'Your message was submitted successfully.',
	  showCloseButton: true,
	  focusConfirm: true,
	  confirmButtonText: 'Okay',
	  background: '#fff',
	  });
	});
  });

/*
//-- Pause 
setTimeout(() => {
	type.freeze();
  }, 3200);
  
//-- Resume
setTimeout(() => {
type.unfreeze();
}, 6000);
//-- pause
setTimeout(() => {
type.freeze();
}, 10500);
//-- resume
setTimeout(() => {
	type.unfreeze();
  }, 13500);

//-- pause
setTimeout(() => {
	type.freeze();
	}, 17850);

//-- resume
setTimeout(() => {
	type.unfreeze();
  }, 21500);
*/

/*
particlesJS.load('particles', 'src/particlesjs-config.json', function() {
    console.log('Hey there! If you\'re interested in working with me, shoot me an email: hello@brandonnmoore.co');
    console.log('Thanks for checking out my stuff!');
});
*/
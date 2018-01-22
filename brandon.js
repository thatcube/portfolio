$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
var type = new TypeIt('.type-it', {
	speed: 90,
	strings: ["web <em>designer</em>", "full stack <strong>developer</strong>", "<strong>UX/UI</strong> enthusiast"],
	autoStart: true,
	lifeLike: true,
	loop: true,
	breakLines: false,
	startDelay: 1500,
	nextStringDelay: 1000
});
//-- Pause 
setTimeout(() => {
	type.freeze();
  }, 3000);
  
//-- Resume
setTimeout(() => {
type.unfreeze();
}, 5000);
//-- pause
setTimeout(() => {
type.freeze();
}, 8500);
//-- resume
setTimeout(() => {
	type.unfreeze();
  }, 10500);

//-- pause
setTimeout(() => {
	type.freeze();
	}, 14000);

//-- resume
setTimeout(() => {
	type.unfreeze();
  }, 16000);

/*
particlesJS.load('particles', 'src/particlesjs-config.json', function() {
    console.log('Hey there! If you\'re interested in working with me, shoot me an email: hello@brandonnmoore.co');
    console.log('Thanks for checking out my stuff!');
});
*/
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
	strings: ["web <em id=\"designer\">designer&nbsp;</em>", "full stack <em id=\"developer\">developer</em>", "<em id=\"uxui\">UX/UI&nbsp;</em> enthusiast"],
	autoStart: true,
	lifeLike: true,
	loop: true,
	breakLines: false,
	startDelay: 3500,
	nextStringDelay: 2000
});
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

/*
particlesJS.load('particles', 'src/particlesjs-config.json', function() {
    console.log('Hey there! If you\'re interested in working with me, shoot me an email: hello@brandonnmoore.co');
    console.log('Thanks for checking out my stuff!');
});
*/
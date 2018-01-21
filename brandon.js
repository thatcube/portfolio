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
new TypeIt('.type-it', {
	speed: 90,
	strings: ["web designer", "full stack developer", "UX/UI enthusiast"],
	autoStart: false,
	lifeLike: true,
	loop: true,
	breakLines: false,
	startDelay: 2000,
	nextStringDelay: 3000,
	loopDelay: 3000
})

/*
particlesJS.load('particles', 'src/particlesjs-config.json', function() {
    console.log('Hey there! If you\'re interested in working with me, shoot me an email: hello@brandonnmoore.co');
    console.log('Thanks for checking out my stuff!');
});
*/
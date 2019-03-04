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
textArea.on("touchstart click focus", function () {
	if (captcha.hasClass('hidden')) {
		captcha.removeClass('hidden');
	};
});

$("form").submit(function (e) {
	e.preventDefault();

	var $form = $(this);
	$.post($form.attr("action"), $form.serialize()).then(function () {
		$form[0].reset();
		captcha.addClass('hidden');
		swal({
			title: 'Thanks!',
			type: 'success',
			html: 'Your message was submitted successfully.',
			showCloseButton: true,
			focusConfirm: true,
			confirmButtonText: 'Okay',
			background: '#fff',
		});
	});
});

// $(".theme-toggle").click(function(){
// 	$('html').attr('data-theme', function(index, attr){
// 			return attr == 'dark' ? null : 'dark';
// 	});
// });

function setNight() {
	if (sessionStorage.getItem('theme')) {
		sessionStorage.clear();
	} else {
		sessionStorage.setItem('theme', 'dark');
	}
}

$('.theme-toggle--container').click(function () {
	document.documentElement.classList.add('color-theme-in-transition')
	window.setTimeout(function () {
		document.documentElement.classList.remove('color-theme-in-transition')
	}, 1000);
	$('html').attr('data-theme', function (index, attr) {
		return attr == 'dark' ? null : 'dark';
	});
	setNight();

});

$(document).ready(function () {
	var currentDate = new Date();
	var currentHour = currentDate.getHours();
	var theme = sessionStorage.getItem('theme');
	if (currentHour >= 20 && currentHour <= 23) {
		$('html').attr('data-theme', 'dark');
	} else if (currentHour >= 0 && currentHour <= 6) {
		$('html').attr('data-theme', 'dark');
	} else if (sessionStorage.getItem('theme')) {
		$('html').attr('data-theme', 'dark');
	} else {
		$('html').attr('data-theme', null);
	}
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

/*!
 * sweetalert2 v7.15.1
 * Released under the MIT License.
 */
! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
}(this, function () {
	"use strict";
	var e = {
			title: "",
			titleText: "",
			text: "",
			html: "",
			footer: "",
			type: null,
			toast: !1,
			customClass: "",
			target: "body",
			backdrop: !0,
			animation: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			showConfirmButton: !0,
			showCancelButton: !1,
			preConfirm: null,
			confirmButtonText: "OK",
			confirmButtonAriaLabel: "",
			confirmButtonColor: null,
			confirmButtonClass: null,
			cancelButtonText: "Cancel",
			cancelButtonAriaLabel: "",
			cancelButtonColor: null,
			cancelButtonClass: null,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusCancel: !1,
			showCloseButton: !1,
			closeButtonAriaLabel: "Close this dialog",
			showLoaderOnConfirm: !1,
			imageUrl: null,
			imageWidth: null,
			imageHeight: null,
			imageAlt: "",
			imageClass: null,
			timer: null,
			width: null,
			padding: null,
			background: null,
			input: null,
			inputPlaceholder: "",
			inputValue: "",
			inputOptions: {},
			inputAutoTrim: !0,
			inputClass: null,
			inputAttributes: {},
			inputValidator: null,
			grow: !1,
			position: "center",
			progressSteps: [],
			currentProgressStep: null,
			progressStepsDistance: null,
			onBeforeOpen: null,
			onOpen: null,
			onClose: null,
			useRejections: !1,
			expectRejections: !1
		},
		t = ["useRejections", "expectRejections"],
		n = function (e) {
			var t = {};
			for (var n in e) t[e[n]] = "swal2-" + e[n];
			return t
		},
		o = n(["container", "shown", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "has-input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
		i = n(["success", "warning", "info", "question", "error"]),
		r = "SweetAlert2:",
		a = function (e) {
			console.warn(r + " " + e)
		},
		s = function (e) {
			console.error(r + " " + e)
		},
		u = [],
		l = function (e) {
			-1 === u.indexOf(e) && (u.push(e), a(e))
		},
		c = function (e) {
			return "function" == typeof e ? e() : e
		},
		d = {
			previousActiveElement: null,
			previousBodyPadding: null
		},
		p = function (e, t) {
			return !!e.classList && e.classList.contains(t)
		},
		f = function (e) {
			if (e.focus(), "file" !== e.type) {
				var t = e.value;
				e.value = "", e.value = t
			}
		},
		m = function (e, t, n) {
			e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function (t) {
				e.forEach ? e.forEach(function (e) {
					n ? e.classList.add(t) : e.classList.remove(t)
				}) : n ? e.classList.add(t) : e.classList.remove(t)
			}))
		},
		g = function (e, t) {
			m(e, t, !0)
		},
		v = function (e, t) {
			m(e, t, !1)
		},
		h = function (e, t) {
			for (var n = 0; n < e.childNodes.length; n++)
				if (p(e.childNodes[n], t)) return e.childNodes[n]
		},
		b = function (e) {
			e.style.opacity = "", e.style.display = e.id === o.content ? "block" : "flex"
		},
		y = function (e) {
			e.style.opacity = "", e.style.display = "none"
		},
		w = function (e) {
			for (; e.firstChild;) e.removeChild(e.firstChild)
		},
		C = function (e) {
			return e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		},
		x = function (e, t) {
			e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
		},
		B = function () {
			return document.body.querySelector("." + o.container)
		},
		k = function (e) {
			var t = B();
			return t ? t.querySelector("." + e) : null
		},
		S = function () {
			return k(o.popup)
		},
		A = function () {
			return S().querySelectorAll("." + o.icon)
		},
		E = function () {
			return k(o.title)
		},
		P = function () {
			return k(o.content)
		},
		L = function () {
			return k(o.image)
		},
		T = function () {
			return k(o.progresssteps)
		},
		O = function () {
			return k(o.confirm)
		},
		q = function () {
			return k(o.cancel)
		},
		V = function () {
			return k(o.actions)
		},
		j = function () {
			return k(o.footer)
		},
		I = function () {
			return k(o.close)
		},
		R = function () {
			var e = Array.prototype.slice.call(S().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
					return (e = parseInt(e.getAttribute("tabindex"))) > (t = parseInt(t.getAttribute("tabindex"))) ? 1 : e < t ? -1 : 0
				}),
				t = Array.prototype.slice.call(S().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
			return function (e) {
				for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
				return t
			}(e.concat(t))
		},
		N = function () {
			return !document.body.classList.contains(o["toast-shown"])
		},
		D = function () {
			return "undefined" == typeof window || "undefined" == typeof document
		},
		H = ('\n <div aria-labelledby="' + o.title + '" aria-describedby="' + o.content + '" class="' + o.popup + '" tabindex="-1">\n   <div class="' + o.header + '">\n     <ul class="' + o.progresssteps + '"></ul>\n     <div class="' + o.icon + " " + i.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + o.icon + " " + i.question + '">\n       <span class="' + o["icon-text"] + '">?</span>\n      </div>\n     <div class="' + o.icon + " " + i.warning + '">\n       <span class="' + o["icon-text"] + '">!</span>\n      </div>\n     <div class="' + o.icon + " " + i.info + '">\n       <span class="' + o["icon-text"] + '">i</span>\n      </div>\n     <div class="' + o.icon + " " + i.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + o.image + '" />\n     <h2 class="' + o.title + '" id="' + o.title + '"></h2>\n     <button type="button" class="' + o.close + '">×</button>\n   </div>\n   <div class="' + o.content + '">\n     <div id="' + o.content + '"></div>\n     <input class="' + o.input + '" />\n     <input type="file" class="' + o.file + '" />\n     <div class="' + o.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + o.select + '"></select>\n     <div class="' + o.radio + '"></div>\n     <label for="' + o.checkbox + '" class="' + o.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + o.textarea + '"></textarea>\n     <div class="' + o.validationerror + '" id="' + o.validationerror + '"></div>\n   </div>\n   <div class="' + o.actions + '">\n     <button type="button" class="' + o.confirm + '">OK</button>\n     <button type="button" class="' + o.cancel + '">Cancel</button>\n   </div>\n   <div class="' + o.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
		M = function (e) {
			var t = B();
			if (t && (t.parentNode.removeChild(t), v([document.documentElement, document.body], [o["no-backdrop"], o["has-input"], o["toast-shown"]])), !D()) {
				var n = document.createElement("div");
				n.className = o.container, n.innerHTML = H, ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);
				var i = S(),
					r = P(),
					a = h(r, o.input),
					u = h(r, o.file),
					l = r.querySelector("." + o.range + " input"),
					c = r.querySelector("." + o.range + " output"),
					d = h(r, o.select),
					p = r.querySelector("." + o.checkbox + " input"),
					f = h(r, o.textarea);
				i.setAttribute("role", e.toast ? "alert" : "dialog"), i.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || i.setAttribute("aria-modal", "true");
				var m = function () {
					ie.isVisible() && ie.resetValidationError()
				};
				return a.oninput = m, u.onchange = m, d.onchange = m, p.onchange = m, f.oninput = m, l.oninput = function () {
					m(), c.value = l.value
				}, l.onchange = function () {
					m(), l.nextSibling.value = l.value
				}, i
			}
			s("SweetAlert2 requires document to initialize")
		},
		U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		W = function (e, t) {
			if (!e) return y(t);
			if ("object" === (void 0 === e ? "undefined" : U(e)))
				if (t.innerHTML = "", 0 in e)
					for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
				else t.appendChild(e.cloneNode(!0));
			else e && (t.innerHTML = e);
			b(t)
		},
		z = function () {
			if (D()) return !1;
			var e = document.createElement("div"),
				t = {
					WebkitAnimation: "webkitAnimationEnd",
					OAnimation: "oAnimationEnd oanimationend",
					animation: "animationend"
				};
			for (var n in t)
				if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
			return !1
		}(),
		K = {
			email: function (e) {
				return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.reject("Invalid email address")
			},
			url: function (e) {
				return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? Promise.resolve() : Promise.reject("Invalid URL")
			}
		};

	function Z(e) {
		e.inputValidator || Object.keys(K).forEach(function (t) {
			e.input === t && (e.inputValidator = e.expectRejections ? K[t] : ie.adaptInputValidator(K[t]))
		}), (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (a('Target parameter is not valid, defaulting to "body"'), e.target = "body");
		var t = void 0,
			n = S(),
			r = "string" == typeof e.target ? document.querySelector(e.target) : e.target;
		t = n && r && n.parentNode !== r.parentNode ? M(e) : n || M(e), e.width && (t.style.width = "number" == typeof e.width ? e.width + "px" : e.width), e.padding && (t.style.padding = "number" == typeof e.padding ? e.padding + "px" : e.padding), e.background && (t.style.background = e.background);
		for (var u = window.getComputedStyle(t).getPropertyValue("background-color"), l = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), c = 0; c < l.length; c++) l[c].style.backgroundColor = u;
		var d = B(),
			p = E(),
			f = P().querySelector("#" + o.content),
			m = V(),
			h = O(),
			C = q(),
			k = I(),
			R = j();
		if (e.titleText ? p.innerText = e.titleText : e.title && (p.innerHTML = e.title.split("\n").join("<br />")), "string" == typeof e.backdrop ? B().style.background = e.backdrop : e.backdrop || g([document.documentElement, document.body], o["no-backdrop"]), e.html ? W(e.html, f) : e.text ? (f.textContent = e.text, b(f)) : y(f), e.position in o ? g(d, o[e.position]) : (a('The "position" parameter is not valid, defaulting to "center"'), g(d, o.center)), e.grow && "string" == typeof e.grow) {
			var N = "grow-" + e.grow;
			N in o && g(d, o[N])
		}
		"function" == typeof e.animation && (e.animation = e.animation.call()), e.showCloseButton ? (k.setAttribute("aria-label", e.closeButtonAriaLabel), b(k)) : y(k), t.className = o.popup, e.toast ? (g([document.documentElement, document.body], o["toast-shown"]), g(t, o.toast)) : g(t, o.modal), e.customClass && g(t, e.customClass);
		var D = T(),
			H = parseInt(null === e.currentProgressStep ? ie.getQueueStep() : e.currentProgressStep, 10);
		e.progressSteps && e.progressSteps.length ? (b(D), w(D), H >= e.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), e.progressSteps.forEach(function (t, n) {
			var i = document.createElement("li");
			if (g(i, o.progresscircle), i.innerHTML = t, n === H && g(i, o.activeprogressstep), D.appendChild(i), n !== e.progressSteps.length - 1) {
				var r = document.createElement("li");
				g(r, o.progressline), e.progressStepsDistance && (r.style.width = e.progressStepsDistance), D.appendChild(r)
			}
		})) : y(D);
		for (var U = A(), z = 0; z < U.length; z++) y(U[z]);
		if (e.type) {
			var Z = !1;
			for (var _ in i)
				if (e.type === _) {
					Z = !0;
					break
				} if (!Z) return s("Unknown alert type: " + e.type), !1;
			var Q = t.querySelector("." + o.icon + "." + i[e.type]);
			b(Q), e.animation && g(Q, "swal2-animate-" + e.type + "-icon")
		}
		var Y = L();
		if (e.imageUrl ? (Y.setAttribute("src", e.imageUrl), Y.setAttribute("alt", e.imageAlt), b(Y), e.imageWidth ? Y.setAttribute("width", e.imageWidth) : Y.removeAttribute("width"), e.imageHeight ? Y.setAttribute("height", e.imageHeight) : Y.removeAttribute("height"), Y.className = o.image, e.imageClass && g(Y, e.imageClass)) : y(Y), e.showCancelButton ? C.style.display = "inline-block" : y(C), e.showConfirmButton ? x(h, "display") : y(h), e.showConfirmButton || e.showCancelButton ? b(m) : y(m), h.innerHTML = e.confirmButtonText, C.innerHTML = e.cancelButtonText, h.setAttribute("aria-label", e.confirmButtonAriaLabel), C.setAttribute("aria-label", e.cancelButtonAriaLabel), h.className = o.confirm, g(h, e.confirmButtonClass), C.className = o.cancel, g(C, e.cancelButtonClass), e.buttonsStyling) {
			g([h, C], o.styled), e.confirmButtonColor && (h.style.backgroundColor = e.confirmButtonColor), e.cancelButtonColor && (C.style.backgroundColor = e.cancelButtonColor);
			var $ = window.getComputedStyle(h).getPropertyValue("background-color");
			h.style.borderLeftColor = $, h.style.borderRightColor = $
		} else v([h, C], o.styled), h.style.backgroundColor = h.style.borderLeftColor = h.style.borderRightColor = "", C.style.backgroundColor = C.style.borderLeftColor = C.style.borderRightColor = "";
		W(e.footer, R), !0 === e.animation ? v(t, o.noanimation) : g(t, o.noanimation), e.showLoaderOnConfirm && !e.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")
	}
	var _ = Object.freeze({
			cancel: "cancel",
			backdrop: "overlay",
			close: "close",
			esc: "esc",
			timer: "timer"
		}),
		Q = function () {
			null === d.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (d.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = function () {
				if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
				var e = document.createElement("div");
				e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);
				var t = e.offsetWidth - e.clientWidth;
				return document.body.removeChild(e), t
			}() + "px")
		},
		Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		$ = function (e, t) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return function (e, t) {
				var n = [],
					o = !0,
					i = !1,
					r = void 0;
				try {
					for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
				} catch (e) {
					i = !0, r = e
				} finally {
					try {
						!o && s.return && s.return()
					} finally {
						if (i) throw r
					}
				}
				return n
			}(e, t);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		},
		F = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
			}
			return e
		},
		J = F({}, e),
		X = [],
		G = void 0,
		ee = void 0,
		te = void 0,
		ne = function (e) {
			for (var t in e) ie.isValidParameter(t) || a('Unknown parameter "' + t + '"'), ie.isDeprecatedParameter(t) && l('The parameter "' + t + '" is deprecated and will be removed in the next major release.')
		},
		oe = function (e, t, n) {
			var i = B(),
				r = S();
			null !== t && "function" == typeof t && t(r), e ? (g(r, o.show), g(i, o.fade), v(r, o.hide)) : v(r, o.fade), b(r), i.style.overflowY = "hidden", z && !p(r, o.noanimation) ? r.addEventListener(z, function e() {
				r.removeEventListener(z, e), i.style.overflowY = "auto"
			}) : i.style.overflowY = "auto", g([document.documentElement, document.body, i], o.shown), N() && (Q(), function () {
				if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !p(document.body, o.iosfix)) {
					var e = document.body.scrollTop;
					document.body.style.top = -1 * e + "px", g(document.body, o.iosfix)
				}
			}()), d.previousActiveElement = document.activeElement, null !== n && "function" == typeof n && setTimeout(function () {
				n(r)
			})
		},
		ie = function e() {
			for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			if ("undefined" != typeof window) {
				if ("undefined" == typeof Promise && s("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), void 0 === n[0]) return s("SweetAlert2 expects at least 1 attribute!"), !1;
				var r = G = {},
					a = r.params = F({}, J, e.argsToParams(n));
				Z(a);
				var u = r.domCache = {
					popup: S(),
					container: B(),
					content: P(),
					actions: V(),
					confirmButton: O(),
					cancelButton: q(),
					closeButton: I(),
					validationError: k(o.validationerror),
					progressSteps: T()
				};
				return new Promise(function (t, n) {
					var i = function (n) {
							e.closePopup(a.onClose), a.useRejections ? t(n) : t({
								value: n
							})
						},
						r = function (o) {
							e.closePopup(a.onClose), a.useRejections ? n(o) : t({
								dismiss: o
							})
						},
						l = function (t) {
							e.closePopup(a.onClose), n(t)
						};
					a.timer && (u.popup.timeout = setTimeout(function () {
						return r("timer")
					}, a.timer));
					a.input && setTimeout(function () {
						var t = e.getInput();
						t && f(t)
					}, 0);
					for (var d = function (t) {
							if (a.showLoaderOnConfirm && e.showLoading(), a.preConfirm) {
								e.resetValidationError();
								var n = Promise.resolve().then(function () {
									return a.preConfirm(t, a.extraParams)
								});
								a.expectRejections ? n.then(function (e) {
									return i(e || t)
								}, function (t) {
									e.hideLoading(), t && e.showValidationError(t)
								}) : n.then(function (n) {
									C(u.validationError) || !1 === n ? e.hideLoading() : i(n || t)
								}, function (e) {
									return l(e)
								})
							} else i(t)
						}, p = function (t) {
							var n = t || window.event,
								o = n.target || n.srcElement,
								i = u.confirmButton,
								s = u.cancelButton,
								c = i && (i === o || i.contains(o)),
								p = s && (s === o || s.contains(o));
							switch (n.type) {
								case "click":
									if (c && e.isVisible())
										if (e.disableButtons(), a.input) {
											var f = function () {
												var t = e.getInput();
												if (!t) return null;
												switch (a.input) {
													case "checkbox":
														return t.checked ? 1 : 0;
													case "radio":
														return t.checked ? t.value : null;
													case "file":
														return t.files.length ? t.files[0] : null;
													default:
														return a.inputAutoTrim ? t.value.trim() : t.value
												}
											}();
											if (a.inputValidator) {
												e.disableInput();
												var m = Promise.resolve().then(function () {
													return a.inputValidator(f, a.extraParams)
												});
												a.expectRejections ? m.then(function () {
													e.enableButtons(), e.enableInput(), d(f)
												}, function (t) {
													e.enableButtons(), e.enableInput(), t && e.showValidationError(t)
												}) : m.then(function (t) {
													e.enableButtons(), e.enableInput(), t ? e.showValidationError(t) : d(f)
												}, function (e) {
													return l(e)
												})
											} else d(f)
										} else d(!0);
									else p && e.isVisible() && (e.disableButtons(), r(e.DismissReason.cancel))
							}
						}, m = u.popup.querySelectorAll("button"), v = 0; v < m.length; v++) m[v].onclick = p, m[v].onmouseover = p, m[v].onmouseout = p, m[v].onmousedown = p;
					if (u.closeButton.onclick = function () {
							r(e.DismissReason.close)
						}, a.toast) u.popup.onclick = function (t) {
						a.showConfirmButton || a.showCancelButton || a.showCloseButton || a.input || (e.closePopup(a.onClose), r(e.DismissReason.close))
					};
					else {
						var w = !1;
						u.popup.onmousedown = function () {
							u.container.onmouseup = function (e) {
								u.container.onmouseup = void 0, e.target === u.container && (w = !0)
							}
						}, u.container.onmousedown = function () {
							u.popup.onmouseup = function (e) {
								u.popup.onmouseup = void 0, (e.target === u.popup || u.popup.contains(e.target)) && (w = !0)
							}
						}, u.container.onclick = function (t) {
							w ? w = !1 : t.target === u.container && c(a.allowOutsideClick) && r(e.DismissReason.backdrop)
						}
					}
					a.reverseButtons ? u.confirmButton.parentNode.insertBefore(u.cancelButton, u.confirmButton) : u.confirmButton.parentNode.insertBefore(u.confirmButton, u.cancelButton);
					var x = function (e, t) {
						for (var n = R(a.focusCancel), o = 0; o < n.length; o++) {
							(e += t) === n.length ? e = 0 : -1 === e && (e = n.length - 1);
							var i = n[e];
							if (C(i)) return i.focus()
						}
					};
					a.toast && te && (window.onkeydown = ee, te = !1), a.toast || te || (ee = window.onkeydown, te = !0, window.onkeydown = function (t) {
						var n = t || window.event;
						if ("Enter" !== n.key || n.isComposing)
							if ("Tab" === n.key) {
								for (var o = n.target || n.srcElement, i = R(a.focusCancel), s = -1, l = 0; l < i.length; l++)
									if (o === i[l]) {
										s = l;
										break
									} n.shiftKey ? x(s, -1) : x(s, 1), n.stopPropagation(), n.preventDefault()
							} else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(n.key) ? document.activeElement === u.confirmButton && C(u.cancelButton) ? u.cancelButton.focus() : document.activeElement === u.cancelButton && C(u.confirmButton) && u.confirmButton.focus() : "Escape" !== n.key && "Esc" !== n.key || !0 !== c(a.allowEscapeKey) || r(e.DismissReason.esc);
						else if (n.target === e.getInput()) {
							if (-1 !== ["textarea", "file"].indexOf(a.input)) return;
							e.clickConfirm(), n.preventDefault()
						}
					}), e.enableButtons(), e.hideLoading(), e.resetValidationError(), a.input && g(document.body, o["has-input"]);
					for (var B = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], k = void 0, S = 0; S < B.length; S++) {
						var A = o[B[S]],
							E = h(u.content, A);
						if (k = e.getInput(B[S])) {
							for (var P in k.attributes)
								if (k.attributes.hasOwnProperty(P)) {
									var L = k.attributes[P].name;
									"type" !== L && "value" !== L && k.removeAttribute(L)
								} for (var T in a.inputAttributes) k.setAttribute(T, a.inputAttributes[T])
						}
						E.className = A, a.inputClass && g(E, a.inputClass), y(E)
					}
					var O = void 0;
					switch (a.input) {
						case "text":
						case "email":
						case "password":
						case "number":
						case "tel":
						case "url":
							(k = h(u.content, o.input)).value = a.inputValue, k.placeholder = a.inputPlaceholder, k.type = a.input, b(k);
							break;
						case "file":
							(k = h(u.content, o.file)).placeholder = a.inputPlaceholder, k.type = a.input, b(k);
							break;
						case "range":
							var q = h(u.content, o.range),
								V = q.querySelector("input"),
								j = q.querySelector("output");
							V.value = a.inputValue, V.type = a.input, j.value = a.inputValue, b(q);
							break;
						case "select":
							var I = h(u.content, o.select);
							if (I.innerHTML = "", a.inputPlaceholder) {
								var N = document.createElement("option");
								N.innerHTML = a.inputPlaceholder, N.value = "", N.disabled = !0, N.selected = !0, I.appendChild(N)
							}
							O = function (e) {
								e.forEach(function (e) {
									var t = $(e, 2),
										n = t[0],
										o = t[1],
										i = document.createElement("option");
									i.value = n, i.innerHTML = o, a.inputValue.toString() === n.toString() && (i.selected = !0), I.appendChild(i)
								}), b(I), I.focus()
							};
							break;
						case "radio":
							var D = h(u.content, o.radio);
							D.innerHTML = "", O = function (e) {
								e.forEach(function (e) {
									var t = $(e, 2),
										n = t[0],
										i = t[1],
										r = document.createElement("input"),
										s = document.createElement("label");
									r.type = "radio", r.name = o.radio, r.value = n, a.inputValue.toString() === n.toString() && (r.checked = !0), s.innerHTML = i, s.insertBefore(r, s.firstChild), D.appendChild(s)
								}), b(D);
								var t = D.querySelectorAll("input");
								t.length && t[0].focus()
							};
							break;
						case "checkbox":
							var H = h(u.content, o.checkbox),
								M = e.getInput("checkbox");
							M.type = "checkbox", M.value = 1, M.id = o.checkbox, M.checked = Boolean(a.inputValue);
							var U = H.getElementsByTagName("span");
							U.length && H.removeChild(U[0]), (U = document.createElement("span")).innerHTML = a.inputPlaceholder, H.appendChild(U), b(H);
							break;
						case "textarea":
							var W = h(u.content, o.textarea);
							W.value = a.inputValue, W.placeholder = a.inputPlaceholder, b(W);
							break;
						case null:
							break;
						default:
							s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + a.input + '"')
					}
					if ("select" === a.input || "radio" === a.input) {
						var z = function (e) {
							return O((n = [], (t = e) instanceof Map ? t.forEach(function (e, t) {
								n.push([t, e])
							}) : Object.keys(t).forEach(function (e) {
								n.push([e, t[e]])
							}), n));
							var t, n
						};
						a.inputOptions instanceof Promise ? (e.showLoading(), a.inputOptions.then(function (t) {
							e.hideLoading(), z(t)
						})) : "object" === Y(a.inputOptions) ? z(a.inputOptions) : s("Unexpected type of inputOptions! Expected object, Map or Promise, got " + Y(a.inputOptions))
					}
					oe(a.animation, a.onBeforeOpen, a.onOpen), a.toast || (c(a.allowEnterKey) ? a.focusCancel && C(u.cancelButton) ? u.cancelButton.focus() : a.focusConfirm && C(u.confirmButton) ? u.confirmButton.focus() : x(-1, 1) : document.activeElement && document.activeElement.blur()), u.container.scrollTop = 0
				})
			}
		};
	return ie.isVisible = function () {
		return !!S()
	}, ie.queue = function (e) {
		X = e;
		var t = function () {
				X = [], document.body.removeAttribute("data-swal2-queue-step")
			},
			n = [];
		return new Promise(function (e, o) {
			! function o(i, r) {
				i < X.length ? (document.body.setAttribute("data-swal2-queue-step", i), ie(X[i]).then(function (a) {
					void 0 !== a.value ? (n.push(a.value), o(i + 1, r)) : (t(), e({
						dismiss: a.dismiss
					}))
				})) : (t(), e({
					value: n
				}))
			}(0)
		})
	}, ie.getQueueStep = function () {
		return document.body.getAttribute("data-swal2-queue-step")
	}, ie.insertQueueStep = function (e, t) {
		return t && t < X.length ? X.splice(t, 0, e) : X.push(e)
	}, ie.deleteQueueStep = function (e) {
		void 0 !== X[e] && X.splice(e, 1)
	}, ie.close = ie.closePopup = ie.closeModal = ie.closeToast = function (e) {
		var t = B(),
			n = S();
		if (n) {
			v(n, o.show), g(n, o.hide), clearTimeout(n.timeout), document.body.classList.contains(o["toast-shown"]) || (! function () {
				if (d.previousActiveElement && d.previousActiveElement.focus) {
					var e = window.scrollX,
						t = window.scrollY;
					d.previousActiveElement.focus(), void 0 !== e && void 0 !== t && window.scrollTo(e, t)
				}
			}(), window.onkeydown = ee, te = !1);
			var i = function () {
				t.parentNode && t.parentNode.removeChild(t), v([document.documentElement, document.body], [o.shown, o["no-backdrop"], o["has-input"], o["toast-shown"]]), N() && (null !== d.previousBodyPadding && (document.body.style.paddingRight = d.previousBodyPadding, d.previousBodyPadding = null), function () {
					if (p(document.body, o.iosfix)) {
						var e = parseInt(document.body.style.top, 10);
						v(document.body, o.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e
					}
				}())
			};
			z && !p(n, o.noanimation) ? n.addEventListener(z, function e() {
				n.removeEventListener(z, e), p(n, o.hide) && i()
			}) : i(), null !== e && "function" == typeof e && setTimeout(function () {
				e(n)
			})
		}
	}, ie.clickConfirm = function () {
		return O().click()
	}, ie.clickCancel = function () {
		return q().click()
	}, ie.showLoading = ie.enableLoading = function () {
		var e = S();
		e || ie(""), e = S();
		var t = V(),
			n = O(),
			i = q();
		b(t), b(n), g([e, t], o.loading), n.disabled = !0, i.disabled = !0, e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus()
	}, ie.isValidParameter = function (t) {
		return e.hasOwnProperty(t) || "extraParams" === t
	}, ie.isDeprecatedParameter = function (e) {
		return -1 !== t.indexOf(e)
	}, ie.setDefaults = function (e) {
		if (!e || "object" !== (void 0 === e ? "undefined" : Y(e))) return s("the argument for setDefaults() is required and has to be a object");
		for (var t in ne(e), e) ie.isValidParameter(t) && (J[t] = e[t])
	}, ie.resetDefaults = function () {
		J = F({}, e)
	}, ie.adaptInputValidator = function (e) {
		return function (t, n) {
			return e.call(this, t, n).then(function () {}, function (e) {
				return e
			})
		}
	}, ie.getTitle = function () {
		return E()
	}, ie.getContent = function () {
		return P()
	}, ie.getImage = function () {
		return L()
	}, ie.getButtonsWrapper = function () {
		return l("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), k(o.actions)
	}, ie.getActions = function () {
		return V()
	}, ie.getConfirmButton = function () {
		return O()
	}, ie.getCancelButton = function () {
		return q()
	}, ie.getFooter = function () {
		return j()
	}, ie.isLoading = function () {
		return S().hasAttribute("data-loading")
	}, ie.hideLoading = ie.disableLoading = function () {
		if (G) {
			var e = G,
				t = e.params,
				n = e.domCache;
			t.showConfirmButton || (y(n.confirmButton), t.showCancelButton || y(n.actions)), v([n.popup, n.actions], o.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.cancelButton.disabled = !1
		}
	}, ie.getInput = function (e) {
		if (G) {
			var t = G,
				n = t.params,
				i = t.domCache;
			if (!(e = e || n.input)) return null;
			switch (e) {
				case "select":
				case "textarea":
				case "file":
					return h(i.content, o[e]);
				case "checkbox":
					return i.popup.querySelector("." + o.checkbox + " input");
				case "radio":
					return i.popup.querySelector("." + o.radio + " input:checked") || i.popup.querySelector("." + o.radio + " input:first-child");
				case "range":
					return i.popup.querySelector("." + o.range + " input");
				default:
					return h(i.content, o.input)
			}
		}
	}, ie.enableButtons = function () {
		if (G) {
			var e = G.domCache;
			e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
		}
	}, ie.disableButtons = function () {
		if (G) {
			var e = G.domCache;
			e.confirmButton.disabled = !0, e.cancelButton.disabled = !0
		}
	}, ie.enableConfirmButton = function () {
		G && (G.domCache.confirmButton.disabled = !1)
	}, ie.disableConfirmButton = function () {
		G && (G.domCache.confirmButton.disabled = !0)
	}, ie.enableInput = function () {
		if (G) {
			var e = ie.getInput();
			if (!e) return !1;
			if ("radio" === e.type)
				for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
			else e.disabled = !1
		}
	}, ie.disableInput = function () {
		if (G) {
			var e = ie.getInput();
			if (!e) return !1;
			if (e && "radio" === e.type)
				for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
			else e.disabled = !0
		}
	}, ie.showValidationError = function (e) {
		if (G) {
			var t = G.domCache;
			t.validationError.innerHTML = e;
			var n = window.getComputedStyle(t.popup);
			t.validationError.style.marginLeft = "-" + n.getPropertyValue("padding-left"), t.validationError.style.marginRight = "-" + n.getPropertyValue("padding-right"), b(t.validationError);
			var i = ie.getInput();
			i && (i.setAttribute("aria-invalid", !0), i.setAttribute("aria-describedBy", o.validationerror), f(i), g(i, o.inputerror))
		}
	}, ie.resetValidationError = function () {
		if (G) {
			var e = G.domCache;
			e.validationError && y(e.validationError);
			var t = ie.getInput();
			t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), v(t, o.inputerror))
		}
	}, ie.getProgressSteps = function () {
		if (G) return G.params.progressSteps
	}, ie.setProgressSteps = function (e) {
		if (G) {
			var t = G.params;
			t.progressSteps = e, Z(t)
		}
	}, ie.showProgressSteps = function () {
		if (G) {
			var e = G.domCache;
			b(e.progressSteps)
		}
	}, ie.hideProgressSteps = function () {
		if (G) {
			var e = G.domCache;
			y(e.progressSteps)
		}
	}, ie.argsToParams = function (e) {
		var t = {};
		switch (Y(e[0])) {
			case "string":
				["title", "html", "type"].forEach(function (n, o) {
					void 0 !== e[o] && (t[n] = e[o])
				});
				break;
			case "object":
				ne(e[0]), F(t, e[0]);
				break;
			default:
				return s('Unexpected type of argument! Expected "string" or "object", got ' + Y(e[0])), !1
		}
		return t
	}, ie.DismissReason = _, ie.noop = function () {}, ie.version = "7.15.1", ie.default = ie, "undefined" != typeof window && "object" === Y(window._swalDefaults) && ie.setDefaults(window._swalDefaults), ie
}), "undefined" != typeof window && window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);
if (typeof document !== "undefined") {
	! function (e, t) {
		var n = e.createElement("style");
		if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
		else try {
			n.innerHTML = t
		} catch (e) {
			n.innerText = t
		}
	}(document, "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-actions{flex:1;align-self:stretch;justify-content:flex-end;height:2.2em}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-shown.swal2-has-input>.swal2-container>.swal2-toast .swal2-validationerror{font-size:1em}body.swal2-toast-shown>.swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-top-end,body.swal2-toast-shown>.swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown>.swal2-container.swal2-top-left,body.swal2-toast-shown>.swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown>.swal2-container.swal2-center-left,body.swal2-toast-shown>.swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown>.swal2-container.swal2-center-end,body.swal2-toast-shown>.swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-left,body.swal2-toast-shown>.swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown>.swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-end,body.swal2-toast-shown>.swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-close{position:initial}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),html.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){height:auto;overflow-y:hidden}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1.6rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{align-items:center;justify-content:center;margin:1.25em auto 0}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:0 .3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background-color:#03ffe0;color:#212121;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding-top:1em;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;min-width:1.2em;height:1.2em;margin:0;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:calc(2.5em - .25em);line-height:1.2em;cursor:pointer}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:.75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validationerror{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validationerror::before{display:inline-block;width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}[dir=rtl] .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}");
}
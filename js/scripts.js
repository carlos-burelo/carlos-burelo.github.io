
// Menu desplugable
var navIsOpen = !1,
	navMobile = document.getElementById("nav-mobile-overlay"),
	navHamburger = document.getElementById("nav-hamburger"),
	toggleMenu = function(ev) {
		ev.preventDefault(), (navIsOpen = !navIsOpen) ? (navMobile.className = "visible-xs is-open", navHamburger.className = "hamburger is-open") : (navMobile.className = "visible-xs", navHamburger.className = "hamburger")
	};

// Slider
new Glider(document.querySelector('.contenedor__carrusel div'), {
	slidesToShow: 2,
	slidesToScroll: 2,
	draggable: true,
	arrows: {
		prev: '.anterior',
		next: '.siguiente'
	}
});
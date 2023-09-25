

(() =>{

	const openNavMenu = document.querySelector(".open-nav-menu"),
	closeNavMenu = document.querySelector(".close-nav-menu"),
	navMenu = document.querySelector(".nav-menu"),
	menuOverlay = document.querySelector(".menu-overlay"),
	mediaSize = 991;

	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);
	menuOverlay.addEventListener("click", toggleNav);

	function toggleNav() {
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		document.body.classList.toggle("hidden-scrolling");
	}

	navMenu.addEventListener("click", (event) =>{
		if(event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
			const menuItemHasChildren = event.target.parentElement;

			if(menuItemHasChildren.classList.contains("active")){
				collapseSubMenu();
			}
			else{
				if(navMenu.querySelector(".menu-item-has-children.active")){
					collapseSubMenu();
				}
				menuItemHasChildren.classList.add("active");
				const subMenu = menuItemHasChildren.querySelector(".sub-menu");
				subMenu.style.maxHeight = subMenu.scrollHeight + "px";
			}
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-item-has-children.active .sub-menu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-item-has-children.active")
		.classList.remove("active");
	}

	function resizeFix(){
		if(navMenu.classList.contains("open")){
			toggleNav();
		}
		if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
		}
	}

	window.addEventListener("resize", function(){
		if(this.innerWidth > mediaSize){
			resizeFix();
		}
	});

	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.toggle("sticky", window.scrollY > 0);
		}
	}



	let list = document.querySelector('.slider .list');
	let items = document.querySelectorAll('.slider .list .item');
	let dots = document.querySelectorAll('.slider .dots li');
	let prev = document.getElementById('prev');
	let next = document.getElementById('next');

	let active = 0;
	let lengthItems = items.length - 1;

	next.onclick = function() {
		if(active + 1 > lengthItems) {
			active = 0;
		} else {
			active = active + 1;
		}
		reloadSlider();
	}

	prev.onclick = function() {
		if(active - 1 < 0) {
			active = lengthItems;
		} else {
			active = active - 1;
		}
		reloadSlider();
	}

	let refreshSlider = setInterval(() => {next.click()}, 5000);

	function reloadSlider() {
		let checkLeft = items[active].offsetLeft;
		list.style.left = -checkLeft + 'px';

		let lastActiveDot = document.querySelector('.slider .dots li.active');
		lastActiveDot.classList.remove('active');
		dots[active].classList.add('active');
		clearInterval(refreshSlider);
		refreshSlider = setInterval(() => {next.click()}, 5000);
	}

	dots.forEach((li, key) => {
		li.addEventListener('click', function() {
			active = key;
			reloadSlider();
		})
	})

	window.addEventListener('scroll', reveal);

	function reveal() {
		var reveals = document.querySelectorAll('.reveal');
		for(var i = 0; i < reveals.length; i++) {
			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpoint = 150;

			if(revealtop < windowheight - revealpoint) {
				reveals[i].classList.add('active');
			}
			else {
				reveals[i].classList.remove('active');
			}
		}
	}



	document.querySelectorAll('.explainer1').forEach(vid => {
		vid.onclick = () => {
			document.querySelector('.popup-1').style.display = 'block';
		}
	});

	document.querySelector('.popup-1 span').onclick = () => {
		document.querySelector('.popup-1').style.display = 'none';
	}

	document.querySelectorAll('.latihan').forEach(vid => {
		vid.onclick = () => {
			document.querySelector('.popup-2').style.display = 'block';
		}
	});

	document.querySelector('.popup-2 span').onclick = () => {
		document.querySelector('.popup-2').style.display = 'none';
	}

	document.querySelectorAll('.explainer2').forEach(vid => {
		vid.onclick = () => {
			document.querySelector('.popup-3').style.display = 'block';
		}
	});

	document.querySelector('.popup-3 span').onclick = () => {
		document.querySelector('.popup-3').style.display = 'none';
	}


})();
/*Navbar, Hamburger menu*/
document.addEventListener('DOMContentLoaded', function() {
	let hamburger = document.getElementById("hamburger-menu");
	let navbar = document.getElementById("navbar");
	let close = document.getElementById("close-menu");
	hamburger.addEventListener('click', function() {
		if (navbar.style.display = 'none') {
			navbar.style.display = 'block';
			close.style.display = 'block';
			hamburger.style.display = 'none';
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	let hamburger = document.getElementById("hamburger-menu");
	let close = document.getElementById("close-menu");
	let navbar = document.getElementById("navbar");
	close.addEventListener('click', function() {
		if (navbar.style.display = 'block') {
			navbar.style.display = 'none';
			close.style.display = 'none';
			hamburger.style.display = 'block';
		}
	});
});

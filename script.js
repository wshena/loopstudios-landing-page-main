let close = document.getElementsByClassName('slider-close');
let open = document.getElementsByClassName('nav-hamburger');

function openSlider() {
	document.getElementById("nav-slider").style.left = '0';
	// document.getElementById("nav-slider").style.display = 'block';
}
function closeSlider() {
	document.getElementById("nav-slider").style.left = '1000px';
	// document.getElementById("nav-slider").style.display = 'none';
}

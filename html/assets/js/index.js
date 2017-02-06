'use strict';
var menuButton = document.querySelector('.menu');
var menu = document.querySelector('.dropdown-menu');
var menuClose = document.querySelector('.close');

menuButton.onclick = function(e) {
	e.preventDefault();
	menu.classList.add('active');
}

menuClose.onclick = function(e) {
	e.preventDefault();
	menu.classList.remove('active');
}

$(document).ready(function(){

	$('.popups--carousel-video').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 1,
	  arrows: false,
	  dots: true,
	  appendDots: '.popups--carousel-dots',
	});

	$('.popups--carousel-person').slick({
	  slidesToShow: 2,
	  arrows: false,
	  dots: true,
	  appendDots: '.popups--carousel-person--dots',
	  infinite: false
	});
});

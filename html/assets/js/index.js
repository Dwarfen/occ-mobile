/* jshint browser: true, jquery: true, esversion: 6 */
'use strict';
var menuButton = document.querySelector('.menu');
var menu = document.querySelector('.dropdown-menu');
var menuClose = document.querySelector('.close');

menuButton.onclick = function(e) {
	e.preventDefault();
	menu.classList.add('active');

	closePage();

};

menuClose.onclick = function(e) {
	e.preventDefault();
	menu.classList.remove('active');
};

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


//Navigation
var navLink = document.querySelectorAll('.navlink');
var closePopup = document.querySelectorAll('.popups--close.close');


[].forEach.call(navLink, function(item) {

	item.onclick = function() {

		if(menu.classList.contains('active')) {
			menu.classList.remove('active');
		}

		var sectionPage = document.querySelector(this.dataset.link);

		closePage();

		sectionPage.classList.add('active');

	};

});

[].forEach.call(closePopup, function(item) {

	item.onclick = function() {
		closePage();
	};

});

function closePage() {

	var sectionPages = document.querySelectorAll('.popups--item');

	[].forEach.call(sectionPages, function(item) {

		if(item.classList.contains('active')) {
			item.classList.remove('active');
		}

	});

}


//Mail Us
var mailUs = document.querySelector('.mailus');

mailUs.onclick = function(e) {

	e.preventDefault();

	var mailUsLink = document.querySelector('.dropdown-menu--random-msg div');

	mailUsLink.style.display = 'block';

};


//Random message
var randomMessage = document.querySelectorAll('.info-random--item');

randomMessage[random(0, randomMessage.length - 1)].classList.add('info-random-active');

function random(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}




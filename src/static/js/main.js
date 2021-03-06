'use strict';

import {blinkCaret, printHashtag} from './printAnimation.js'


/*----- SELECTORS -----*/

const burger = document.querySelector('.burger');
const heroTop = document.querySelector('.hero__top-box');
const menu = document.querySelector('.hero__menu');

const hashtagHTML = document.querySelector('.insta__hashtag');



/*----- VARIABLES -----*/

const paintColorRGB = [26, 26, 26]

/*----- LISTENERS -----*/

burger.addEventListener('click', addActiveClass);

document.addEventListener('scroll', function(e) {
	paintElement(heroTop, paintColorRGB)
});

/*----- FUNCTIONS -----*/

function addActiveClass() {
	burger.classList.toggle('active');
	menu.classList.toggle('active')
	heroTop.classList.toggle('active')
	document.body.classList.toggle('lock')	
}


function paintElement(element, arr) {
	let posWindow = window.scrollY;
	let elementHeight = element.offsetHeight;

	element.style.backgroundColor = `rgba(${arr[0]},${arr[1]},${arr[2]}, ${posWindow / elementHeight})`
	
}

// check paint-level right after page loaded

paintElement(heroTop, paintColorRGB)


//print hashtag animation

const hashtagsList = ['gourmet', 'carhartt', 'adidas', '10deep', 'palace', 'nike'];

blinkCaret(hashtagHTML)
printHashtag(hashtagHTML, hashtagsList)
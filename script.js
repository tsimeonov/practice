'use strict';

// ADD EVENT ON ELEMENT

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

// NAVBAR TOGGLE

const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
	navbar.classList.toggle('active');
	overlay.classList.toggle('active');
	document.body.classList.toggle('active');
};

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = function () {
	navbar.classList.remove('active');
	overlay.classList.remove('active');
	document.body.classList.remove('active');
};

addEventOnElem(navbarLinks, 'click', closeNavbar);

// HEADER $ BACK TOP BTN ACTIVE WHEN WINDOW SCROLL DOWN TO 100px

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

const showElemOnScroll = function () {
	if (window.scrollY > 100) {
		header.classList.add('active');
		backTopBtn.classList.add('active');
	} else {
		header.classList.remove('active');
		backTopBtn.classList.remove('active');
	}
};

addEventOnElem(window, 'scroll', showElemOnScroll);

// PRODUCT FILTER

const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterBox = document.querySelector('[data-filter]');

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
	lastClickedFilterBtn.classList.remove('active');
	this.classList.add('active');
	lastClickedFilterBtn = this;

	filterBox.setAttribute('data-filter', this.dataset.filterBtn);
};

addEventOnElem(filterBtns, 'click', filter);

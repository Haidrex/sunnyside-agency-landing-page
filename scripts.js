const navToggle = document.querySelector('.hamburger');
const topNav = document.querySelector('.top-nav');

navToggle.addEventListener('click', () => {
	topNav.classList.toggle('opened');
});

window.onload = () => {
	var isLoading = true;
	var links = document.querySelectorAll('.navbar-link');
	var sections = document.querySelectorAll('section');

	function disableLoader() {
		document.querySelector('.loader-wrapper').style.display = 'none';
		// document.querySelector('.loader-block').style.width = '0';
		// setTimeout(() => {
		// 	document.querySelector('.loader-transitions').style.display = 'none';
		// }, 500);
		setTimeout(() => {
			document.querySelector('body').style.overflow = 'visible';
		}, 500)
		isLoading = false;
		return isLoading;
	}

	function enableSmoothNavigation() {
		document.querySelectorAll('a[href^="#"]').forEach(element => {
			element.addEventListener('click', function (event) {
				event.preventDefault();

				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}

	function watchNavStatus() {
	  let index = sections.length;
	  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
	  links.forEach((link) => link.classList.remove('active-nav'));
	  links[index].classList.add('active-nav');
	}

	if (isLoading) { disableLoader(); }
	enableSmoothNavigation();
	watchNavStatus();
	window.addEventListener('scroll', watchNavStatus);

}
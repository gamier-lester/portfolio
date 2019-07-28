window.onload = () => {
	var isLoading = true;
	var links = document.querySelectorAll('.navbar-link');
	var sections = document.querySelectorAll('section');
	var globalIndex = 0;

	function disableLoader() {
		document.querySelector('.loader-wrapper').style.display = 'none';
		// document.querySelector('.loader-block').style.width = '0';
		// setTimeout(() => {
		// 	document.querySelector('.loader-transitions').style.display = 'none';
		// }, 500);
		setTimeout(() => {
			document.querySelector('body').style.overflow = 'auto';
			document.body.style.overflowX = 'hidden';
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

	let insertTextLoop = function () {
		insertText(function () {
			globalIndex++;

			if (globalIndex < stringArr .length) {
				insertTextLoop();
			}
		});

	}

	function insertText(callback) {
		setTimeout(function () {
			document.querySelector('#landing-magic').innerHTML += stringArr[globalIndex];
			callback();
		}, 50);
	}

	if (isLoading) { disableLoader(); }
	enableSmoothNavigation();
	watchNavStatus();
	window.addEventListener('scroll', watchNavStatus);
	// owl carousel

	$('#tools-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:5
			},
			1000:{
				items:7
			}
		}
	});
	
	document.querySelectorAll('.social-logo').forEach((element) => {
		element.addEventListener('click', (event) => {
			window.open(event.target.dataset.link);
		});
	});
	var stringArr = "Hello! I am Lester and I am Full Stack Web Developer. I am very passionate with my profession because I believe that being able to do what you want while facing your responsibilities produces good vibes and helps people grow on both life and work.";
	insertTextLoop(stringArr);
}
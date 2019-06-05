window.onload = () => {
	var isLoading = true;
	function disableLoader() {
		document.querySelector('.loader-wrapper').style.display = 'none';
		document.querySelector('.loader-block').style.width = '0';
		setTimeout(() => {
			document.querySelector('.loader-transitions').style.display = 'none';
		}, 500);
		setTimeout(() => {
			document.querySelector('body').style.overflow = 'visible';
		}, 500)
		isLoading = false;
		return isLoading;
	}

	if (isLoading) { disableLoader(); }
	
}
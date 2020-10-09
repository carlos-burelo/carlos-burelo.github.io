window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__container'), {
		slidesToShow: 4,
		slidesToScroll: 4,
		draggable: true,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		}
	});
});

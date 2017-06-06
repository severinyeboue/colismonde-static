$(document).ready(function(){	 


// Plugins
  	new WOW().init();






	/// Parallax effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
			});
		
	/// Masonry
		$(window).load(function(){
		var $container = $('.portfolio-masonry');
		$container.masonry({
		  columnWidth: 0,
		  itemSelector: '.portfolio-masonry li'
		});
		});
	
});

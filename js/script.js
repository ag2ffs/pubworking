(function($) {

		function getWindowSize() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();



		}

		function reorgRodape() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();
		}

		function calculoMargem() {
			// margem do .blog-inicio
			cMargem = (windowWidth - 940)/2;
			cRedondo = Math.round(cMargem);
			$('.blog-inicio').css('right', cRedondo);
		}

		function hideStuff() {
			$('.menu').hide();
		}

		var windowHeight = 0;

		//Binds Comportamentais
		function bindScroll() {
			$(window).on('scroll', function(){
				var windowScroll = $(window).scrollTop();
				if (windowScroll > (windowHeight - 10)) {
					$('.menu').fadeIn(300);
				} else {
					$('.menu').fadeOut(300);
				}
			});
		}



		$(document).ready(function(){
			hideStuff();
			getWindowSize();
			calculoMargem();
			reorgRodape();

			setTimeout(function() { bindScroll(); },170);
			$('.menu').scrollspy();
			$('.menu li').on('activate', function(evento){
				target = $(evento.target); //Link seta

				li = target.parent();
				removeNavClasses(li);
				li.addClass('normal');

				nexts = li.nextAll('li');
				prevs = li.prevAll('li');

				removeNavClasses(nexts);
				removeNavClasses(prevs);

				prevs.addClass('cima');
				nexts.addClass('baixo');
			});

			// MOUSE OVER DO FORM
			$('form>p').hover(
				function(){
					$(this).css({'color':'#fff'});
					$(this).find('textarea, input:text').css({'border-bottom':'1px solid #fff'});
				},
				function(){
					$(this).css({'color':'#999'});
					$(this).find('textarea, input:text').css({'border-bottom':'1px solid #585858'});
				}
			);

			// CAROUSEL
			$('#galeria').carousel({
			  interval: 6000
			});

			// SCROLL EASING
			$('ul.nav a, div.nav a')
				.bind('click',function(event){
					var $anchor = $(this);
		        	$('html, body').stop().animate({
		            	scrollTop: $($anchor.attr('href')).offset().top
	        		}, 800,'easeInOutExpo');

	        		event.preventDefault();
	    		});

	    	// BLOG NO SITE
	    	$('.post:first').css({
	    		'margin-left':'0px'
	    	});

		});


})( jQuery );

function setupAlertScroll(){
	jQuery('a.seta').hide();
	alertScroll();
	jQuery(window).scroll(function(){
		jQuery('a.seta').animate({opacity: 0}, 600);
	});
}

function alertScroll(){
	jQuery('a.seta').fadeIn('slow').delay(800).fadeOut('slow', alertScroll);
}

$(document).ready(function(){
			$(".nav li a").click(function(event){
				event.preventDefault();
				var element =$(this).attr('href');
				var top=$(""+element+"").offset().top;
				var scroll = top - $(".nav").height()
				$('html,body').animate({
				scrollTop:scroll
				},500)
			})
            
			});


		$(window).on("load",function(){
			$(".teamboxdiv").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 1.5s linear",
				opacity:1
			})
		})

		$(window).on("load",function(){
			$(".teamboxdiv1").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 2s linear",
				opacity:1
			})
		})
        $(window).on("load",function(){
			$(".teamboxdiv2").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 2.5s linear",
				opacity:1
			})
		})

		$(window).on("load",function(){
			$(".meetanimate").css({
				transform:"translate3d(0,0px,0)",
				transition:"1s linear",
				opacity:1
			})
		})

		$(window).on("load",function(){
			$(".meetanimate1").css({
				transform:"translate3d(0,0px,0)",
				transition:"1.2s linear",
				opacity:1
			})
		})

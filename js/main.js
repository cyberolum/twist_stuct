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
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".h3").css({
                    transform: "translate3d(0,0,0)",
                    transition:"1s linear",
                    opacity:1
                })
            }
        })
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".ofH3").css({
                    transform: "translate3d(0,0,0)",
                    transition:"1s linear",
                    opacity:1
                })
            }
        })
        
        $(window).on("load",function(){
			$(".headerH1").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 0.5s linear",
				opacity:1
			})
		})

        $(window).on("load",function(){
			$(".headerH2").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 0.6s linear",
				opacity:1
			})
		})
        
        $(window).on("load",function(){
			$(".btn1").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 1s linear",
				opacity:1
			})
		})
        
        $(window).on("load",function(){
			$(".btn2").css({
				transform:"translate3d(0px,0px,0)",
				transition:"transform 1.1s linear",
				opacity:1
			})
		})
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".boxFirstChildAnim1").css({
                    transform: "translate3d(0,0,0)",
                    transition:"1s linear",
                    opacity:1
                })
            }
        })
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".boxFirstChildAnim2").css({
                    transform: "translate3d(0,0,0)",
                    transition:"1.5s linear",
                    opacity:1 
                })
            }
        })
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".grid1").css({
                    transform: "translate3d(0,0,0)",
                    transition: "opacity 4s linear",
                    opacity:1  
                })
            }
        })
        
        $(document).scroll(function(){
            if($(window).scrollTop() > $("#services").offset().top/2){
                $(".h2Anim").css({
                    transform: "translate3d(0,0,0)",
                    transition: "1s linear",
                    opacity:1   
                })
            }
        })
        
//        $(document).scroll(function(){
//            if($(window).scrollTop() > $("#services").offset().top/2){
//                $(".boxFirstChildAnim3").css({
//                    transform: "translate3d(0,0,0)",
//                    transition:"1.8s linear",
//                    opacity:1
//                })
//            }
//        })
//        
//        $(document).scroll(function(){
//            if($(window).scrollTop() > $("#services").offset().top/2){
//                $(".boxFirstChildAnim4").css({
//                    transform: "translate3d(0,0,0)",
//                    transition:"2.4s linear",
//                    opacity:1
//                })
//            }
//        })
//        
//        $(document).scroll(function(){
//            if($(window).scrollTop() > $("#services").offset().top/2){
//                $(".boxFirstChildAnim5").css({
//                    transform: "translate3d(0,0,0)",
//                    transition:"3s linear",
//                    opacity:1
//                })
//            }
//        })
//        
//        $(document).scroll(function(){
//            if($(window).scrollTop() > $("#services").offset().top/2){
//                $(".boxFirstChildAnim6").css({
//                    transform: "translate3d(0,0,0)",
//                    transition:"3.6s linear",
//                    opacity:1
//                })
//            }
//        })
        
        
        $(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".testimonial2").css({
		
		transform:"translateY(0px)",
		transition:"transform 0.9s linear",
		opacity:1
		
	})
}
	
 });
$(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){	
	$(".testimonial1").css({
		
		transform:"translateY(0px)",
		transition:" transform 0.8s linear",
		opacity:1

		
	})
}	
 });


  $(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".price-box1").css({
		
		transition:"opacity 0.4s linear",
		opacity:1

		
	});
}
});
  $(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".price-box2").css({
		
		transition:"opacity 0.9s linear",
		opacity:1

		
	});
}
});
 $(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".price-box3").css({
		
		transition:"opacity 1.2s linear",
		opacity:1

		
	});
}
});
  $(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".price-box4").css({
		
		transition:"opacity 1s linear",
		opacity:1

		
	});
}
});
$(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".pricing-h").css({
		
		transition:"opacity 0.5s linear",
		opacity:1

		
	});
}
});
$(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
	
	$(".pricing-p").css({
		
		transition:"opacity 1.2s linear",
		opacity:1

		
	});
}
});
$(document).scroll(function(){
 if($(window).scrollTop() > $("#footer").offset().top/2){
$(".footer-box-1").css({

transition:"opacity 0.6s linear",
opacity:1

})
}
})

$(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
$(".footer-box-2").css({

transition:"opacity 1.3s linear",
opacity:1

})
}
})
$(document).scroll(function(){
  if($(window).scrollTop() > $("#footer").offset().top/2){
$(".footer-box-3").css({

transition:"opacity 1.6s linear",
opacity:1

});
}
});

$(document).ready(function(){
	//reviews
  $("#clients .owl-carousel").owlCarousel({
	  items:4,
	  loop:true,
	  margin:15,
	  autoplay:true,
	  arrow:false,
	  responsiveClass:true,
	  
  });
  //reviews
  $("#reviews .owl-carousel").owlCarousel({
	  items:1,
	  loop:true,
	  autoplay:true,
	  autoplayTimeout:4000,
	  autoplaySpeed:1000,
	  autoplayHoverPause:true
  });
  //blog
  $("#blog .owl-carousel").owlCarousel({
	  items:2,
	  loop:true,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplaySpeed:1000,
	  autoplayHoverPause:true
  });
  
  

  $('#home .burger').click(function() {
    $('#home .nav-links').toggleClass('.active');
  }); 
})













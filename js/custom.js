
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  $('body').addClass('bodyfixed');
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  $('body').removeClass('bodyfixed');
}






/* custum owl controls */


$(document).ready(function() {

	$(".owl_prv").click(function(){
    $(".busines-comunity-index .owl-prev").click(); 
    return false;
});

      	$(".owl_nxt").click(function(){
    $(".busines-comunity-index .owl-next").click(); 
    return false;
});

/* custum owl controls */

	$(".owl_prv2").click(function(){
    $(".performing .owl-prev").click(); 
    return false;
});

      	$(".owl_nxt2").click(function(){
    $(".performing .owl-next").click(); 
    return false;
});




 // listing-slider
  $('.spacings-corousel').owlCarousel({
             loop:true,
             margin:0,
           
              navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
             responsive:{
                 0:{
                     items:1
                 },
                 600:{
                     items:1
                 },
                 1000:{
                     items:1
                 }
             }
         })
         



  $(".owl_prv3").click(function(){
    $(".spacings-corousel .owl-prev").click(); 
    return false;
});

        $(".owl_nxt3").click(function(){
    $(".spacings-corousel .owl-next").click(); 
    return false;
});


});
	
 
//--> 

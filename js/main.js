$(function () {
   $('.header__btn').on('click', function(){
    $('.cooperation__menu').toggleClass('active');
   });

   $('.form__btn, .cross').on('click', function(){
    $('.cooperation__menu, body').removeClass('active');
   });
   $(document).mouseup(function (e){ 
		var div = $("#nav"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
            $('.cooperation__menu').removeClass('active'); 
		}
	});

   $(".button").click(function() {
      $('.toggled_block').toggle();
    });

   $(document).ready(function () {
      $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });
      });

      $(document).ready(function(){
         $("a").on('click', function(event) {
           if (this.hash !== "") {
             event.preventDefault();
             var hash = this.hash;
             $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 800, function(){
               window.location.hash = hash;
             });
           }
         });
       });

       $ ('.sliderbar').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         rows: 2
         
       });
})
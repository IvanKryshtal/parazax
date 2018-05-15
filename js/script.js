 /*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 139500000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
                '<span class="time time_days">%D</span>'
            +'<span class="dots">:</span>'
        	+'<span class="time time_hours">%H</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_minutes">%M</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_seconds">%S</span>'));
    })}); 
 /*---slowscroll--*/

$(document).ready(function(){
  $('a[href^="#"]').click(function(){
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
      $('body').animate( { scrollTop: destination }, 700 );
    } else{
        $('html').animate( {scrollTop: destination}, 700 );
    }
    return false;
  });
});

/*---mobile menu---*/

(function($){
  $(function() {
    $('.menu_icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
  $(function() {
    $('.menu_links-item').on('click', function() {
      $(this).closest('menu_state_open').toggleClass('.menu');
    });
  });
})(jQuery);
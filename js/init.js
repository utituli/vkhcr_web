(function($){
  $(function(){

    $('.button-collapse').sideNav({
      closeOnClick: true,
      draggable: true
    });
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    // $('#nav-mobile li a').click( function(){
    //   $('.button-collapse').sideNav('hide');
    // });
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {

  $(window).on('scroll', function (event) {

    // Vertical scroll position - window.pageYOffset for chrome, scrollTop for IE/FF
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

    // Add 'small' css class after vertical scroll distance 100, otherwise remove it
    if (scrollDistance > 100) {
      $('.nav').addClass('small');
    } else {
      if ($('.nav').hasClass('small')) {
        $('.nav').removeClass('small');
      }
      // Do nothing
    }

  });
});

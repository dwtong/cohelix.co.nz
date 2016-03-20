function init() {
  window.addEventListener('scroll', function (e) {

    // Vertical scroll position - window.pageYOffset for chrome, scrollTop for IE/FF
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

    // Vertical location where hero shrinks to navbar
    var shrinkPosition = 100;

    // Add .navbar class when page scroll has passed shrinkOn
    if (scrollDistance > shrinkPosition) {
      $('.nav').addClass('small');
      //classie.add(nav, "small");
    } //else {
      if (scrollDistance < shrinkPosition) {
        // TODO - can I use 'this' here?
        $('.nav').removeClass('.small');
      }
    //}
  });
}
window.onload = init();

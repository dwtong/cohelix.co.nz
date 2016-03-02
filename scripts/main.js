function init() {
  window.addEventListener('scroll', function (e) {

    // Vertical scroll - window.pageYOffset for chrome, scrollTop for IE/FF
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,

        // Vertical location where hero shrinks to navbar
        shrinkOn = 100,

        // Select HTML header
        header = document.querySelector("header");

        // Add .navbar class when page scroll has passed shrinkOn
        if (distanceY > shrinkOn) {
          classie.add(header, "navbar");
        } else {
          if (classie.has(header, "navbar")) {
            classie.remove(header, "navbar");
          }
        }
  });
}
window.onload = init();

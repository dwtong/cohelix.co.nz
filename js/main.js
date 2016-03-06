function init() {
  window.addEventListener('scroll', function (e) {

    // Vertical scroll - window.pageYOffset for chrome, scrollTop for IE/FF
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,

        // Vertical location where hero shrinks to navbar
        shrinkOn = 100,

        // Select HTML header
        nav = document.querySelector("nav");

        // Add .navbar class when page scroll has passed shrinkOn
        if (distanceY > shrinkOn) {
          classie.add(nav, "small");
        } else {
          if (classie.has(nav, "small")) {
            classie.remove(nav, "small");
          }
        }
  });
}
window.onload = init();

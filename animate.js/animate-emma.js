/* ------------------------------ ANIMATIONS FOR EW & ET ------------------------------ */

var sectiontwo = document.querySelector('#sectiontwo');
var sectionthree = document.querySelector('#sectionthree');

function animateOnScroll(element) {
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 500) {
    animateOnScroll(sectiontwo);
  } else if (document.documentElement.scrollTop > 650) {
    animateOnScroll(sectionthree);
  }
}
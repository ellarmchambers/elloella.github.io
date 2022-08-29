/* ------------------------------ ANIMATIONS FOR REMAINING ------------------------------ */

var sectiontwo = document.querySelector('#sectiontwo');
var sectionthree = document.querySelector('#sectionthree');
var sectionfour = document.querySelector('#sectionfour');

function animateOnScroll(element) {
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1400) {
    animateOnScroll(sectiontwo);
  } else if (document.documentElement.scrollTop > 1400 && document.documentElement.scrollTop < 2300) {
    animateOnScroll(sectionthree);
  } else if (document.documentElement.scrollTop > 2200) {
    animateOnScroll(sectionfour);
  }
}
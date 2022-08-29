/* ------------------------------ ANIMATIONS FOR JENGU ------------------------------ */

var sectiontwo = document.querySelector('#sectiontwo');
var sectionthree = document.querySelector('#sectionthree');
var sectionfour = document.querySelector('#sectionfour');
var sectionfive = document.querySelector('#sectionfive');

function animateOnScroll(element) {
  element.classList.remove('hide-row');
  element.classList.add('fadeInUp');
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1000) {
    animateOnScroll(sectiontwo);
  } else if (document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1700) {
    animateOnScroll(sectionthree);
  } else if (document.documentElement.scrollTop > 1700 && document.documentElement.scrollTop < 3000) {
    animateOnScroll(sectionfour);
  } else if (document.documentElement.scrollTop > 2900) {
    animateOnScroll(sectionfive);
  }
}
function toggleExpand() {
  var div2 = document.querySelector('.box1-left-nav');
  div2.classList.toggle('box1-left-nav-expanded');

  var div3 = document.querySelector('.expandable');
  div3.classList.toggle('expanded');

  var div4 = document.querySelector('.box1-left-img-overlay');
  div4.classList.toggle('box1-left-img-overlay-hidden');

  var div5 = document.querySelector('.about-me-text');
  div5.classList.toggle('about-me-text-hidden');

  var div6 = document.querySelector('.cross-hidden');
  div6.classList.toggle('cross-show');

  var div7 = document.querySelectorAll('.hidden');
  for (var i=0; i<div7.length; i++) {
    div7[i].classList.toggle('show');
  }
}
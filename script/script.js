function toggleExpand1() {
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
  div7[0].classList.toggle('show');
  div7[1].classList.toggle('show');
}

function toggleExpand3left() {
  //Check if right div extended
  var right = document.getElementById('box3-child-right');
  if (right.classList.contains('expanded-3')) {
    toggleExpand3right();
  }

  //Toggle left
  var divs = document.querySelectorAll('.expandable-3');
  divs[0].classList.toggle('expanded-3');

  //Nav
  var navs = document.querySelectorAll('.box3-nav');
  navs[0].classList.toggle('box3-nav-expanded');

  //Text
  var texts = document.querySelectorAll('.box3-text');
  texts[0].classList.toggle('box3-text-expanded');

  //Show text
  var hiddens = document.querySelectorAll('.hidden');
  hiddens[2].classList.toggle('show');
  hiddens[3].classList.toggle('show');
  hiddens[4].classList.toggle('show');

  //Show cross
  var cross = document.querySelectorAll('.cross-hidden');
  cross[1].classList.toggle('cross-show');
}

function toggleExpand3right() {
  //Check if left div extended
  var right = document.getElementById('box3-child-left');
  if (right.classList.contains('expanded-3')) {
    toggleExpand3left();
  }

  //Toggle right
  var divs = document.querySelectorAll('.expandable-3');
  divs[1].classList.toggle('expanded-3');

  //Nav
  var navs = document.querySelectorAll('.box3-nav');
  navs[1].classList.toggle('box3-nav-expanded');

  //Text
  var texts = document.querySelectorAll('.box3-text');
  texts[1].classList.toggle('box3-text-expanded');

  //Show text
  var hiddens = document.querySelectorAll('.hidden');
  hiddens[5].classList.toggle('show');
  hiddens[6].classList.toggle('show');
  hiddens[7].classList.toggle('show');

  //Show Cross
  var div6 = document.querySelector('.cross-hidden-right');
  div6.classList.toggle('cross-show');
}

//Force window up when refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


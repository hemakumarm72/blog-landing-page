var size = function () {
  function eventHandler() {
    if (screen.width > 1000) {
      const x = screen.width - 300 + 'px';

      document.getElementsByClassName('container')[0].style.maxWidth = x;
    } else {
      const x = screen.width + 'px';

      document.getElementsByClassName('container')[0].style.maxWidth = x;
    }
  }
  window.addEventListener('resize', eventHandler, false);
};

window.document.addEventListener('DOMContentLoaded', size(), false);
function myfunction() {
  if (screen.width > 675) {
    const x = screen.width - 300 + 'px';

    document.getElementsByClassName('container')[0].style.maxWidth = x;
  } else {
    const x = screen.width + 'px';

    document.getElementsByClassName('container')[0].style.maxWidth = x;
  }
}

document.addEventListener('load', myfunction());

// navigation link setup
const linkproduct = document.getElementById('link-product');
const linkcompany = document.getElementById('link-company');
const linkconnect = document.getElementById('link-connect');
const atag = document.getElementsByTagName('A');
const navigation_bar = document.getElementsByClassName('navigation_bar')[0];
const product = document.getElementById('nav-product');
const company = document.getElementById('nav-company');
const connect = document.getElementById('nav-connect');
const dropdown = document.getElementsByClassName('dropdown');
const humberclick = document.getElementById('humburger-1');
const arrowproduct = document.getElementById('arrowrotator-product');

const arrowcompany = document.getElementById('arrowrotator-company');
const arrowconnect = document.getElementById('arrowrotator-connect');

function btnproduct() {
  if (product.classList.contains('close')) {
    product.classList.remove('close');
    product.classList.toggle('open');
  } else if (product.classList.contains('open')) {
    product.classList.remove('open');
    product.classList.toggle('close');
  }

  // arrow image rototation

  arrowproduct.classList.toggle('arrow-rotator');
}

function btncompany() {
  if (company.classList.contains('close')) {
    company.classList.remove('close');
    company.classList.toggle('open');
  } else if (company.classList.contains('open')) {
    company.classList.remove('open');
    company.classList.toggle('close');
  }

  arrowcompany.classList.toggle('arrow-rotator');
}

function btnconnect() {
  if (connect.classList.contains('close')) {
    connect.classList.remove('close');
    connect.classList.toggle('open');
  } else if (connect.classList.contains('open')) {
    connect.classList.remove('open');
    connect.classList.toggle('close');
  }

  arrowconnect.classList.toggle('arrow-rotator');
}

function humberclose_open() {
  humberclick.classList.toggle('is-active');
  navigation_bar.classList.toggle('show');
}

linkproduct.onclick = function () {
  btnproduct();
};

linkcompany.onclick = function () {
  btncompany();
};

linkconnect.onclick = function () {
  btnconnect();
};

humberclick.onclick = function () {
  humberclose_open();
};

document.onclick = function (e) {
  if (
    e.target.className != 'link-a' &&
    e.target.className != 'dropdown-link' &&
    e.target.className != 'dropdown close' &&
    e.target.className != 'dropdown open'
  ) {
    product.classList.remove('open');
    product.classList.add('close');
    company.classList.remove('open');
    company.classList.add('close');
    connect.classList.remove('open');
    connect.classList.add('close');
    // company.classList.remove('open');
    // connect.classList.remove('open');
    arrowproduct.classList.remove('arrow-rotator');
    arrowcompany.classList.remove('arrow-rotator');
    arrowconnect.classList.remove('arrow-rotator');
  }
};

/*lazing image load*/

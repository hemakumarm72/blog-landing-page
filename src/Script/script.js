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
//loader
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

function btndropdownset(
  dropdownset,
  arrowset,
  elsedrop1,
  elsedrop2,
  elsearrow1,
  elsearrow2
) {
  if (dropdownset.classList.contains('close')) {
    dropdownset.classList.remove('close');
    dropdownset.classList.toggle('open');
  } else if (dropdownset.classList.contains('open')) {
    dropdownset.classList.remove('open');
    dropdownset.classList.toggle('close');
  }

  elsedrop1.classList.remove('open');
  elsedrop1.classList.add('close');
  elsearrow1.classList.remove('arrow-rotator');
  elsedrop2.classList.remove('open');
  elsedrop2.classList.add('close');
  elsearrow2.classList.remove('arrow-rotator');

  arrowset.classList.toggle('arrow-rotator');
}

function humberclose_open() {
  humberclick.classList.toggle('is-active');
  navigation_bar.classList.toggle('show');
}

linkproduct.onclick = function () {
  btndropdownset(
    product,
    arrowproduct,
    company,
    connect,
    arrowcompany,
    arrowconnect
  );
  company.classList.remove('open');
  company.classList.add('close');
  arrowcompany.classList.remove('arrow-rotator');
  connect.classList.remove('open');
  connect.classList.add('close');
  arrowconnect.classList.remove('arrow-rotator');
};

linkcompany.onclick = function () {
  btndropdownset(
    company,
    arrowcompany,
    product,
    connect,
    arrowproduct,
    arrowconnect
  );
};

linkconnect.onclick = function () {
  btndropdownset(
    connect,
    arrowconnect,
    product,
    company,
    arrowproduct,
    arrowcompany
  );
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
document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages;

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll('.lazy');

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
});

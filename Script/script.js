

//screen revolution set or max containing auto changing values

var size = function () {
  function eventHandler() {
    if (screen.width > 675) {
      const x = screen.width - 300 + "px";

      document.getElementsByClassName("container")[0].style.maxWidth = x;
    } else {
      const x = screen.width + "px";

      document.getElementsByClassName("container")[0].style.maxWidth = x;
    }
  }
  window.addEventListener("resize", eventHandler, false);
};

window.document.addEventListener("DOMContentLoaded", size(), false);
function myfunction() {
  if (screen.width > 675) {
    const x = screen.width - 300 + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
  } else {
    const x = screen.width + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
  }
}


document.addEventListener("load", myfunction());

// navigation link setup




function btnproduct() {

  document
    .getElementById("nav-product")
    .classList.toggle("nav-show");
  // arrow image rototation
  document
    .getElementById("arrowrotator-product")
    .classList.toggle("arrow-rotator");
}

function btncompany() {
  document
    .getElementById("nav-company")
    .classList.toggle("nav-show");
  // arrow image rototation
  document
    .getElementById("arrowrotator-company")
    .classList.toggle("arrow-rotator");
}

function btnconnect() {
  document
    .getElementById("nav-connect")
    .classList.toggle("nav-show");

  // arrow image rototation
  document
    .getElementById("arrowrotator-connect")
    .classList.toggle("arrow-rotator");
}

const linkproduct = document.getElementById('link-product')
const linkcompany = document.getElementById('link-company')
const linkconnect = document.getElementById('link-connect')
const atag = document.getElementsByTagName('A')
console.log(atag)
const product = document.getElementById('nav-product')
const company = document.getElementById('nav-company')
const connect = document.getElementById('nav-connect')
const dropdown = document.getElementsByClassName('dropdown')


linkproduct.onclick = function () {
  btnproduct()


}

linkcompany.onclick = function () {

  btncompany()
}

linkconnect.onclick = function () {

  btnconnect()

}

document.onclick = function (e) {
  if (e.target.className != 'link-a' && e.target.className != 'dropdown-link' && e.target.className != 'dropdown') {
    document
      .getElementById("nav-product")
      .classList.remove("nav-show");
    document
      .getElementById("nav-company")
      .classList.remove("nav-show");
    document
      .getElementById("nav-connect")
      .classList.remove("nav-show");

    document
      .getElementById("arrowrotator-product")
      .classList.remove("arrow-rotator");
    document
      .getElementById("arrowrotator-company")
      .classList.remove("arrow-rotator");
    document
      .getElementById("arrowrotator-connect")
      .classList.remove("arrow-rotator");
  }

}


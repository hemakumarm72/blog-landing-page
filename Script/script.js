//screen revolution set or max containing auto changing values

var size = function() {
  function eventHandler() {

    if (screen.width > 675) {
      const x = (screen.width - 300) + "px";
  
      document.getElementsByClassName("container")[0].style.maxWidth = x;
    } else {
      const x = (screen.width) + "px";
  
      document.getElementsByClassName("container")[0].style.maxWidth = x;
      }
  
  
  }
  window.addEventListener('resize', eventHandler, false)
}
window.document.addEventListener('DOMContentLoaded', size(), false);
function myfunction() {
  if (screen.width > 675) {
    const x = (screen.width - 300) + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
  } else {
    const x = (screen.width) + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
    }

}

document.addEventListener('load', myfunction())



// navigation link setup

function btnproduct() {
 
  var btnproduct = document.getElementById('nav-product').classList.toggle('nav-show');
   
  arrowlightrotator0()

 
}


function btncompany() {
 
  var btnproduct = document.getElementById('nav-company').classList.toggle('nav-show');
   
  arrowlightrotator1()

 
}

function btnconnect() {
 
  var btnproduct = document.getElementById('nav-connect').classList.toggle('nav-show');
   
  arrowlightrotator2()

 
}


// arrow light rotator function
function arrowlightrotator0() {
  var check = document.getElementsByClassName('dropdown')[0];
  var btnrotator = check.className.includes('nav-show')

  if (btnrotator === true) {
    document.getElementsByClassName("arrow-light")[0].style.transform = "rotate(180deg)"; 
  } 
  else if (btnrotator === false) {
    document.getElementsByClassName("arrow-light")[0].style.transform = "rotate(0deg)"; 
  } 
}

function arrowlightrotator1() {
  var check = document.getElementsByClassName('dropdown')[1];
  var btnrotator = check.className.includes('nav-show')

  if (btnrotator === true) {
    document.getElementsByClassName("arrow-light")[1].style.transform = "rotate(180deg)"; 
  } 
  else if (btnrotator === false) {
    document.getElementsByClassName("arrow-light")[1].style.transform = "rotate(0deg)"; 
  } 
}
function arrowlightrotator2() {
  var check = document.getElementsByClassName('dropdown')[2];
  var btnrotator = check.className.includes('nav-show')

  if (btnrotator === true) {
    document.getElementsByClassName("arrow-light")[2].style.transform = "rotate(180deg)"; 
  } 
  else if (btnrotator === false) {
    document.getElementsByClassName("arrow-light")[2].style.transform = "rotate(0deg)"; 
  } 
}
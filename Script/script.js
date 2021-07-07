"use strict";



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
      // arrow image rototation
  var rotator = document.getElementById('arrowrotator-product').classList.toggle('arrow-rotator')


 
}


function btncompany() {
 
  var btnproduct = document.getElementById('nav-company').classList.toggle('nav-show');
     // arrow image rototation
  var rotator = document.getElementById('arrowrotator-company').classList.toggle('arrow-rotator')

 
}

function btnconnect() {
 
  var btnproduct = document.getElementById('nav-connect').classList.toggle('nav-show');
   
  // arrow image rototation
  var rotator = document.getElementById('arrowrotator-connect').classList.toggle('arrow-rotator')

 
}



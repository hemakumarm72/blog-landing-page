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

// load size
function myfunction() {
  if (screen.width > 675) {
    const x = (screen.width - 300) + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
  } else {
    const x = (screen.width) + "px";

    document.getElementsByClassName("container")[0].style.maxWidth = x;
    }

}

myfunction()
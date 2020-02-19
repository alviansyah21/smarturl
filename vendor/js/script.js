$(document).ready(function(){
  var change = document.getElementsByTagName("li");
  for (var i = 0; i < change.length; i++) {
    change[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active border-bottom border-info");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace("active border-bottom border-info", "");
      }
      this.className += "active border-bottom border-info";
    });
  }
  
  bsCustomFileInput.init()
});
function filter() {
    var x = document.querySelectorAll("a[href^='https://www.washingtonpost.com/']");
  
    for (var i = 0; i < x.length; i++) {
      var style = window.getComputedStyle(x[i]);
  
      if (style.display === "none") {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }
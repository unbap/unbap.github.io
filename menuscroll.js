function scrollToPart1() {
  var menuHeight = document.querySelector(".menuBar").offsetHeight;
  var location = document.querySelector(".menuBar").offsetTop;
  window.scrollTo({ top: location - menuHeight, behavior: "smooth" });
}

function scrollToPart2() {
  var menuHeight = document.querySelector(".menuBar").offsetHeight;
  var location = document.querySelector(".part-2 .part-title").offsetTop;
  window.scrollTo({ top: location - menuHeight + 100, behavior: "smooth" });
}
function scrollToPart3() {
    var menuHeight = document.querySelector(".menuBar").offsetHeight;
    var location = document.querySelector(".part-3 .part-title").offsetTop;
    window.scrollTo({ top: location - menuHeight + 120, behavior: 'smooth' });
}


$(function () {
  $(document).scroll(function () {
    var $nav = $(".menuBar");
    $nav.toggleClass(
      "scrolled",
      $(this).scrollTop() > $(".main-imagex").height() - $nav.height() * 2 - 30
    );
  });
});

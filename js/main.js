$(document).ready(function () {
  $(".navigation-link:not([href])").click(function () {
    $(".navigation-link:not([href])").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".navigation-link:not([href])").not(this).siblings().slideUp(500);
  });

  $(".menu-btn").click(function () {
    $(".navigation-overlay").fadeToggle(500);
    $(".navigation-bar").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".navigation-overlay").click(function () {
    $(".navigation-overlay").fadeOut(500);
    $(".navigation-bar").removeClass("active");
    $("body").removeClass("overflow");
  });
});

$(document).ready(function () {
  const links = $(".selected-links a")

  links.click(function (event) {
    links.removeClass('selected')
    event.target.classList.add("selected")
  });

  const buttons = $(".language a")

  buttons.click(function (event) {
    buttons.removeClass('selected-language')
    event.target.classList.add("selected-language")
  });

  $(".burger-btn").click(function () {
    $(".header-nav").toggleClass("active");
  });
});



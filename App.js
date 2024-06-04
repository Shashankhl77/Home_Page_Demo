document.addEventListener("DOMContentLoaded", function () {
  var projectItems = document.querySelectorAll(".project-item");
  var projectImage = document.getElementById("project-image");

  projectItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var imageSrc = item.getAttribute("data-image");
      projectImage.setAttribute("src", imageSrc);
    });
  });
});
function openFylehq() {
  window.open("https://www.fylehq.com", "_blank");
}

$(document).ready(function () {
  $("#whatWeDoSlider").carousel({
    interval: 3000,
  });

  $(".carousel-indicators li").click(function () {
    var index = $(this).data("slide-to");
    $("#whatWeDoSlider").carousel(index);
  });
});

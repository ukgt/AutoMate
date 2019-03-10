$(document).on("click", ".lineItem", function() {
  let ind = $(this).data("id");
  window.location.href = "/car/" + ind;
});

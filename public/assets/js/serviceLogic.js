$(document).ready(function() {
  $("#serviceSubmit").on("click", function(event) {
    event.preventDefault();
    let newService = {
      serviceDate: $("#date")
        .val()
        .trim(),
      Description: $("#description")
        .val()
        .trim(),
      shop: $("#shop").val(),
      price: $("#cost")
        .val()
        .trim(),
      itemsDone: $("#itemsDone").val()
    };
    console.log(newService);
    $.ajax({
      url: "/service",
      method: "POST",
      data: newService
    }).then(function() {
      console.log("yay, it works!");
    });
    alert("working");
  });
});

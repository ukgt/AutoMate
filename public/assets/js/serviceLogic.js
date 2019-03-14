$(document).ready(function() {
    $(".rtBtn3").toggleClass(["notSelected", "selected"]);
  $("#serviceSubmit").on("click", function(event) {
    event.preventDefault();
    let newService = {
      serviceDate: $("#date")
        .val()
        .trim(),
      shop: $("#shop")
        .val()
        .trim(),
      price: $("#cost")
        .val()
        .trim(),
      serviceName: $("#serviceName")
        .val()
        .trim()
    };
    console.log(newService);
    $.ajax({
      url: "/service",
      method: "POST",
      data: newService
    }).then(function(result) {
      console.log(result, "yay, it works!");
      saveServices(result.id);
    });
  });

  let saveServices = function(pineapple) {
    let allIds = [];
    $.each($("input[type='checkbox']:checked"), function(i, o) {
      allIds.push($(o).data("id"));
    });
    $.ajax({
      url: "/serviceEntered",
      method: "POST",
      data: {
        serviceId: pineapple,
        serviceDone: allIds
      }
    }).then(function(result) {
      console.log(result, "yay, it works!");
    });
  };
});

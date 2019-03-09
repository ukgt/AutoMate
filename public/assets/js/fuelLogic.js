$(document).ready(function() {
  $("#fuelSubmit").on("click", function(event) {
    event.preventDefault();
    let newFuel = {
      purchaseDate: $("#date")
        .val()
        .trim(),
      odometer: $("#odometer")
        .val()
        .trim(),
      gallon: $("#gallons")
        .val()
        .trim(),
      pricePerGallon: $("#price")
        .val()
        .trim(),
      mpg: $("#fuelGrade")
        .val()
        .trim(),
      gasStation: $("#location")
        .val()
        .trim()
      //  latLoc: $("#location")
      //    .val()
      //    .trim(),
      //  longLoc: $("#location")
      //    .val()
      //    .trim()
    };
    console.log(newFuel);
    $.ajax({
      url: "/fuel",
      type: "POST",
      data: newFuel
    })
      .then(function() {
        console.log("new fuel added!");
      })
      .catch(function() {
        alert("Error: please try again");
      });
  });
});

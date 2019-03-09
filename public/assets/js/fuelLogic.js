$(document).ready(function() {
  $("#fuelSubmit").on("click", function(event) {
    event.preventDefault();
    let newFuel = {
      Date: $("#date")
        .val()
        .trim(),
      Odometer: $("#odometer")
        .val()
        .trim(),
      Gallons: $("#gallons")
        .val()
        .trim(),
      PriceGallon: $("#price")
        .val()
        .trim(),
      FuelGrade: $("#fuelGrade")
        .val()
        .trim(),
      GasStation: $("#location")
        .val()
        .trim()
    };
    console.log(newFuel);
    $.ajax({
      url: "/fuel",
      method: "POST",
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

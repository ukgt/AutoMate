$(document).ready(function() {
  $("#AddFuel").on("click", function(event) {
    event.preventDefault();
    // go to fuel.handlebars to make new entry
  });

  function AllFuelsQuery() {
    // i want to get the values of the newFuel that have been entered into the db
    // see hot restaurant tables.html

    $.ajax({
      url: "/fuels",
      type: "GET"
    }).then(function(FuelsData) {
      // Here we then log the tableData to console, where it will show up as an object.
      console.log(FuelsData);
      console.log("got the fuel data");
      let newFuel = $("#fuelEntry"); //what goes here to identify the fuels entered
      console.log(newFuel);
    });
  }
  AllFuelsQuery();
});

$(document).ready(function() {
  $("#AddFuel").on("click", function(event) {
    event.preventDefault();
    // go to fuel.handlebars to make new entry
  });

  function AllFuelsQuery() {
    // i want to get the values of the newFuel that have been entered into the db
    // see hot restaurant tables.html

    $.ajax({
      url: "/api/fuels",
      method: "GET"
    }).then(function(FuelsData) {
      // Here we then log the tableData to console, where it will show up as an object.
      console.log(FuelsData);
      console.log("got the fuel data");
      let newFuel = $("#fuelEntry"); //what goes here to identify the fuels entered
      console.log(newFuel);

      // Then display the fields in the HTML (Section Name, Date, URL)
      var listItem = $("<li class='list-group-item mt-4'>");

      listItem.append(
        $("<hr>"),
        $("<h6>").text("Date: " + FuelsData[i].date),
        $("<h6>").text("Mileage: " + FuelsData[i].odometer),
        $("<h6>").text("Gallons: " + FuelsData[i].gallons),
        $("<h6>").text("$:" + FuelsData[i].price),
        $("<h6>").text("Fuel Grade: " + FuelsData[i].fuelGrade),
        $("<h6>").text("Gas Station: " + FuelsData[i].location)
      );

      FuelsData.append(listItem);
    });
  }
  AllFuelsQuery();
});

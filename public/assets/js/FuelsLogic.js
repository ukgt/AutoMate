$(document).ready(function() {
  $(".lineItem").on("click", function() {
    let theID = $(this).data("id");
    window.location.href = "/fuel/1/" + theID;
  });

  function AllFuelsQuery() {
    $.ajax({
      url: "/fuels",
      type: "GET"
    }).then(function(FuelsData) {
      // Here we then log the tableData to console, where it will show up as an object.
      console.log(FuelsData);
      let newFuel = $("#fuelEntry");
      console.log(newFuel);
    });
  }
  AllFuelsQuery();
});

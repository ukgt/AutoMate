$(document).ready(function() {
  // $(".lineItem").on("click", function() {
  //       let theID = $(this).data("id");
  //   window.location.href = "/fuel/" + theID;
  // });

  $(".midBtn3").toggleClass(["notSelected", "selected"]);

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

$(document).on("click", ".lineItem", function() {
  let ind = $(this).data("id");
  window.location.href = "/fuel/" + ind;
});

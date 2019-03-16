$(document).ready(function() {
  $(document).on("change", "#manufacturer", function(evt) {
    evt.preventDefault();

    $.ajax({
      url: "/api/makes/" + $("#manufacturer").val(),
      method: "get",
      body: {
        MakeId: $("#make").val(),
        ManufacturerId: $("#manufacturer").val()
      }
    }).then(function(data) {
      $("#make option")
        .not(":first")
        .remove();
      $.each(data, function(i, o) {
        let opt = $("<option>");
        opt.text(o.makeName);
        opt.val(o.id);
        $("#make").append(opt);
      });
      console.log(data);
    });
  });

  $("form").on("submit", function(evt) {
    evt.preventDefault();
    let theData = {
      year: $("input[name='year']").val(),
      trim: $("input[name='trim']").val(),
      curMileage: $("input[name='curMileage']").val(),
      tireSize: $("input[name='tireSize']").val(),
      tirePSI: $("input[name='tirePSI']").val(),
      wiperDriver: $("input[name='wiperDriver']").val(),
      wiperPass: $("input[name='wiperPass']").val(),
      wiperRear: $("input[name='wiperRear']").val(),
      vin: $("input[name='vin']").val(),
      fuelType: $("input[name='fuelType']").val(),
      fuelTank: $("input[name='fuelTank']").val(),
      OwnerId: $("input[name='name']").val(),
      ManufacturerId: $("#manufacturer").val(),
      MakeId: $("#make").val()
    };
    $.ajax({
      method: "POST",
      url: "/api/addNewCar",
      data: theData
    })
      .then(function() {
        window.location.href = "/car";
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  $("#btnCancel").on("click", function() {
    window.location.href = "/car";
  });
});

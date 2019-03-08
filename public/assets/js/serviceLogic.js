$(document).ready(function () {
$("#serviceSubmit").on("click", function (event) {
     event.preventDefault();
     let newService = {
          Date: $("#date").val().trim(),
          Description: $("#description").val().trim(),
          Shop: $("#shop").val(),
          Cost: $("#cost").val().trim(),
          ItemsDone: $("#itemsDone").val().trim(),
      
     };
     console.log(newService);
     $.ajax({
          url: "/service",
          method: "POST",
          data: newService
     }).then(function () {
          console.log("yay, it works!")
     });
     alert("working");
});
});

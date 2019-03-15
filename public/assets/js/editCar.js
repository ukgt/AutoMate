$(document).ready(function() {
  $("#manufacturer").on("change", function(evt) {
    evt.preventDefault();

    $.ajax({
      url: "/api/makes/" + $("#manufacturer").val(),
      method: "get"
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
    console.log("asdad");
    this.submit();
  });
  $("#btnCancel").on("click", function() {
    window.location.href = "/car";
  });
});

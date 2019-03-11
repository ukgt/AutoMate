$(document).ready(function() {
  $("#btnNew").on("click", function(evt) {
    evt.preventDefault();
    $(".rightHolder").addClass(`movedLeft`);
    $(".leftHolder").addClass(`movedLeft`);
  });
  $("#btnCancel").on("click", function(evt) {
    evt.preventDefault();
    $(".rightHolder").removeClass(`movedLeft`);
    $(".leftHolder").removeClass(`movedLeft`);
  });

  $("#btnAddNew").on("click", function(evt) {
    evt.preventDefault();
    let passwordMatch =
      $("#tboxPass")
        .val()
        .trim() ===
      $("#tboxConfirmPass")
        .val()
        .trim();
    let email = $("#tboxEmail")
      .val()
      .trim();

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!passwordMatch) {
      createModal("Form Error", "Password do not match", false);
    } else if (!re.test(String(email).toLowerCase())) {
      createModal("Form Error", "Invalid email", false);
    } else {
      $.ajax({
        method: "POST",
        url: "/auth/createUser",
        data: {
          userEmail: $("#tboxEmail")
            .val()
            .trim(),
          userPassword: $("#tboxPass")
            .val()
            .trim()
        }
      })
        .then(function(results) {
          if (results) {
            window.location.href = "/car";
          }
        })
        .catch(function(err) {
          createModal("Login Error", err.responseJSON.message);
        });
    }
  });
  $("#btnLogin").on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      method: "POST",
      url: "/auth/loginUser",
      data: {
        email: $("#tboxLogEmail")
          .val()
          .trim(),
        password: $("#tboxLogPass")
          .val()
          .trim()
      }
    })
      .then(function(results) {
        if (results) {
          window.location.href = "/car";
        }
      })
      .catch(function(err) {
        createModal("Login Error", err.responseJSON.message);
      });
  });
});

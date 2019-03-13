$(document).ready(function() {
  $("#search").on("click", function() {
    function searchQuery() {
      $.ajax({
        url: "/search",
        type: "GET"
      }).then(function(searchData) {
        console.log(searchData);
        let newSearch = $("#searchEntry");
        console.log(newSearch);
      });
    }
    searchQuery();
  });
});

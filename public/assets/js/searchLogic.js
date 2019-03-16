$(document).ready(function() {
  $("#SearchTerm").on("change", function() { 
    $(".results").html("")

    if ($(this).val() == 0) { 
      return
    }
      $.ajax({
        url: "/search",
        type: "POST",
        data: { keyword: $(this).val()}
      }).then(function(searchData) {
        console.log(searchData);
          for( i = 0; i < searchData.length; i ++ ) {
            
            let serviceHolder = $("<div class='lineItem' data-id='"+searchData[i].id+"'>");
            
            let header = $("<h4>"+searchData[i].shop+"</h4>");

            let dataholder = $("<div class ='d-flex justify-content-between aCar'>")

            let field1 = $("<div>"+searchData[i].serviceDate+"</div>")

            let field2 = $("<div>$"+searchData[i].price.toFixed(2)+"</div>")

            dataholder.append(field1)
            dataholder.append(field2)
            serviceHolder.append(header)
            serviceHolder.append(dataholder)

            $(".results").append(serviceHolder)
          }
        

      });
  });
});

$(document).on("click", ".lineItem", function() {
  let ind = $(this).data("id");
  window.location.href = "/service/" + ind;
});
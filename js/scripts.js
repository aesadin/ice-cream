$(document).ready(function() {
  $(".clickable").click(function() {
    const icecreamFlavors = ["chocolate", "vanilla", "mint-chip", "strawberry"];
    
    icecreamFlavors.forEach(function(flavor) {
      $(".creamFlavors").text(flavor.toString());
      
    });
    
    $("#ice-cream-hidden").show();

  });
});

$(document).ready(function() {
  $("#User").submit(function(event) {

    var interest = $("input:radio[name=interest]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var mount = $("input:radio[name=mount]:checked").val();

    if (interest === "front") {
      console.log("hi");
      $("#cssDesign").show();
    } else {

        if (interest === "back" && time === "many" && size === "small") {
          $("#php").show();
        } else if (interest === "back" && time === "many" && size === "large") {
          $("#java").show();
        } else if (interest === "back" && time === "few" && size === "small") {
          $("#rubyRails").show();
        } else if (interest === "back" && time === "few" && size === "large") {
          $("#cSharp").show();
        } else {
          alert("Please fill out all questions.");
          return;
        }
    }
    event.preventDefault();
  });

});

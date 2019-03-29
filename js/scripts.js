$(document).ready(function() {
  $("#User").submit(function(event) {

    // var interest = $("input:radio[name=interest]:checked").val();
    var interest = $("#interest").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();

    if (interest === "Front-End") {
      console.log("front");
      $("#cssDesign").show();
    } else {

        if (interest === "Back-End" && time === "many" && size === "small") {
          $("#php").show();
          console.log("php");
        } else if (interest === "Back-End" && time === "many" && size === "large") {
          $("#java").show();
          console.log("java");
        } else if (interest === "Back-End" && time === "few" && size === "small") {
          $("#rubyRails").show();
          console.log("ruby");
        } else if (interest === "Back-End" && time === "few" && size === "large") {
          $("#cSharp").show();
          console.log("csharp");
        } else {
          alert("Please fill out all questions.");
          console.log("error");
          return;
        }
    }
    event.preventDefault();
  });

});

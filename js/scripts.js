$(document).ready(function() {
  $("#User").submit(function(event) {

    var name = $('#name').val();
    var interest = $("#interest").val();
    var environment = $("#environment").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();

    if (interest === "Front-End") {
      console.log("front");
      $("#cssDesign").show();
    } else {
          if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "small") {
          $("#php").show();
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "large") {
          $("#php").show();
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "large") {
            $("#php").show();
            console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "small") {
              $("#php").show();
              console.log("php");
          } else if (environment === "Android" && time === "many" && size === "large") {
          $("#java").show();
          console.log("java");
          } else if (environment === "Android" && time === "few" && size === "large") {
            $("#java").show();
            console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
              $("#java").show();
              console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
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

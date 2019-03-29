$(document).ready(function() {
  $("#User").submit(function(event) {

    var name = $('#name').val();
    var interest = $("#interest").val();
    var environment = $("#environment").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();

    if (interest === "Front-End") {
      console.log("front");
      // $("#deck1").show();
      window.location.href = "test.html"

    } else {
          if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "small") {
          $("#deck2").show();
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "large") {
          $("#deck2").show();
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "large") {
            $("#deck2").show();
            console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "small") {
              $("#deck2").show();
              console.log("php");
          } else if (environment === "Android" && time === "many" && size === "large") {
          $("#deck3").show();
          console.log("java");
          } else if (environment === "Android" && time === "few" && size === "large") {
            $("#deck3").show();
            console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
              $("#deck3").show();
              console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
              $("#deck3").show();
              console.log("java");
          } else if (interest === "Back-End" && time === "few" && size === "small") {
            $("#deck3").show();
            console.log("ruby");
          } else if (interest === "Back-End" && time === "few" && size === "large") {
            $("#deck5").show();
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

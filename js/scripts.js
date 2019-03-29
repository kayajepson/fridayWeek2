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
      window.location.href = "cssDesign.html"

    } else {
          if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "small") {
          window.location.href = "phpDrupal.html"
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "large") {
          // $("#deck2").show();
          window.location.href = "phpDrupal.html"
          console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "large") {
            // $("#deck2").show();
            window.location.href = "phpDrupal.html"
            console.log("php");
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "small") {
              // $("#deck2").show();
              window.location.href = "phpDrupal.html"
              console.log("php");
          } else if (environment === "Android" && time === "many" && size === "large") {
            // $("#deck3").show();
            window.location.href = "javaAndroid.html"
          console.log("java");
          } else if (environment === "Android" && time === "few" && size === "large") {
            // $("#deck3").show();
            window.location.href = "javaAndroid.html"
            console.log("java");
          } else if (environment === "Android" && time === "many" && size === "small") {
              // $("#deck3").show();
              window.location.href = "javaAndroid.html"
              console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
              // $("#deck3").show();
              window.location.href = "javaAndroid.html"
              console.log("java");
          } else if (interest === "Back-End" && time === "few" && size === "small") {
            // $("#deck3").show();
            window.location.href = "rubyRails.html"
            console.log("ruby");
          } else if (interest === "Back-End" && time === "many" && size === "small") {
            // $("#deck3").show();
            window.location.href = "rubyRails.html"
            console.log("ruby");
          } else if (interest === "Back-End" && time === "few" && size === "large") {
            window.location.href = "cSharp.html"
            console.log("csharp");
          } else if (interest === "Back-End" && time === "many" && size === "large") {
            window.location.href = "cSharp.html"
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

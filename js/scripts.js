$(document).ready(function() {
  $("#User").submit(function(event) {

    var name = $('#name').val();
    var city = $('#city').val();
    var interest = $("#interest").val();
    var environment = $("#environment").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();

    if (interest === "Front-End") {
      window.location.href = "cssDesign.html"

    } else {
          if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "small") {
          window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "large") {
          window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "large") {
            window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "small") {
            window.location.href = "phpDrupal.html"
          } else if (environment === "Android" && time === "many" && size === "large") {
          window.location.href = "javaAndroid.html"
          console.log("java");
          } else if (environment === "Android" && time === "few" && size === "large") {
          window.location.href = "javaAndroid.html"
          console.log("java");
          } else if (environment === "Android" && time === "many" && size === "small") {
          window.location.href = "javaAndroid.html"
          console.log("java");
          } else if (environment === "Android" && time === "few" && size === "small") {
          window.location.href = "javaAndroid.html"
          console.log("java");
          } else if (interest === "Back-End" && time === "few" && size === "small") {
          window.location.href = "rubyRails.html"
          console.log("ruby");
          } else if (interest === "Back-End" && time === "many" && size === "small") {
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

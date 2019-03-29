$(document).ready(function() {
  $("#User").submit(function(event) {
    var name = $('#name').val();
    console.log(name);
    $(".firstName").append(name);
    var city = $('#city').val();
    var interest = $("#interest").val();
    var environment = $("#environment").val();
    var time = $("input:radio[name=time]:checked").val();
    var size = $("input:radio[name=size]:checked").val();

    if (interest === "Front-End") {
      $("#cssResults").show();
      $("#quiz").hide();
      // window.location.href = "cssDesign.html"

    } else {
          if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "small") {
          $("#phpResults").show();
          $("#quiz").hide();
          // window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "many" && size === "large") {
          $("#phpResults").show();
          $("#quiz").hide();
          // window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "large") {
            $("#phpResults").show();
            $("#quiz").hide();
            // window.location.href = "phpDrupal.html"
          } else if (environment === "a CMS like Wordpress or Joomla" && time === "few" && size === "small") {
              $("#phpResults").show();
              $("#quiz").hide();
              // window.location.href = "phpDrupal.html"
          } else if (environment === "Android" && time === "many" && size === "large") {
            $("#javaResults").show();
            $("#quiz").hide();
            // window.location.href = "javaAndroid.html"
          } else if (environment === "Android" && time === "few" && size === "large") {
            $("#javaResults").show();
            $("#quiz").hide();
            // window.location.href = "javaAndroid.html"
          } else if (environment === "Android" && time === "many" && size === "small") {
              $("#javaResults").show();
              $("#quiz").hide();
              // window.location.href = "javaAndroid.html"
          } else if (environment === "Android" && time === "few" && size === "small") {
              $("#javaResults").show();
              $("#quiz").hide();
              // window.location.href = "javaAndroid.html"
          } else if (interest === "Back-End" && time === "few" && size === "small") {
            $("#rubyResults").show();
            $("#quiz").hide();
            // window.location.href = "rubyRails.html"
          } else if (interest === "Back-End" && time === "many" && size === "small") {
            $("#rubyResults").show();
            $("#quiz").hide();
            // window.location.href = "rubyRails.html"
          } else if (interest === "Back-End" && time === "few" && size === "large") {
            // window.location.href = "cSharp.html"
            $("#cSharpResults").show();
            $("#quiz").hide();
          } else if (interest === "Back-End" && time === "many" && size === "large") {
            // window.location.href = "cSharp.html"
            $("#cSharpResults").show();
            $("#quiz").hide();
          } else {
            alert("Please fill out all questions.");
            console.log("error");
            return;
      }
    }
    event.preventDefault();
  });


});

$(document).ready(function() {
  $("#User").submit(function(event) {

    var nameInput = $("input#name").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var hobby = $("input:radio[name=hobby]:checked").val();

    if (gender === "male" && hobby === "reading") {
      $("#f-celeb-1").show();
    } else if (gender === "male" && hobby === "hiking") {
      $("#f-celeb-2").show();
    } else if (gender === "male" && hobby === "sports") {
      $("#f-celeb-3").show();
    } else if (gender === "female" && hobby === "reading") {
      $("#m-celeb-1").show();
    } else if (gender === "female" && hobby === "hiking") {
      $("#m-celeb-2").show();
    } else if (gender === "female" && hobby === "sports") {
      $("#m-celeb-3").show();
    } else {
      alert("fill in the blanks");
      return;
    }

    event.preventDefault();
  });




});

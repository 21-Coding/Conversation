$(document).ready(function() {
  console.log("Jquery is working!");


  $("#hello").click(function() {
    $("#user").prepend("<li>Hello!</li>");
    $("#webpage").prepend("<li>Why hello there!</li>");
    $('li').click(function() {
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });



});

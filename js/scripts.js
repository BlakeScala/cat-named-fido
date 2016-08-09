$(function() {
  $("#button1").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
    $("#button2").toggle();
  });
});
$(function() {
  $("#button2").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
});

function myFunc() {
  $("div").css("background-color", "black");
  $("#p-1").css("font-style", "italic");
  $(".p-2").css("font-style", "italic");
  $("#p-1,.p-2").css("color", "red");
  $(".box-2 .p-2").css("font-size", "20px");
  $("p:first").fadeToggle();  // selects the first p element in the whole document
}

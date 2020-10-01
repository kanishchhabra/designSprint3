$(document).ready(function () {
  $("#filter_heading1").click(function () {
    $("#filter_list1").slideToggle();
  });
  $("#filter_heading2").click(function () {
    $("#filter_list2").slideToggle();
  });
  $("#filter_heading3").click(function () {
    $("#filter_list3").slideToggle();
  });
  $("#close_filters").click(function () {
    $("#filters").hide();
    $("#filter_button").show();
  });
  $("#filter_button").click(function () {
    $("#filters").show();
    $("#filter_button").hide();
  });
});

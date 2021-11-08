$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const dragName = $("input#drag-name").val();
    const dragMom = parseInt($("#drag-mom").val());
    const dragStyle = parseInt($('#drag-style').val());
    const result = dragMom + dragStyle;

    if (result <= 13) {
      $(".drag-name").text(dragName);
      $("#lang-2").toggle();
      $("#main").toggle();
    } else if (result >= 14 && result <= 23) {
      $(".drag-name").text(dragName);
      $("#lang-3").toggle();
      $("#main").toggle();
    } else if (result >= 30) {
      $(".drag-name").text(dragName);
      $("#lang-1").toggle();
      $("#main").toggle();
    }
  });
  $(".clickable").click(function(){
    $("#lang-1").hide();
    $("#lang-2").hide();
    $("#lang-3").hide();
    $("#main").show();
  })
});
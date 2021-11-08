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
      $("#main").hide();
    } else if (result >= 14 && result <= 23) {
      $(".drag-name").text(dragName);
      $("#lang-3").toggle();
      $("#main").hide();
    } else if (result >= 30) {
      $(".drag-name").text(dragName);
      $("#lang-1").toggle();
      $("#main").hide();
    }
  });
});
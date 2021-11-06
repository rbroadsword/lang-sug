$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const question1 = $("input#drag-name").val();
    const result = parseInt($("#drag-mom").val());
    
    if (result === 1) {
      $(".drag-name").text(question1);
      $("#lang-2").toggle();
      $("#main").hide();
    } else if (result === 2) {
      $(".drag-name").text(question1);
      $("#lang-3").toggle();
      $("#main").hide();
    } else (result === 3) {
      $(".drag-name").text(question1);
      $("#lang-1").toggle();
      $("#main").hide();
    }
  });
});
$(function() {
  $(".draggable").draggable();
  $(".droppable").droppable({
    /*drop: function(event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },*/
    over: function(event, ui) {
      $('.display').html( this.id );
    }
  });
});

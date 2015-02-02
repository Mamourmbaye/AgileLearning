$(function() {
	$("#next").hide();

// Définition des éléments draggables/droppable ainsi que l'événement d'écriture qui survient lors d'un drop
	$(".draggable").draggable();
	$(".droppable").droppable({
    /*drop: function(event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },*/
    drop: function(event, ui) {
      //$('.display').html( this.id );
      $('.verif', this).text(ui.draggable.select('p', this).text());
    }
	});

// Clignotement lors du drag
	$( ".draggable" ).hover(function() {
	/*
		$( this ).fadeOut( 100 );
		$( this ).fadeIn( 500 );
	*/
		$('.display').html($(this).find('p').text());
		$('.display').fadeIn(100);
	},function(){
		$('.display').fadeOut(100);
	});

//Vérification si toutes les ID des éléments droppés matchent avec le texte écrit à l'intérieur
	$('#tp-suivant').click(function(){
		var all=true;
		var test=true;
		//On teste pour chaque droppable et on recalcul la variable all
		$('#dropline div').each( function(index, value) {
			test = ($('.verif' ,value).text().trim() == $(this).attr('id'));
    		all = all & test;
    	//On colorie en prallèle
			if (test){
    		$(this).css('background', 'rgba(74, 217, 35, 0.77)');
    	}else{
    		$(this).css('background', 'rgba(221, 26, 26, 0.81)');
    	}
  		});

		//On effectue un test global
		if(all){
			$('#correction p:first').html("Well Done ! <br/> Click next to follow up");
		}else{
			$('#correction p:first').html("You made some mistakes, correct them ! <br/> <i>Note that only the last dropped item is taken into account</i>");
		}
	});


});

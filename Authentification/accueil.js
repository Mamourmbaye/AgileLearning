
$(function() {

//Impossible de gérer a la fois collapsible: true et heightStyle: "content"
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  });

// A modifier avec style en comprenant code et aleatoire dans position fleche
 $(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });


//Aucune gestion des ProgressBar en terme de nombre, defilement, vitesse : compendre le code et le principe

$(function() {
    var progressbar = $( "#progressbarBC" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function() {
    var progressbar = $( "#progressbarCO" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function() {
    var progressbar = $( "#progressbarNPI" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function() {
    var progressbar = $( "#progressbarQBR" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function() {
    var progressbar = $( "#progressbarCQ" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function() {
    var progressbar = $( "#progressbarCO" ),
      progressLabel = $( ".progress-label" );

    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;

      progressbar.progressbar( "value", val + 2 );

      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }

    setTimeout( progress, 2000 );
  });

$(function (){
  var av=1;
  var finish=false;

  $("#tp-suivant").click(function (){
    if (finish){
      window.location = "./UPN-AML.html";
    } else if (av==4){
      alert("You need to scratch more !");
    }
    switch (av){
      case 1 :
        $("#tp-centre p:first").html("Articles are represented by semi-significants codes called UPN. <br/> <strong> UPN = Universal Part Number </strong> <br/>");
        av++;
      break;
      case 2 :
        $("#tp-centre p:first").after("<p>Each UPN is associated to one AML. <br/> <strong> AML = Approved Manufacturer list <strong></p> ");
        av++;
      break;
      case 3 :
        $("#tp-centre").append("<p>An AML is composed of MFRs which are unique codes standing for an article from an accepted supplier </p> ");
        $("#tp-centre").append("<p>Scratch this image an AML's example</p> <div id='demo2' class='scratchpad'></div> ");
        $("#tp-centre").append("<style> .scratchpad{margin : auto; width: 550px; height: 150px; border: solid 1px;}</style>");
        av++;
        $('#demo2').wScratchPad({
          bg: './AML.png',
          fg: './gris.png',
          'cursor': 'url("./cursors/coin.png") 5 5, default',
          scratchMove: function (e, percent) {
            $('#demo2-percent').html(percent);

            if (percent > 70) {
              this.clear();
              finish=true;
            }
          }
        });
        break;
    }
  })
/*
  $('#demo2').wScratchPad({
    bg: './AML.png',
    fg: './gris.png',
    'cursor': 'url("./cursors/coin.png") 10 10, default',
    scratchMove: function (e, percent) {
      $('#demo2-percent').html(percent);

      if (percent > 70) {
        this.clear();
      }
    }
  });
*/
});

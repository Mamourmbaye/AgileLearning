$(function (){
  var av=1;


  $("#suivant").click(function (){
    switch (av){
      case 1 :
        $("#centre p:first").html("Articles are represented by semi-significants codes called UPN. <br/> <strong> UPN = Universal Part Number </strong> <br/>");
        av++;
      break;
      case 2 :
        $("#centre p:first").after("<p>Each UPN is associated to one AML. <br/> <strong> AML = Approved Manufacturer list <strong></p> ");
        av++;
      break;
      case 3 :
        $("#centre").append("<p>An AML is composed of MFRs which are unique codes standing for an article from an accepted supplier </p> ");
        $("#centre").append('<img src="AML.png" />');
        av++;
        break;
    }
  })
});

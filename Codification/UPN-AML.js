$(function (){
  var av=1;


  $("#suivant").click(function (){
    switch (av){
      case 1 :
        $("#centre p:first").html("An article is represented by a semi-significant code called UPN. <br/> <strong> UPN = Universal Part Number </strong> <br/>");
        av++;
      break;
      case 2 :
        $("#centre p:first").after("<p>Each UPN is associated to one AML. <br/> <strong> AML = Approved Manufacturer list <strong></p> ");
        av++;
      break;
    }
  })
});

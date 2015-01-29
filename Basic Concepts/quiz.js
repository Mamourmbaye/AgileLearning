$(function() {
  // Dissimulation des réponses
  $('.reponse').hide();


  // Action au survol du lien « Tester les réponses »
  $('#verify').click(
    function() {

      var score = 0;

      $('.reponse').show();
      if ($(':radio[id="r2"]:checked').val()) {
        $('#img1').attr('src', 'bon.png');
        $('#reponse1').css('color', 'green');
        score = score + 1;
      }
      else {
        $('#img1').attr('src', 'mauvais.png');
        $('#reponse1').css('color', 'red');
      }
      if ($(':radio[id="r8"]:checked').val()) {
        $('#img2').attr('src', 'bon.png');
        $('#reponse2').css('color', 'green');
        score = score + 1;
      }
      else {
        $('#img2').attr('src', 'mauvais.png');
        $('#reponse2').css('color', 'red');
      }
      if ($(':radio[id="r11"]:checked').val()) {
        $('#img3').attr('src', 'bon.png');
        $('#reponse3').css('color', 'green');
        score = score + 1;
      }
      else {
        $('#img3').attr('src', 'mauvais.png');
        $('#reponse3').css('color', 'red');
      }
      if ($(':radio[id="r12"]:checked').val()) {
        $('#img4').attr('src', 'bon.png');
        $('#reponse4').css('color', 'green');
        score = score + 1;
      }
      else {
        $('#img4').attr('src', 'mauvais.png');
        $('#reponse4').css('color', 'red');
      }
      if ($(':radio[id="r15"]:checked').val()) {
        $('#img5').attr('src', 'bon.png');
        $('#reponse5').css('color', 'green');
        score = score + 1;
      }
      else {
        $('#img5').attr('src', 'mauvais.png');
        $('#reponse5').css('color', 'red');
      }

      $('.score').text("Your score is "+score+"/5");

    }

    /*          function() {
                $('.reponse').hide();
                $('img').each(function() {
                  $(this).attr('src', 'question.png');
              });
    }
    */

  );
});

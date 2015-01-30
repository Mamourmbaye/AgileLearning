
$(function() {
$('.titreSlide').text('Comprehension of an article\'s codification');
$('#instructions').text('When codification digits understood, click "Next"');
$('#soustitre').text('Codification');
$('#bulleAide').hide();


$('#help').mouseenter(function(){
	$('#bulleAide').show();
});
$('#help').mouseleave(function(){
	$('#bulleAide').hide();
});


$('#suivant').click(function(){
	$('#1').attr('class','previous visited');
	$('#2').attr('class','active');
	$('#3').attr('class','next');
    $('.titreSlide').text('First Digit : article\'s type signification');
    $('#instructions').text('When 1st digit understood, click "Next" ');
    $('#codifDetail').attr("src","1stDigit.png");
	$('#codifDetail').css("height","200px");
    $('#codifDetail').css("width","500px");
    $('#texte').html("<div>The first digit of the codification carry a first information about the article (UPN). If you want to know more about this article, you must check its description.</div>") ;
	
	$('#suivant').click(function(){
		$('#1').attr('class','previous visited');
		$('#2').attr('class','active');
		$('#3').attr('class','next');
    	$('.titreSlide').text('Descriptions');
    	$('#instructions').text('When description levels understood, click "Next" ');
    	$('#codifDetail').attr('src','');
    	$('#codifDetail').css("height","0px");
    	$('#codifDetail').css("width","0px");
    	$('#texte').html("You will find two levels of description for each UPN. The second level is more detailed than the first one.<br/><br/> Let\'s see an example of PCB's descriptions :</br><br/></div><img id=\"description\" alt=\"description\" src=\"description.png\"/><div>On the first level you find ... On the second level you find...");

		$('#suivant').click(function(){
			$('#1').attr('class','previous visited');
			$('#2').attr('class','previous visited');
			$('#3').attr('class','active');
			$('#4').attr('class','next');
    		$('.titreSlide').text('Major and minor revisions');
    		$('#instructions').text('When major/minor modifications and their codification impact understood, click "Next" ');
    		$('#codifDetail').attr("src","rev.png");
    		$('#codifDetail').css("height","110px");
    		$('#codifDetail').css("width","400px");
    		$('#texte').html("<div id=\"exRev\"><ol>Examples of major modifications which will impact the version (two numerical digits) :<li></li><li></li><li></li></ol><ol>Examples of minor modifications which will impact the revision (capital lettre digit) :<li></li><li></li><li></li></ol></div>");

	
			$('#suivant').click(function(){
				$('#1').attr('class','previous visited');
				$('#2').attr('class','previous visited');
				$('#3').attr('class','previous visited');
				$('#4').attr('class','active');
				$('#5').attr('class','next');
				$('#suivant').hide();
    			$('.titreSlide').text('Let\'s check your understanding!!');
    			$('#instructions').text('Complete the codification for each example. When you feel sure about your answers, verify it by clicking on the "Verify Button". If your answers are ok, click "Next".');
				$('.formation').html("<button id=\"memo\">Memo</button><img id=\"aideMemo\" alt=\"tableauAide\" src=\"1stDigit.png\" /><div><span>Some codification exercices :</span></br>A resistance componant, existing before the ERP migration. This componant, since its creation has evolved through few modifications (modif1, modif2, modif3) :</div><div id=\"listesDeroulantes1\" ><form><select id=\"select1\" name=\"digit1\"><option value=\"B\">B<option value=\"C\">C<option value=\"D\">D<option value=\"F\">F<option>L<option value=\"M\">M<option value=\"N\">N<option value=\"S\">S<option value=\"T\">T<option value=\"X\">X<option value=\"Y\">Y<option value=\"Z\">Z</select><select id=\"select2\" name=\"8digit\"><option value=\"00000000\">00000000<option value=\"12345678\">12345678<option value=\"11111111\">11111111</select><select id=\"select3\" name=\"major\"><option value=\"01\">01<option value=\"02\">02<option value=\"03\">03</select><select id=\"select4\" name=\"minor\"><option value=\"A\">A<option value=\"B\">B<option value=\"C\">C</select><select id=\"select5\" name=\"warranty\"><option value=\"\"><option value=\"W\">W</select></form></div><div>A new finished product has just been modified by a modifX due to several problems. It's steel in waranty repair. :</div><div id=\"listesDeroulantes2\" ><form><select id=\"select6\" name=\"digit1\"><option value=\"B\">B<option value=\"C\">C<option value=\"D\">D<option value=\"F\">F<option value=\"L\">L<option value=\"M\">M<option value=\"N\">N<option value=\"S\">S<option value=\"T\">T<option value=\"X\">X<option value=\"Y\">Y<option value=\"Z\">Z</select><select id=\"select7\" name=\"8digit\"><option value=\"00000000\">00000000<option value=\"12345678\">12345678<option value=\"11111111\">11111111</select><select id=\"select8\" name=\"major\"><option value=\"01\">01<option value=\"02\">02<option value=\"03\">03</select><select id=\"select9\" name=\"minor\"><option value=\"A\">A<option value=\"B\">B<option value=\"C\">C</select><select id=\"select10\" name=\"warranty\"><option value=\"\"><option value=\"W\">W</select></form></div><div>This component (a resistance) is purchased to our supplier SPLR50 :</div><div id=\"listesDeroulantes3\" ><form><select id=\"select11\" name=\"digit1\"><option value=\"B\">B<option value=\"C\">C<option value=\"D\">D<option value=\"F\">F<option value=\"L\">L<option value=\"M\">M<option value=\"N\">N<option value=\"S\">S<option value=\"T\">T<option value=\"X\">X<option value=\"Y\">Y<option value=\"Z\">Z</select><select id=\"select12\" name=\"8digit\"><option value=\"00000000\">00000000<option value=\"12345678\">12345678<option value=\"11111111\">11111111</select><select id=\"select13\" name=\"major\"><option value=\"01\">01<option value=\"02\">02<option value=\"03\">03</select><select id=\"select14\" name=\"minor\"><option value=\"A\">A<option value=\"B\">B<option value=\"C\">C</select><select id=\"select15\" name=\"warranty\"><option value=\"\"><option value=\"W\">W</select></form></div></div><button id=\"verify\">Verify</button>");
				$('#aideMemo').hide();
				$('#memo').mouseenter(function(){
					$('#aideMemo').css("height","200px");
					$('#aideMemo').css("width","450px");
					$('#aideMemo').css("position","absolute");
					$('#aideMemo').css("top","0");
					$('#aideMemo').css("right","0");
					$('#aideMemo').show();
				});
				$('#memo').mouseleave(function(){
					$('#aideMemo').hide();
				});
				$('#verify').click(function(){
					if ($('#select1 option[value="M"]:checked').val() && $('#select3 option[value="03"]:checked').val() && $('#select4 option[value="B"]:checked').val() && $('#select5 option[value="W"]:checked').val()) {
						$('#suivant').show();
						$('#select1').css("background-color","green");
						$('#select2').css("background-color","green");
						$('#select3').css("background-color","green");
						$('#select4').css("background-color","green");
						$('#select5').css("background-color","green");
						}
					else {
						$('#select2').css("background-color","green");
						if($('#select1 option[value="M"]:checked').val()){
						$('#select1').css("background-color","green");
						}
						else{
						$('#select1').css("background-color","red");
						}
						if($('#select3 option[value="03"]:checked').val()){
						$('#select3').css("background-color","green");
						}
						else{
						$('#select3').css("background-color","red");
						}
						if($('#select4 option[value="B"]:checked').val()){
						$('#select4').css("background-color","green");
						}
						else{
						$('#select4').css("background-color","red");
						}
						if($('#select5 option[value="W"]:checked').val()){
						$('#select5').css("background-color","green");
						}
						else{
						$('#select5').css("background-color","red");
						}
						}
					
				});
				
				$('#suivant').click(function(){
					$('#1').attr('class','previous visited');
					$('#2').attr('class','previous visited');
					$('#3').attr('class','previous visited');
					$('#4').attr('class','previous visited');
					$('#5').attr('class','active');
    				$('.titreSlide').text('Essential points');
    				$('#instructions').text('Try to remember all these points, note them if you want. Then click "Next" to learn about Change Orders! ');
    				$('.formation').html('<div id=\"essentialPoints\"><ul id=\"listeEssentialPoints\"><li>Each article is designated by an UPN (Universal Part Number).<li>Each UPN has a universal codification divided in 5 parts.<li>The first digit gives informations about the article type.<li>Each UPN has 2 levels of description.</ul></div>');
				});
				
				$('#suivant').click(function(){
					$('#1').attr('class','previous visited');
					$('#2').attr('class','previous visited');
					$('#3').attr('class','previous visited');
					$('#4').attr('class','active');
					$('#5').attr('class','next');
					$('#suivant').hide();
    				$('.titreSlide').text('Let\'s check your understanding!!');
    				$('#instructions').text('Select the good description for each description level of this article. When you feel sure about your answers, verify it by clicking on the "Verify Button". If your answers are ok, click "Next".');
					$('.formation').html("<button id=\"memo\">Memo</button><img id=\"aideMemo\" alt=\"tableauAide\" src=\"1stDigit.png\" /><div id=\"codifEx\"><span>Some description exercices :</span></br>A resistance description</div><div id=\"level\"><div id=\"level1\">Level 1<form><select id=\"select16\"><option value=\"B M FLX 16L FR4 12X25\">B M FLX 16L FR4 12X25<option value=\"R S RES 470K72 01005\">R S RES 470K72 01005</select></form><div><div id=\"level2\">Level 2<form><select id=\"select17\"><option value=\"1.6mm ENIG 130C\">1.6mm ENIG 130C<option value=\"0.1% 31mW CAR 100PPM\">0.1% 31mW CAR 100PPM</select></form></div></div><button id=\"verify\">Verify</button>");
					$('#aideMemo').hide();
					$('#memo').mouseenter(function(){
						$('#aideMemo').css("height","200px");
						$('#aideMemo').css("width","450px");
						$('#aideMemo').css("position","absolute");
						$('#aideMemo').css("top","0");
						$('#aideMemo').css("right","0");
						$('#aideMemo').show();
					});
					$('#memo').mouseleave(function(){
						$('#aideMemo').hide();
					});
					/*$('#verify').mouseenter(function(){
						if ($('#select1 option[value="M"]').attr("selected")&&$('#select3 option[value="02"]').attr("selected")) {}
					}); */
					$('#suivant').show();
					
					$('#suivant').click(function(){
						$('#1').attr('class','previous visited');
						$('#2').attr('class','previous visited');
						$('#3').attr('class','previous visited');
						$('#4').attr('class','previous visited');
						$('#5').attr('class','active');
    					$('.titreSlide').text('Essential points');
    					$('#instructions').text('Try to remember all these points, note them if you want. Then click "Next" to learn about Change Orders! ');
    					$('.formation').html('<div id=\"essentialPoints\"><ul id=\"listeEssentialPoints\"><li>Each article is designated by an UPN (Universal Part Number).<li>Each UPN has a universal codification divided in 5 parts.<li>The first digit gives informations about the article type.<li>Each UPN has 2 levels of description.</ul></div>');
					});
				});
			});
		});
	});

});
    
    
    
    
  
  

});








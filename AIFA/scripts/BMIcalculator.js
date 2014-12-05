	document.getElementById('submit').addEventListener('click', calculateBmi);
	document.getElementById('metric').addEventListener('click',showUnitMeasure);
	document.getElementById('imperial').addEventListener('click',showUnitMeasure);
	document.getElementById('gender').addEventListener('click', checkGender);

//==============================================================================
//Gender Selector===============================================================
//==============================================================================	
	function checkGender(){
		if(document.getElementById('gender').value == "default-gender"){
			document.getElementById('couple').style.display = "block";
			document.getElementById('img-male').style.display = "none";
			document.getElementById('img-female').style.display = "none";
			document.getElementById('message').innerHTML = " ";		
		}
		else if(document.getElementById('gender').value == 'male'){
			document.getElementById('couple').style.display = "none";
			document.getElementById('img-male').style.display = "block";
			document.getElementById('img-female').style.display = "none";
			document.getElementById('message').innerHTML = "Hello Good Looking, pick your measure";
		}
		else{
			document.getElementById('couple').style.display = "none";
			document.getElementById('img-male').style.display = "none";
			document.getElementById('img-female').style.display = "block";
			document.getElementById('message').innerHTML = "Hi Beauty, choose your measure";
		}
	}
	
	function showUnitMeasure(){
		if(document.getElementById('imperial').checked){
			document.getElementById("unit-imperial").style.display = 'block';
			document.getElementById("unit-metric").style.display = 'none';
		}
		else{
			document.getElementById("unit-metric").style.display = 'block';
			document.getElementById("unit-imperial").style.display = 'none';		
		}

	}
//==========================================
//ADIVCE BOX	
	$(document).ready(function(){
		$("#treat1").click(function(){
			$("#showTreat1").slideToggle();
		});
		$("#treat2").click(function(){
			$("#showTreat2").slideToggle();
		});
		$("#treat3").click(function(){
			$("#showTreat3").slideToggle();
		});	
		$("#food1").click(function(){
			$("#foodTips1").slideToggle();
		});	
		$("#food2").click(function(){
			$("#foodTips2").slideToggle();
		});			

	});
	
//=====================================================================================
//BMI CALCULATOR AREA =================================================================
//=====================================================================================	
	function calculateBmi() {
	
		var feet = document.bmiForm.ft.value;
		var inch = document.bmiForm.ih.value;
		var pound = document.bmiForm.lbs.value;
		var weight = document.bmiForm.w.value;
		var height = document.bmiForm.h.value;

		if(weight > 0 && height > 0){	
			var finalBmi = Math.round((weight/(height * height))*100) / 100;
			document.bmiForm.result.value = finalBmi;
			bmiResult();
		}
		else if(pound > 0 && inch > 0){
			var finalBmi = Math.round((pound * 703)/(inch * inch));
			document.bmiForm.result.value = finalBmi;
			bmiResult();		
		}
		else if(pound > 0 && feet > 0){
			var finalBmi = Math.round((pound * 4.88)/(feet * feet));
			document.bmiForm.result.value = finalBmi;
			bmiResult();		
		}
		else{
			alert("Please Fill correctly");
		}		

		function bmiResult(){
			if(finalBmi < 18.5){
				document.getElementById('meaning').innerHTML = "You are underweight - supply your nutrition ";
				document.getElementById('underweight-treatment').style.display = 'block';
				document.getElementById('overweight-treatment').style.display = 'none';
				document.getElementById('obsity-treatment').style.display = 'none';
			}
			else if(finalBmi > 18.5 && finalBmi < 24.9){
				document.getElementById('meaning').innerHTML = "You are in good shape keep going";
			}
			else if(finalBmi > 25 && finalBmi < 29.9){
				document.getElementById('meaning').innerHTML = "Overweight: Modarate your nutrition";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'block';
				document.getElementById('obsity-treatment').style.display = 'none';
			}
			if(finalBmi > 30 && finalBmi < 34.9){
				document.getElementById('meaning').innerHTML = "Obese first degree: reduze your nutrition ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}
			else if(finalBmi > 35 && finalBmi < 39.9){
				document.getElementById('meaning').innerHTML = "Obese second degree: Attention reduze your nutrition ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}
			else if(finalBmi > 40){
				document.getElementById('meaning').innerHTML = "Obese third degree: Danger check your nutritionist ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}		
		}
	}			
			
			
			
			
			
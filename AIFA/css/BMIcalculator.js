	document.getElementById('submit').addEventListener('click', calculateBmi);
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
			alert("Please Fill in everything correctly");
		}		
		function bmiResult(){
			if(finalBmi < 18.5){
				document.bmiForm.meaning.value = "You are underweight - supply your nutrition ";
			}
			else if(finalBmi > 18.5 && finalBmi < 24.9){
				document.bmiForm.meaning.value = "Healthy: keep going";
			}
			else if(finalBmi > 25 && finalBmi < 29.9){
				document.bmiForm.meaning.value = "Overweight: Modarate your nutrition";
			}
			if(finalBmi > 30 && finalBmi < 34.9){
				document.bmiForm.meaning.value = "Obese first degree: reduze your nutrition ";
			}
			else if(finalBmi > 35 && finalBmi < 39.9){
				document.bmiForm.meaning.value = "Obese second degree: Attention reduze your nutrition ";
			}
			else if(finalBmi > 40){
				document.bmiForm.meaning.value = "Obese third degree: Danger check your nutritionist ";
			}		
		}
	}			
			
			
			
			
			
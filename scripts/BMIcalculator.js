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
				document.getElementById('meaning').innerHTML = "Obese: reduze your nutrition ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}
			else if(finalBmi > 35 && finalBmi < 39.9){
				document.getElementById('meaning').innerHTML = "Severely Obese: Attention reduze your nutrition ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}
			else if(finalBmi > 40){
				document.getElementById('meaning').innerHTML = "Morbidly: Danger check your nutritionist ";
				document.getElementById('underweight-treatment').style.display = 'none';
				document.getElementById('overweight-treatment').style.display = 'none';			
				document.getElementById('obsity-treatment').style.display = 'block';			
			}		
		}
	}			
			
	
//=====================================================================================
//Body Fat CALCULATOR AREA =================================================================
//=====================================================================================	
	function calculateBf() {
		var weight = document.bfForm.w.value;
		var height = document.bfForm.h.value;
		var neck = document.bfForm.neck.value;
		var waist = document.bfForm.waist.value;
		var hips = document.bfForm.hips.value;
		var forearm = document.bfForm.forearm.value;
		var wrist = document.bfForm.wrist.value;		
		
		var feet = document.bfForm.ft.value;
		var inch = document.bfForm.ih.value;
		var pound = document.bfForm.lbs.value;


		if(weight > 0 && height > 0){	
			var finalBf = Math.round((weight/(height * height))*100) / 100;
			document.bfForm.result.value = finalBmi;
			bmiResult();
		}
		else if(pound > 0 && inch > 0){
			var finalBmi = Math.round((pound * 703)/(inch * inch));
			document.bmiForm.result.value = finalBf;
			bfResult();		
		}
		else if(pound > 0 && feet > 0){
			var finalBf = Math.round((pound * 4.88)/(feet * feet));
			document.bfForm.result.value = finalBf;
			bfResult();		
		}
		else{
			alert("Please Fill correctly");
		}		

		function bmiResult(){
			if( /*select == male*/){
				if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 6){
						document.getElementById('meaning').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 6.1 && finalBf < 10){
						document.getElementById('meaning').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 10.1 && finalBf < 14){
						//above of media 
					}else if(finalBf > 14.1 && finalBf < 17){
						//media 
					}else if(finalBf > 17.1 && finalBf < 20){
						//under of medi
					}else if(finalBf > 20.1 && finalBf < 24){
						//bad
					}else if(finalBf > 24.1 && finalBf < 36){
						//very bad
					}					
				}//end of inner statement age 18 to 25 
				else if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 6){
						document.getElementById('meaning').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 6.1 && finalBf < 10){
						document.getElementById('meaning').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 10.1 && finalBf < 14){
						//above of media 
					}else if(finalBf > 14.1 && finalBf < 17){
						//media 
					}else if(finalBf > 17.1 && finalBf < 20){
						//under of medi
					}else if(finalBf > 20.1 && finalBf < 24){
						//bad
					}else if(finalBf > 24.1 && finalBf < 36){
						//very bad
					}					
				}//end of inner statement age 26 to age 35
				else if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 6){
						document.getElementById('meaning').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 6.1 && finalBf < 10){
						document.getElementById('meaning').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 10.1 && finalBf < 14){
						//above of media 
					}else if(finalBf > 14.1 && finalBf < 17){
						//media 
					}else if(finalBf > 17.1 && finalBf < 20){
						//under of medi
					}else if(finalBf > 20.1 && finalBf < 24){
						//bad
					}else if(finalBf > 24.1 && finalBf < 36){
						//very bad
					}					
				}//end of inner statement age 36 to age 54 
				else if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 6){
						document.getElementById('meaning').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 6.1 && finalBf < 10){
						document.getElementById('meaning').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 10.1 && finalBf < 14){
						//above of media 
					}else if(finalBf > 14.1 && finalBf < 17){
						//media 
					}else if(finalBf > 17.1 && finalBf < 20){
						//under of medi
					}else if(finalBf > 20.1 && finalBf < 24){
						//bad
					}else if(finalBf > 24.1 && finalBf < 36){
						//very bad
					}					
				}//end of inner statement
				else if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 6){
						document.getElementById('meaning').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 6.1 && finalBf < 10){
						document.getElementById('meaning').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 10.1 && finalBf < 14){
						//above of media 
					}else if(finalBf > 14.1 && finalBf < 17){
						//media 
					}else if(finalBf > 17.1 && finalBf < 20){
						//under of medi
					}else if(finalBf > 20.1 && finalBf < 24){
						//bad
					}else if(finalBf > 24.1 && finalBf < 36){
						//very bad
					}					
				}//end of inner statement age 46 to age 55				
			}//end of statment
			
				
				else if(finalBf > 26 && finalBf < 35){
					document.getElementById('meaning').innerHTML = "You are in good shape keep going";
				}
				else if(finalBmi > 25 && finalBmi < 29.9){
					document.getElementById('meaning').innerHTML = "Your body fat are good - keep checking";
/* 					document.getElementById('underweight-treatment').style.display = 'none';
					document.getElementById('overweight-treatment').style.display = 'block';
					document.getElementById('obsity-treatment').style.display = 'none'; */
				}
				if(finalBmi > 30 && finalBmi < 34.9){
					document.getElementById('meaning').innerHTML = "Obese: reduze your nutrition ";
					document.getElementById('underweight-treatment').style.display = 'none';
					document.getElementById('overweight-treatment').style.display = 'none';			
					document.getElementById('obsity-treatment').style.display = 'block';			
				}
				else if(finalBmi > 35 && finalBmi < 39.9){
					document.getElementById('meaning').innerHTML = "Severely Obese: Attention reduze your nutrition ";
					document.getElementById('underweight-treatment').style.display = 'none';
					document.getElementById('overweight-treatment').style.display = 'none';			
					document.getElementById('obsity-treatment').style.display = 'block';			
				}
				else if(finalBmi > 40){
					document.getElementById('meaning').innerHTML = "Morbidly: Danger check your nutritionist ";
					document.getElementById('underweight-treatment').style.display = 'none';
					document.getElementById('overweight-treatment').style.display = 'none';			
					document.getElementById('obsity-treatment').style.display = 'block';			
				}
			}	
		}
	}					
			
			
			
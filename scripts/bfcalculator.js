	document.getElementById('submit').addEventListener('click', calculateBmi);
	document.getElementById('metric-bf').addEventListener('click',showUnitMeasure);
	document.getElementById('imperial-bf').addEventListener('click',showUnitMeasure);
	document.getElementById('gender-bf').addEventListener('click', checkGender);

//==============================================================================
//Gender Selector===============================================================
//==============================================================================	
	function checkGender(){
		if(document.getElementById('gender-bf').value == "default-gender"){
			document.getElementById('couple-bf').style.display = "block";
			document.getElementById('img-male-bf').style.display = "none";
			document.getElementById('img-female-bf').style.display = "none";
			document.getElementById('message-bf').innerHTML = " ";		
		}
		else if(document.getElementById('gender-bf').value == 'male-bf'){
			document.getElementById('couple-bf').style.display = "none";
			document.getElementById('img-male-bf').style.display = "block";
			document.getElementById('img-female-bf').style.display = "none";
			document.getElementById('message-bf').innerHTML = "Hello Good Looking, pick your measure";
		}
		else{
			document.getElementById('couple-bf').style.display = "none";
			document.getElementById('img-male-bf').style.display = "none";
			document.getElementById('img-female-bf').style.display = "block";
			document.getElementById('message-bf').innerHTML = "Hi Beauty, choose your measure";
		}
	}
	
	function showUnitMeasure(){
		if(document.getElementById('imperial-bf').checked){
			document.getElementById("unit-imperial-bf").style.display = 'block';
			document.getElementById("unit-metric-bf").style.display = 'none';
		}
		else{
			document.getElementById("unit-metric-bf").style.display = 'block';
			document.getElementById("unit-imperial-bf").style.display = 'none';		
		}

	}


//=====================================================================================
//Body Fat CALCULATOR AREA =================================================================
//=====================================================================================	
	function calculateBf() {
		var weight = document.bfForm.w-bf.value;
		var height = document.bfForm.h-bf.value;
		var neck = document.bfForm.neck.value;
		var waist = document.bfForm.waist.value;
		var waist = document.bfForm.abdomen.value;
		var hips = document.bfForm.hips.value;
		var forearm = document.bfForm.forearm.value;
		var wrist = document.bfForm.wrist.value;		
		var feet = document.bfForm.ft-bf.value;
		var inch = document.bfForm.ih-bf.value;
		var pound = document.bfForm.lbs-bf.value;


		if(weight > 0 && height > 0){	
			var finalBfMale = (86.010* ((Math.log(10)(abdomen - neck))) - 70.041 * (Math.log(10)(height) + 36.76;
			var finalBfFemale = 163.205*(Math.log(10)(waist + hip - neck) - 97.684 * (Math.log(10)(height) + 78.387;
			document.bfForm.result.value = finalBfMale;
			document.bfForm.result.value = finalBfFemale;
			bfResult();
		}
		else if(pound > 0 && inch > 0){
			var finalBfMale = 86.010*(Math.log(10)(abdomen - neck) - 70.041 * (Math.log(10)(height) + 36.76;
			var finalBfFemale = 163.205*(Math.log(10)(waist + hip - neck) - 97.684 * (Math.log(10)(height) + 78.387;
			document.bfForm.result.value = finalBfMale;
			document.bfForm.result.value = finalBfFemale;
			bfResult();		
		}
		else if(pound > 0 && feet > 0){
			var finalBfMale = 86.010*(Math.log(10)(abdomen - neck) - 70.041 * (Math.log(10)(height) + 36.76;
			var finalBfFemale = 163.205*(Math.log(10)(waist + hip - neck) - 97.684 * (Math.log(10)(height) + 78.387;
			document.bfForm.result.value = finalBfMale;
			document.bfForm.result.value = finalBfFemale;
			bfResult();		
		}
		else{
			alert("Please Fill correctly");
		}		

		function bfResult(){
			if( document.getElementById('gender-bf').value === 'male-bf'){
				document.getElementById('gender-bf').focus();
				if(age > 18 && age < 25){
					if(finalBf > 4 && finalBf < 7){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 7.1 && finalBf < 11){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 11.1 && finalBf < 14){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media"; 
					}else if(finalBf > 14.1 && finalBf < 17){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 17.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 21.1 && finalBf < 25){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 25.1 && finalBf < 36){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 18 to 25 
				else if(age > 26 && age < 35){
					if(finalBf > 8 && finalBf < 12){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 12.1 && finalBf < 16){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 16.1 && finalBf < 19){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 19.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 21.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 24.1 && finalBf < 27){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 27.1 && finalBf < 36){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 26 to age 35
				else if(age > 36 && age < 45){
					if(finalBf > 10 && finalBf < 15){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 15.1 && finalBf < 19){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 19.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 21.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 24.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 26.1 && finalBf < 30){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 30.1 && finalBf < 39){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 36 to age 54 
				else if(age > 46 && age < 55){
					if(finalBf > 12 && finalBf < 17){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 17.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 21.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 24.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 26.1 && finalBf < 28){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 28.1 && finalBf < 31){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 31.1 && finalBf < 38){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 46 to age 55
				else if(age > 56 && age < 65){
					if(finalBf > 13 && finalBf < 19){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 19.1 && finalBf < 22){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 22.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media"; 
					}else if(finalBf > 24.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 26.1 && finalBf < 27){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 28.1 && finalBf < 31){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 31.1 && finalBf < 38){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 46 to age 55				
			}//end of statment gender male
			else if(document.getElementById('gender-bf').value === 'female-bf'){
					document.getElementById('gender-bf').focus();
				if(age > 18 && age < 25){
					if(finalBf > 13 && finalBf < 17){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 17.1 && finalBf < 20){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 20.1 && finalBf < 23){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 23.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 26.1 && finalBf < 29){
						document.getElementById('meaning-bf').innerHTML = "You are under of the media";
					}else if(finalBf > 29.1 && finalBf < 32){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 32.1 && finalBf < 43){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 18 to 25 
				else if(age > 26 && age < 35){
					if(finalBf > 14 && finalBf < 17){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 17.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 21.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 24.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 26.1 && finalBf < 30){
						document.getElementById('meaning-bf').innerHTML = "You are under of the media";
					}else if(finalBf > 30.1 && finalBf < 36){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 36.1 && finalBf < 49){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 26 to age 35
				else if(age > 36 && age < 45){
					if(finalBf > 10 && finalBf < 15){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 15.1 && finalBf < 19){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 19.1 && finalBf < 21){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media";
					}else if(finalBf > 21.1 && finalBf < 24){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 24.1 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are under of the media";
					}else if(finalBf > 26.1 && finalBf < 30){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 30.1 && finalBf < 39){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 36 to age 55 
				else if(age > 46 && age < 55){
					if(finalBf > 17 && finalBf < 22.5){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 22.6 && finalBf < 26){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 26.1 && finalBf < 29){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media"; 
					}else if(finalBf > 29.1 && finalBf < 32){
						document.getElementById('meaning-bf').innerHTML = "You are in the media";
					}else if(finalBf > 32.1 && finalBf < 35){
						document.getElementById('meaning-bf').innerHTML = "You are under of the media";
					}else if(finalBf > 35.1 && finalBf < 39){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 39.1 && finalBf < 50){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 46 to age 55
				else if(age > 56 && age < 65){
					if(finalBf > 18 && finalBf < 23.5){
						document.getElementById('meaning-bf').innerHTML = "Your body fat are Excellent - keep checking";
					}else if(finalBf > 23.6 && finalBf < 27){
						document.getElementById('meaning-bf').innerHTML = "You are in good shape keep going";
					}else if(finalBf > 27.1 && finalBf < 30){
						document.getElementById('meaning-bf').innerHTML = "You are above of the media"; 
					}else if(finalBf > 31.1 && finalBf < 33){
						document.getElementById('meaning-bf').innerHTML = "You are in the media"; 
					}else if(finalBf > 33.1 && finalBf < 36){
						document.getElementById('meaning-bf').innerHTML = "You are under of the media";
					}else if(finalBf > 36.1 && finalBf < 39){
						document.getElementById('meaning-bf').innerHTML = "Bad";
					}else if(finalBf > 39.1 && finalBf < 49){
						document.getElementById('meaning-bf').innerHTML = "very bad";
					}					
				}//end of inner statement age 46 to age 55				
			}//end of statment gender male			
			
			
		
		}
	}//end of Body Fat function					
			
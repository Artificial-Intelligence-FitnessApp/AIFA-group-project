	document.getElementById('#li1').addEventListener('click',changeTXT);
	document.getElementById('#li2').addEventListener('click',changeTXT);

function changeTXT(){
	if(document.getElementByClass('.pg1').style.display = 'block';){
		document.getElementById('.pg2').style.display = 'none';
	}
	else{
		document.getElementById('pg2').style.display = 'block';
		document.getElementById('pg1').style.display = 'block';
	}
	
}
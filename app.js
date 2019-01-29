//Function that gets user input and calculates the new bill amount per person and total
document.getElementById('container').onchange = function() {
	var bill = Number(document.getElementById('billAmount').value);
	var tip = document.getElementById('tipAmount').value;
	var split = document.getElementById('split').value;
	var tipTotal = bill * (tip / 100);
	var perPerson = (bill + tipTotal) / split;
	var final = perPerson * split;
	
	document.getElementById('percent').innerHTML = tip + "%";
	document.getElementById('people').innerHTML = split;
	document.getElementById('total').innerHTML = "$" + perPerson.toFixed(2);
	document.getElementById('final').innerHTML= "$" + final.toFixed(2);
}




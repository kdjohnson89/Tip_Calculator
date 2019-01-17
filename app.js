document.getElementById('container').onchange = function() {
	var bill = document.getElementById('billAmount').value;
	var tip = document.getElementById('tipAmount').value;
	var total = bill * (tip/100);
	console.log(tip);
}


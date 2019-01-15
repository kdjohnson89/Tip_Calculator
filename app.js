var bill = document.getElementById('bill_amount').value;
var input_percent = document.getElementById('tip_amount').value;
var ten = document.getElementById('ten');
var fifteen = document.getElementById('fifteen');
var twenty = document.getElementById('twenty');

ten.addListener('click', function() {
								var total = document.getElementById('total');
								bill += bill * 0.10;
								total = bill;
								return total;
								})

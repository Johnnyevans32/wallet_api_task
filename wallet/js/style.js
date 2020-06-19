function calc(){
	
	let money= document.getElementById('amount').value;
	
	if (money === "") {
		document.getElementById('result').innerHTML = "Enter the amount you wish to invest/save!! ";
	}else{
		let amount = parseInt(money)

		let time = document.getElementById('period').value;

		let plan = document.getElementById('plan').value;

		let text = "Your interest amount will be ";

		let currency = " NAIRA After ";

		let month = "Months <br> Your Total balance will be "

		if (plan  === 'Piggybank') {
			let interest = 10;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		if (plan  === 'Safelock') {
			let interest = 15.5;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		if (plan  === 'Target') {
			let interest = 10;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		if (plan  === 'Flex') {
			let interest = 10;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		if (plan  === 'Flex_Dollar') {
			let interest = 6;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		if (plan  === 'Investify') {
			let interest = 25;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month + Math.round(((amount *  time * interest)/100) + amount) + " naira.";
		}
		
	}	
}

function calc1(){
	var amount,period,time,formula

	var amount = document.getElementById("amount").value;
 
	var period = document.getElementById("period").value;

	if (amount==="" || period===""){
		text = "Fill in all fields Please!!";
	}else{
		let plan = document.getElementById('plan').value;

		if (plan  === 'Daily') {
			let time = 30;
			text =  "You will need to save " + Math.round(amount/(time * period)) + " NAIRA " + plan + " for the next " + period + " Months!";
		} 
		if (plan  === 'Weekly') {
			let time = 4.28571429;
			text=  "You will need to save " + Math.round(amount/(time * period))  + " NAIRA " + plan + " for the next " + period + " Months!";
		}
		if (plan  === 'Monthly') {
			let time = 1;
			text =  "You will need to save " + Math.round(amount/(time * period))  + " NAIRA " + plan + " for the next " + period + " Months!";
		}	
	}
	document.getElementById('result').innerHTML = text	
}

function printDiv() { 
	var divContents = document.getElementById("result").innerHTML; 
	var a = window.open('', '', 'height=3000, width=3000'); 
	a.document.write('<html>'); 
	a.document.write('<body >'); 
	a.document.write(divContents); 
	a.document.write('</body></html>'); 
	a.document.close(); 
	a.print(); 
} 
function temp(number, type){
	if(type=='c2f'){
		console.log('Celsius to Fahrenheit:' + ' ' + (number * (9/5) + 32) + '°F')
	}
	else if(type=='f2c'){
		console.log('Fahrenheit to Celsius:' + ' ' + (number - 32) * 5 / 9 + '°C')
	}
	else('error')
}


temp(10, 'c2f');
temp(20, 'f2c');
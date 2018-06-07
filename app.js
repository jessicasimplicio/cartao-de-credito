/*
Laboratoria - Final Product 1
Credit Card validation - Luhn algorithm

Author: J Simplicio
06/07/2018

*/

function isValidCard() {
	var cardNumber = prompt('Qual o numero do seu cartao?');
  	var arrayNumberInverted = [];
	var sum = 0;

	//Validacao de entrada
	while ( cardNumber === '' || cardNumber === ' ') {
	  cardNumber = prompt ("Por favor insira um número");
	}

	//Coloca os números num array de trás para frente
	for (var i = cardNumber.length - 1; i >= 0; i--) {
		arrayNumberInverted.push(cardNumber.charAt(i));
	}
  
  	//Multiplica por 2 os valores nas posições pares (começa no index = 1) 
  	//do array invertido.
	for (var i = 1; i < arrayNumberInverted.length; i = i + 2) {
		var doubleNumber = arrayNumberInverted[i] * 2;
		if (doubleNumber > 9) {
			arrayNumberInverted[i] = doubleNumber - 9;
		} else {
			arrayNumberInverted[i] = doubleNumber;
		}
	}

	//Soma todos os valores do array
	for (var i = 0; i < arrayNumberInverted.length; i++) {
		sum += parseInt(arrayNumberInverted[i]);
	}

	//O número do cartao é valido se for divisível por 10
	if ( sum % 10 === 0){
    	alert('É válido');
  	}else {
    	alert ("Não é válido");
  	}
}

isValidCard();
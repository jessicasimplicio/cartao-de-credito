function isValid() {
	var cardNumber = prompt('Qual o numero do seu cartao?');
  var isValid;
	//while ( cardNumber === '') {
	//  cardNumber = prompt ("Por favor insira um número");
	//}

	var cardNumberLength = cardNumber.length;
	var arrayNumberInverted = [];
	var sum = 0;

	for (var i = cardNumberLength - 1; i >= 0; i--) {
		arrayNumberInverted.push(cardNumber.charAt(i));
	}
  
	for (var i = 1; i < arrayNumberInverted.length; i = i + 2) {
		var doubleNumber = arrayNumberInverted[i] * 2;
		if (doubleNumber > 9) {
			arrayNumberInverted[i] = doubleNumber - 9;
		} else {
			arrayNumberInverted[i] = doubleNumber;
		}
	}

	for (var i = 0; i < arrayNumberInverted.length; i++) {
		sum += parseInt(arrayNumberInverted[i]);
	}

  if ( sum % 10 === 0){
    return isValid = true;
  } else {
    return isValid = false;
  }
}

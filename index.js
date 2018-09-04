//module.exports.cardValidator = 
function cardValidator(cardNumber) {

	//Se é vazio ====> ou null??
	if (cardNumber === undefined || cardNumber === "") {
				
		//throw new TypeError('Vazio!');
		console.log("Vazio");
		return cardNumber;
	}

	//String 
	if (typeof cardNumber === "string"){
			console.log("String");
	}

	//è numero
	if (typeof cardNumber === "number"){

		if(Number.isInteger(cardNumber)){
			if (cardNumber.toString().length !== 13){
				console.log("NUmero deve ter 13 digitos");
			} else {
				console.log("NUmero tem 13 digitos");
			}

		} else{
			console.log("Numero nao inteiro");
		}
	}
}



module.exports.badFn = function badFn() { throw new TypeError('Illegal salmon!'); };

//cardValidator("");
//cardValidator();
//cardValidator("1fga23 ajsai 34");
//cardValidator("123");
//cardValidator(123);
//cardValidator(1234567890123);




/*function isValidCard() {
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
}*/
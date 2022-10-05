var operadores = ['-', '+', '.', '*', '/'];

function inserir(num){
	var resultado = document.getElementById('resultado').innerHTML;
	var ultimoChar = resultado[resultado.length - 1];
	
	//Condicional para impedir inclusão de operadores como primeira entrada
	if (resultado.length == 0 && (num == "/" || num == "*" || num == "+" || num ==".")) {
		exit;	

	//Condicional para impedir repetição de zeros à esquerda 
	}else if (resultado == "0" && num =="0"){
		exit;

	// Condicional para impedir sinal de negativo para o "zero"
	}else if(resultado == "-" && num == "0"){
		document.getElementById('resultado').innerHTML = "0";
		exit;

	//Condicional para impedir que operadores se repetam em sequencia 
	}else if((operadores.indexOf(num) > -1) && (operadores.indexOf(ultimoChar) > -1)){
		exit;
	}else{

		//Limitar quantidades de caracteres para a tela da calculadora
		if (resultado.length < 12) {
			document.getElementById('resultado').innerHTML = num;
			document.getElementById('resultado').innerHTML = resultado + num;
		}else{
			exit;
		}		
	}
}
function limparTudo(){
	document.getElementById('resultado').innerHTML = "";
}
function apagar(){
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular(){

	var resultado = document.getElementById('resultado').innerHTML;
	
	
	if(resultado){
		var conta = eval(resultado);
		conta = conta.toString();
		
		//limitar resultado para o tamanho da tela da calculadora
		if (conta.length > 12){
			document.getElementById('resultado').innerHTML = conta.substring(0, 12);
		}else{
			document.getElementById('resultado').innerHTML = eval(resultado);
		}
	}else{
		exit;
	}		
}
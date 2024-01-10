// Declaramos as constante chamada 
//valorEsperado e atribuindo um valor do número fixo
const valorEsperado = (2023+1)// Declaracao de senha fixa 
const valorUsuario = prompt("Digite a SENHA de quatro dígitos:");//exibe uma caixa de diálogo no navegador p/inserir 

// armazenar em uma variável um elemento HTML com atributo Id
let resultadoElement = document.getElementById("resultado");

// função de analisar uma string e retorna um inteiro
if (parseInt(valorUsuario) === valorEsperado) {
  resultadoElement.textContent ="Parabéns!";
} else if (parseInt(valorUsuario) > valorEsperado) 

  
    if (parseInt(valorUsuario)  <=2025)  {
      resultadoElement.textContent ="O próximo valor deve ser muito menor.";
    } else {
      resultadoElement.textContent ="O próximo valor deve ser menor.";
    }
   else {
    if (parseInt(valorUsuario)  >= 2023) {
      resultadoElement.textContent ="O próximo valor deve ser maior.";
  } else {
      resultadoElement.textContent ="O próximo valor deve ser  muito maior.";
    }
  }


const calcular = document.getElementById("calcular");




function imc(){
    const nome = document.getElementById("nome").value;
    const altura  = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");



    if(nome != '' && altura != ''&& peso != '' ){
        const valorImc = (peso /(altura*altura)).toFixed(2);
        resultado.textContent = valorImc;
        let obesidade = '';
        

    if(valorImc <= 18.5){
        obesidade = 'Abaixo do peso';
    }else if(valorImc <= 25,0) {
        obesidade = 'Peso ideal';

    }else if(valorImc <= 30,0){
        obesidade = 'Acima do peso';
    }else if (valorImc <= 35,0){
        obesidade = 'Obesidade grau I';
    }else if (valorImc <= 40,0 ){
        obesidade = 'Obesidade grau II';
    }else {
        obesidade =  'Obesidade grau III';
    }
    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${obesidade}`;

    }else{
        
        resultado.textContent = 'preencha os dados';
        
        

    }
   
}





calcular.addEventListener('click',imc);






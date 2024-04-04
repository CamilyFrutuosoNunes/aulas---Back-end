function calcular(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
if (isNaN (num1)|| isNaN(num2)){
    document.getElementById('resultado').innerText='por favor insira numero validos:';
    return;
}
var soma=num1+ num2;
document.getElementById('resultado').innerText= 'resultado:'+ soma;
}
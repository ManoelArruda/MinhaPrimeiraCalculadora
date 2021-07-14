function bgDefault(){
    limparBg();
    document.querySelector('#container').classList.add('container');
}
function bgLite(){
    limparBg();
    document.querySelector('#container').classList.add('bgLite');
}
function gbBlue(){
    limparBg();
    document.querySelector('#container').classList.add('bgBlue');
}
function limparBg(){
    document.querySelector('#container').classList.remove('bgLite');
    document.querySelector('#container').classList.remove('container');
    document.querySelector('#container').classList.remove('bgBlue');
}
function inserir(num){
    const numero = document.getElementById('result-calc').innerHTML;
    document.getElementById('result-calc').innerHTML = numero + num;
}
function calcular(){
    let resultado = document.getElementById('result-calc').innerHTML;
    if(resultado){
    document.getElementById('result-calc').innerHTML = eval(resultado);
    }else{
        document.getElementById('result-calc').innerHTML = "nada...";

    }
}   
function limpar(){
    document.getElementById('result-calc').innerHTML = "";
}
function apagar(){
    const resultado = document.getElementById('result-calc').innerHTML;
    document.getElementById('result-calc').innerHTML = resultado.substring(0, resultado.length -1);
}

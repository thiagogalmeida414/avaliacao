var botao = document.querySelector('#calcular')

botao.addEventListener("click", function(){
    
    var n1 = parseInt(document.querySelector('#numero1').value);

    var n2 = parseInt(document.querySelector('#numero2').value);

    var n3 = n1;
    n1 = n2;
    n2 = n3;

    document.querySelector('#resultado').innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Resultado</h4>
    <p>Resultado: ${n1}</p>
    <p>Resultado: ${n2}</p>
</div>`;
});
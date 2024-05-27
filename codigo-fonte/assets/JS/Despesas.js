document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const data = document.getElementById('data').value;
        const descricao = document.getElementById('desc').value;

        console.log('Valor:', valor);
        console.log('Categoria:', categoria);
        console.log('Usuário:', usuario);
        console.log('Data:', data);
        console.log('Descrição:', descricao);
    });
});

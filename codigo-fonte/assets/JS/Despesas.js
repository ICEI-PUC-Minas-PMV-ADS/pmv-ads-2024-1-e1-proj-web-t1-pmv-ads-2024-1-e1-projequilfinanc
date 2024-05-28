document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado');
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulário submetido');

        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const data = document.getElementById('data').value;
        const descricao = document.getElementById('desc').value;

        if (valor && categoria && usuario && data && descricao) {
            console.log('Valor:', valor);
            console.log('Categoria:', categoria);
            console.log('Usuário:', usuario);
            console.log('Data:', data);
            console.log('Descrição:', descricao);
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});


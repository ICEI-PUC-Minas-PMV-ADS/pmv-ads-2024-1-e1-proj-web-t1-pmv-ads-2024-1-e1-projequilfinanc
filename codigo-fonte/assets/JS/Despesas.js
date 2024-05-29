document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado'); // Verificação adicional
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita o envio padrão do formulário

        console.log('Formulário submetido'); // Verificação adicional

        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const data = document.getElementById('data').value;
        const descricao = document.getElementById('desc').value;

        if (valor && categoria && usuario && data && descricao) {
            alert('Cadastro de despesas enviado com sucesso!');  // Alerta de sucesso
            formulario.reset();  // Limpa os campos do formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const cadastrarBtn = document.getElementById('cadastrar');
    const entrarBtn = document.getElementById('entrar');

    cadastrarBtn.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (nome && email && senha) {
            // Exibir os valores no console (aqui você pode adicionar a lógica de validação ou envio para o servidor)
            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Senha:', senha);
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    entrarBtn.addEventListener('click', () => {
        // Redirecionar para a página de login
        window.location.href = 'login.html'; // Altere o caminho conforme necessário
    });
});

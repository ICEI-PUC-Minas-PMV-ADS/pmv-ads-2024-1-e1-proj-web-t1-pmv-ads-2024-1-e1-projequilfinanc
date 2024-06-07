document.addEventListener('DOMContentLoaded', (event) => {
    const cadastrarBtn = document.getElementById('cadastrar');
    const entrarBtn = document.getElementById('entrar');

    cadastrarBtn.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (nome && email && senha) {
            if (senha.length >= 6 && /[A-Z]/.test(senha)) {
                console.log('Nome:', nome);
                console.log('Email:', email);
                console.log('Senha:', senha);
                localStorage.setItem("name", nome);
                localStorage.setItem("email", email);
                localStorage.setItem("senha", senha);
                alert('Cadastro realizado com sucesso!');
                window.location.href = "cadastro_perfil.html";
            } else {
                alert('A senha deve ter pelo menos 6 caracteres e incluir uma letra maiúscula.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    entrarBtn.addEventListener('click', () => {
        window.location.href = "login.html";
    });
});



// armazenar os dados digitados nos campos em constatantes
const dadosIndividual = document.querySelector('#dados_usuario');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const tel = document.querySelector('#number');
const dataNascimento = document.querySelector('#DataNascimento');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

dadosIndividual.addEventListener("submit", (event) => {
    event.preventDefault();
// validar as  informaçoes
    if (nome.value === "") {
        alert("Por favor, preencha seu nome.");
        return;
    }

    if (sobrenome.value === "") {
        alert("Por favor, preencha seu sobrenome.");
        return;
    }

    if (tel.value === "" || !TelValidado(tel.value)) {
        alert("Por favor, preencha com um telefone válido.");
        return;
    }

    if (email.value === "" || !EmailValidado(email.value)) {
        alert("Por favor, preencha com um email válido.");
        return;
    }

    if (!ValidateSenha(senha.value, 6)) {
        alert("A senha precisa ter no mínimo 6 caracteres.");
        return;
    }

        // Armazenar os dados validados na localStorage
        const Dados_Tela_Individual = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            telefone: tel.value,
            dataNascimento: dataNascimento.value,
            email: email.value,
            senha:senha.value
        // Adicione mais campos, se necessário
        };
        
        localStorage.setItem('dadosIndividuais', JSON.stringify(Dados_Tela_Individual));
    
        // Enviar o formulário
        dadosIndividual.submit();
        alert("dados enviados com sucesso")
;})


// funçoes para validar os dados 
function TelValidado(tel) {
    const telRegex = /^\(?\+?(\d{1,3})?\)?[-.\s]?(\d{2,4})[-.\s]?(\d{4,5})[-.\s]?(\d{4})$/;
    return telRegex.test(tel);
}

function EmailValidado(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function ValidateSenha(senha, minimoDigitos) {
    return senha.length >= minimoDigitos;
}

document.addEventListener('DOMContentLoaded', function () {
    const nome = localStorage.getItem('name');

    if (nome) {
        const usuarioElement = document.getElementById('mensagem');
        usuarioElement.textContent = `Olá, ${nome}!`;

    }
});
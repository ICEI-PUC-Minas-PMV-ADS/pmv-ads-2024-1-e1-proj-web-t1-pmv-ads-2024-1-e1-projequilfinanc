document.addEventListener("DOMContentLoaded", function() {
// pegar os dados digitados pelos usuarios }
    const DadosFamiliares= document.querySelector('#dados_familiares');
    const FamiliarNome=  document.querySelector('#nome_Familiar');
    const sobrenomeFamiliar=document.querySelector('#sobrenome_Familiar');
    const NumCel= document.querySelector('#NumCel_Familiar');
    const DataNascimentoFamiliar=document.querySelector('#Data_Nasc_Familiar');
    const EmailFamiliar= document.querySelector('#Email_Familiar');
    const SenhaFamiliar= document.querySelector('#Senha_Familiar');
    const Membro1= document.querySelector('#Mem_1');
    const NumCelMembro1=document.querySelector('#Tel_mem1');
    const Membro2= document.querySelector('#Mem2');
    const NumCelMembro2=document.querySelector('#Tel_mem2');
    var mensagem=document.getElementById('# mesnagem')

    DadosFamiliares.addEventListener("submit", (event) => {
    event.preventDefault()
    // validando o form
    if (FamiliarNome.value === "" || Membro1.value === "") {
        alert("Por favor, preencha os campos de nome.");
        return;
    }
    if(sobrenomeFamiliar.value===""){
        alert("preencha seu sobrenome")
    }

    const numCelulares = [NumCel.value, NumCelMembro1.value];
        
    if (!TelefonesValidados(numCelulares)) {
        alert("Por favor, preencha todos os números de telefone corretamente.");
        return;
    }

    if (!ValidateSenhaFamiliar(SenhaFamiliar.value, 6)) {
        alert("A senha precisa ter no mínimo 6 caracteres.");
        return;
    }
    if (EmailFamiliar.value === "" || !EmailfamiliarValidado(EmailFamiliar.value)) {
        alert("Por favor, preencha com um email válido.");
        return;
    }
        const profile = JSON.parse(localStorage.getItem('esg_pincho1'));

        // Armazenar os dados validados na localStorage
        profile['data_user'] = {
            ...profile['data_user'],

            nome: nome.value,
            sobrenome: sobrenome.value,
            telefone: tel.value,
            dataNascimento: dataNascimento.value,
            email: email.value,
            senha: senha.value
        };

        localStorage.setItem('esg_pincho1', JSON.stringify(profile));

    // Enviar o formulário
        // DadosFamiliares.submit();
        alert("cadastro realizado com sucesso !!")

});
    // Função para validar números de telefone
    function TelefonesValidados(telefones) {
        const telRegex = /^\(?\+?(\d{1,3})?\)?[-.\s]?(\d{2,4})[-.\s]?(\d{4,5})[-.\s]?(\d{4})$/;

        for (let i = 0; i < telefones.length; i++) {
            if (!telRegex.test(telefones[i])) {
                return false;
            }
        }

        return true;
    }
    // função que valida a senha da tela familiar
    function ValidateSenhaFamiliar(SenhaFamiliar, minimoDigitos) {
        return SenhaFamiliar.length >= minimoDigitos;
    }
// função que valida o Email 
    function EmailfamiliarValidado(EmailFamiliar) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(EmailFamiliar);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const profile = localStorage.getItem('esg_pincho1');

    if (profile) {
        const data = JSON.parse(profile)

        const usuarioElement = document.getElementById('mensagem');
        usuarioElement.textContent = `Olá, ${data['data_user']['nome']}!`;

    }
});
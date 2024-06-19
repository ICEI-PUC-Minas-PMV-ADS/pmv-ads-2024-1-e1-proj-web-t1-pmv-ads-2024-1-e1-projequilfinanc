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
// armazenando dados em uma constante
    const familiardados={
        familiarNome:FamiliarNome.value,
        sobrenomefamiliar:sobrenomeFamiliar.value,
        numCel: NumCel.value,
        dataNascimentoFamiliar:DataNascimentoFamiliar.value,
        emailFamiliar:EmailFamiliar.value,
        senhafamiliar:SenhaFamiliar.value,
        membro1:Membro1.value,
        numCelMembro1: NumCelMembro1.value,
        membro2:Membro2.value,
        numCelMembro2:NumCelMembro2.value
    }
    // aqui eu as armazeno na local storage
    localStorage.setItem('familiardados', JSON.stringify(familiardados));
        
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
    const nome = localStorage.getItem('name');

    if (nome) {
        const usuarioElement = document.getElementById('mensagem');
        usuarioElement.textContent = `Olá, ${nome}!`;

    }
});

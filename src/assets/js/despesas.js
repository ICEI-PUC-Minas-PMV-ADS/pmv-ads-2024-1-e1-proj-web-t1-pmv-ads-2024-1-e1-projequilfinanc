loadMembers()

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado'); // Verificação adicional
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita o envio padrão do formulário
        const data = getUserData()
        const userId = 'esg_pincho1'

        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const dataVencimento = document.getElementById('data').value;
        const descricao = document.getElementById('desc').value;

        if (valor && categoria && usuario && dataVencimento && descricao) {
            alert('Cadastro de despesas enviado com sucesso!');  // Alerta de sucesso
            const receitas = []
            receitas.push({
                value: valor,
                category: categoria,
                member: usuario,
                desc: descricao,
                date: dataVencimento,
                form: "debit"
            })
            
            let bal = Number(data.finance.balance) - Number(valor)
            if (data.finance.lastMoviments && data.finance.debit) {
                data.finance.lastMoviments.push(...receitas)
                data.finance.debit.push(...receitas)
                data.finance.balance = bal
            } else if(data.finance.lastMoviments && !data.finance.debit){
                data.finance.lastMoviments.push(...receitas)
                data.finance.debit = [...receitas]
                data.finance.balance = bal
            } else {
                data.finance.lastMoviments = [...receitas]
                data.finance.debit = [...receitas]
                data.finance.balance = bal
            }
            
            localStorage.setItem(userId, JSON.stringify(data))
            formulario.reset()
            console.log(data)

        } else {
            alert('Por favor, preencha todos os campos.');
        }
        location.reload();
    });
});

function loadMembers(){
    const usuarios = document.getElementById('usuario');
    const data = getUserData()

    //console.log(`${profile} / ${members}`)
    for(let idx in data.profile.parent){
        const opt = document.createElement("option")
        const member = data.profile.parent[idx].name

        opt.textContent = member;
        opt.value = member;

        usuarios.appendChild(opt)
    }
}

// Pegar o ultimo ID cadastrado
function getUserData() {
    const data = localStorage.getItem('esg_pincho1');
    return data ? JSON.parse(data) : null;
}
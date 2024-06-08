document.addEventListener('DOMContentLoaded', function() {
    checkUserState();
    loadMembers()

    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const data = getUserData()
        const userId = 'esg_pincho1'

        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const tipo = document.getElementById('tipo').value
        const desc = document.getElementById('desc').value;

        if (valor && categoria && usuario && tipo && desc) {
            alert('Cadastro de despesas enviado com sucesso!');
            const receitas = []
            receitas.push({
                value: valor,
                category: categoria,
                member: usuario,
                type: tipo,
                desc: desc,
                form: "credit"
            })

            let bal = Number(data.finance.balance) + Number(valor)
            let ren = Number(data.finance.rent) + Number(valor)
            if (data.finance.lastMoviments && data.finance.credit) {
                data.finance.lastMoviments.push(...receitas)
                data.finance.credit.push(...receitas)
                data.finance.balance = bal
                data.finance.rent = ren
            } else {
                data.finance.lastMoviments = [...receitas]
                data.finance.credit = [...receitas]
                data.finance.balance = bal
                data.finance.rent = ren
            }
            
            localStorage.setItem(userId, JSON.stringify(data))
            formulario.reset()

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

function checkUserState(){
    let userId = 'esg_pincho1'
    if(!userId) {
        alert('Usuário inválido, se cadastre primeiro para continuar')
        document.location.href = 'Login.html'
    }

    /* 
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email')
    const userPass = localStorage.getItem('senha')
    const profile = localStorage.getItem('user_profile')

    if(!userName || !userEmail || !userPass || !profile){
        alert('Usuário inválido, se cadastre primeiro para continuar')
        document.location.href = 'Login.html'

    } 
    */
}


// Gerando ID apartir do total de itens no localStorage
function getLastID() {
    let lastKey = 0
    let keys = Object.keys(localStorage);
    if (keys.length === 0) {
        return lastKey += 1;
    }
    keys.sort();
    lastKey = keys[keys.length - 1];
    return lastKey
}

// Pegar o ultimo ID cadastrado
function getUserData() {
    const data = localStorage.getItem('esg_pincho1');
    return data ? JSON.parse(data) : null;
}
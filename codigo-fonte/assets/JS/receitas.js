document.addEventListener('DOMContentLoaded', function() {
    checkUserState();
    loadMembers()

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;
        const usuario = document.getElementById('usuario').value;
        const tipo = document.getElementById('tipo').value
        const desc = document.getElementById('desc').value;

        if (valor && categoria && usuario && tipo && desc) {
            alert('Cadastro de despesas enviado com sucesso!');
            const receitas = JSON.parse(localStorage.getItem('receitas') ?? '[]')
            receitas.push({
                "value": valor,
                "category": categoria,
                "member": usuario,
                "type": tipo,
                "desc": desc
            })

            localStorage.setItem('receitas', JSON.stringify(receitas))
            formulario.reset()

        } else {
            alert('Por favor, preencha todos os campos.');

        }
    });
});

function loadMembers(){
    const usuarios = document.getElementById('usuario');
    const profile = JSON.parse(localStorage.getItem('user_profile'))
    const members = profile['members']

    console.log(`${profile} / ${members}`)
    for(let idx in members){
        const opt = document.createElement("option")
        const member = members[idx]

        opt.textContent = member.name;
        opt.value = member.name;

        usuarios.appendChild(opt)
    }
}

function checkUserState(){
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email')
    const userPass = localStorage.getItem('senha')
    const profile = localStorage.getItem('user_profile')

    if(!userName || !userEmail || !userPass || !profile){
        alert('Usuário inválido, se cadastre primeiro para continuar')
        document.location.href = 'Login.html'

    }
}

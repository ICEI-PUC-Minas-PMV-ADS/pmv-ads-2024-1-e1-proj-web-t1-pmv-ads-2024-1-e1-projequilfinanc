let members = []

function showElements(){
    document.getElementById('div_familiar').classList.add('hidden');
    document.getElementById('btn_member').classList.add('hidden');
    const select = document.getElementById('perfil');
    const value = select.value;

    if (value === "2") {
        document.getElementById('div_familiar').classList.remove('hidden');
        document.getElementById('btn_member').classList.remove('hidden');
        loadMembers()

    }
}

function loadMembers(){
    if(members.length === 0){
        members.push({name: "", value: 0})

    }

    const div = document.getElementById('member_list')
    while (div.firstChild){
        div.removeChild(div.firstChild);

    }

    const columnDiv = document.createElement('div')

    for(let idx in members){
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex'

        const item = members[idx]
        const name = createMemberInput(parseInt(idx), 'Nome', item.name, 'text',
            (value) => members[idx].name = value)
        const renda = createMemberInput(parseInt(idx), 'Renda', item.value, 'number',
            (value) => members[idx].value = value)

        rowDiv.appendChild(name);
        rowDiv.appendChild(renda);
        columnDiv.appendChild(rowDiv)
    }

    div.appendChild(columnDiv);
}

function createMemberInput(idx = 0, labelText, value, type = 'text', onChange){
    const form = document.createElement('form')
    const div = document.createElement('div')
    div.classList.add('form-group')

    const label = document.createElement('label');
    label.setAttribute('for', `input${idx}_1`);
    label.textContent = `${labelText} ${(idx+1)}:`;

    const input = document.createElement('input');
    input.setAttribute('id', `input${idx}_1`);
    input.setAttribute('type', type);
    input.setAttribute('value', value);
    input.classList.add('input')

    input.addEventListener('input', function() {
        onChange(input.value)
    });

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div)
    return form
}

function finish(){
    const profileType = document.getElementById('perfil')
    const value = document.getElementById('valor')

    localStorage.setItem('user_profile', JSON.stringify({
        "members": parseInt(profileType.value) === 2 ? members : [],
        "profile": profileType.value,
        "value": value.value,
    }))

    document.location.href = 'Principal.html'
}

function addMembers(){
    members.push({name: '', value: 0})
    loadMembers()
}

document.addEventListener('DOMContentLoaded', function () {
        checkUserState()
        showElements();
        
        const nome = localStorage.getItem('name');
        if (nome) {
            const usuarioElement = document.getElementById('usuario');
            usuarioElement.textContent = `Olá, ${nome}!`;
        }

});

function checkUserState(){
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email')
    const userPass = localStorage.getItem('senha')

    if(!userName || !userEmail || !userPass){
        alert('Usuário inválido, se cadastre primeiro para continuar')
        document.location.href = 'Login.html'

    }
}
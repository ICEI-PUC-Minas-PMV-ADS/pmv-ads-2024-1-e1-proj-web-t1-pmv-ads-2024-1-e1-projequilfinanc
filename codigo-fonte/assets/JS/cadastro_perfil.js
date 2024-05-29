let members = [{name: "", renda: 0}]

function showElements(){
    document.getElementById('div_familiar').classList.add('hidden');
    const select = document.getElementById('perfil');
    const value = select.value;

    if (value === "2") {
        document.getElementById('div_familiar').classList.remove('hidden');
        loadMembers()
    }
}

function loadMembers(){
    const div = document.getElementById('member_list')
    while (div.firstChild){
        div.removeChild(div.firstChild);

    }

    const columnDiv = document.createElement('div')

    for(let idx in members){
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex'

        const item = members[idx]
        const name = createMemberInput(parseInt(idx), 'Nome', item.name)
        const renda = createMemberInput(parseInt(idx), 'Renda', item.renda, 'number')
        rowDiv.appendChild(name);
        rowDiv.appendChild(renda);
        columnDiv.appendChild(rowDiv)
    }

    div.appendChild(columnDiv);
}

function createMemberInput(idx = 0, labelText, value, type = 'text'){
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

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div)
    return form
}

function addMembers(){
    members.push({name: '', renda: 0})
    loadMembers()
}

document.addEventListener('DOMContentLoaded', function() {
    showElements()
});
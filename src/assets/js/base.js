document.addEventListener('DOMContentLoaded', (event) => {
    loadMembers()
})

function toProfile(){
    const profile = JSON.parse(localStorage.getItem('esg_pincho1'))
    document.location.href = profile.profile.type == 1 ? 'familiar.html' : 'individual.html'
}

function loadMembers(){
    const usuarios = document.getElementById('usuario');
    const profile = JSON.parse(localStorage.getItem('esg_pincho1'))
    const members = profile.profile.parent

    for(let idx in members){
        const opt = document.createElement("option")
        const member = members[idx]

        opt.textContent = member.name;
        opt.value = member.name;

        usuarios.appendChild(opt)
    }
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();

    } else {
        window.location.href = 'principal.html';

    }
}


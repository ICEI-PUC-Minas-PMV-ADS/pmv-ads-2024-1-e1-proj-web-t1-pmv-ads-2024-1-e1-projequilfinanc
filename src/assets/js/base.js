document.addEventListener('DOMContentLoaded', (event) => {
    loadMembers()
})

function toProfile(){
    const profile = JSON.parse(localStorage.getItem('user_profile'))
    document.location.href = profile.profile == 1 ? 'familiar.html' : 'individual.html'
}

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

function goBack() {
    if (window.history.length > 1) {
        window.history.back();

    } else {
        window.location.href = 'principal.html';

    }
}


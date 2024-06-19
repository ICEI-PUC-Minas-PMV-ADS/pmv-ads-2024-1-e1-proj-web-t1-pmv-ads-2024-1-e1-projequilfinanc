document.addEventListener('DOMContentLoaded', function () {
    checkUserState()

});

function checkUserState(){
    const user = localStorage.getItem('esg_pincho1');

    if(!user){
        alert('Usuário inválido, se cadastre primeiro para continuar')
        document.location.href = 'login.html'

    }
}
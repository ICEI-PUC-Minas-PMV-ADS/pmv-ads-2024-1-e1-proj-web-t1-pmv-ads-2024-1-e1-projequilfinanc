var auth = null

document.addEventListener('DOMContentLoaded', (event) => {
    // Exibir menu quando logado
    const menu = document.getElementById('cadastro_renda');
    if(auth){
        menu.style.display = "block"
    }

    const cadastrarBtn = document.getElementById('cadastrar');
    const entrarBtn = document.getElementById('entrar');
    const formulario = document.getElementById('seuFormularioId'); 
    cadastrarBtn.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        // Definindo ID
        const userId = 'esg_pincho1';

        if (nome && email && senha) {
            if (senha.length >= 6 && /[A-Z]/.test(senha)) {    
                const userData = {
                    data_user: {
                        nome,
                        email,
                        senha,
                    },
                    profile: {
                        type: null,
                        parent: []
                    },
                    finance: {
                        rent: 0,
                        balance: 0,
                        lastMoviments: []
                    }
                };

                // Chamando a criação de usuario passando os dados e ID
                localStorage.setItem(userId, JSON.stringify(userData));
                
                const user = getUserData(userId)
                if (user.data_user.nome === nome){
                    alert('Cadastro realizado com sucesso!');
                }
                
                window.location.href = "/codigo-fonte/pagina-cadastro-perfil/cadastro_perfil.html"; // Redireciona para a página de perfil após o cadastro
            } else {
                alert('A senha deve ter pelo menos 6 caracteres e incluir uma letra maiúscula.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

// Gerando ID apartir do total de itens no localStorage
function countIdsInLocalStorage() {
    let lastKey = 0
    let keys = Object.keys(localStorage);
    if (keys.length === 0) {
        return lastKey += 1;
    }
    keys.sort();
    lastKey = keys[keys.length - 1];
    return lastKey += 1
}

function getUserData(userId) {
    const data = localStorage.getItem(userId);
    return data ? JSON.parse(data) : null;
}

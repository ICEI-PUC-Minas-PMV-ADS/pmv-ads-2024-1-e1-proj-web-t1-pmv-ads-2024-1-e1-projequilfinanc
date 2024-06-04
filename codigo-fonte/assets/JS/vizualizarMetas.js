document.addEventListener('DOMContentLoaded', (event) => {
    // Recupera o campo de metas
    let CampoMetas = document.querySelector('#CampoMetas');

    // Recupera as metas do localStorage
    const metas = JSON.parse(localStorage.getItem('metas')) || [];

    // Exibe as metas existentes
    exibirMetas(metas);

    // Adiciona o botão "Adicionar" fora do loop de metas
    const botaoAdicionar = document.createElement('button');
    botaoAdicionar.classList.add('botao_Adicionar_mais_metas');
    botaoAdicionar.innerHTML = '<i class="bi bi-plus"></i> Adicionar';
    botaoAdicionar.addEventListener('click', function() {
        window.location.href = 'Metas.html';
    });
    CampoMetas.appendChild(botaoAdicionar);
});

// Função para exibir as metas na página
function exibirMetas(metas) {
    let CampoMetas = document.querySelector('#CampoMetas');
    CampoMetas.innerHTML = ''; // Limpa o campo de metas

    if (metas.length > 0) {
        metas.forEach(meta => {
            const metaDiv = criarElementoMeta(meta);
            CampoMetas.appendChild(metaDiv);
        });
    } else {
        CampoMetas.innerHTML = '<p class="nenhumaMeta">Nenhuma meta encontrada.</p>';
    }
}

// Função para criar os elementos HTML das metas
function criarElementoMeta(meta) {
    const metaDiv = document.createElement('div');
    metaDiv.classList.add('meta');
    metaDiv.innerHTML = `
        <div class="area_metas_individuais">
            <p id="dono_da_meta"><span>${meta.usuario}</span></p>
            <h4 id="nome_metas"><span>${meta.objetivo}</span></h4>
            <p id="data_final">Data Final: <span>${meta.data}</span></p>
            <p id="valor_objetivo">Valor: <span>${meta.valor}</span></p>
            <div class="actios_goals">
                <button id="modificar_objetivo"><i class="bi bi-pencil"></i></button>
                <button id="apagar_objetivos" onclick="apagarMeta('${meta.id}')"><i class="bi bi-trash"></i></button>
                <button id="marcar_objetivo"><i class="bi bi-check-all"></i></button>
            </div>
        </div>
    `;
    return metaDiv;
}

// Função para adicionar uma nova meta
function adicionarMeta(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Recupera os valores do formulário
    const usuario = document.getElementById('usuario').value;
    const objetivo = document.getElementById('objetivo').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;

    // Cria um objeto meta com os valores
    const novaMeta = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        usuario,
        objetivo,
        data,
        valor
    };

    // Recupera as metas do localStorage
    let metas = JSON.parse(localStorage.getItem('metas')) || [];

    // Adiciona a nova meta à lista de metas
    metas.push(novaMeta);

    // Salva a lista atualizada de metas no localStorage
    localStorage.setItem('metas', JSON.stringify(metas));

    // Exibe as metas atualizadas na página
    exibirMetas(metas);

    // Limpa os campos do formulário para próxima inserção
    document.getElementById('usuario').value = '';
    document.getElementById('objetivo').value = '';
    document.getElementById('data').value = '';
    document.getElementById('valor').value = '';
}

// Evento de submissão do formulário
document.getElementById('formularioMeta').addEventListener('submit', adicionarMeta);

// Função para apagar uma meta
function apagarMeta(id) {
    // Recupera as metas do localStorage
    let metas = JSON.parse(localStorage.getItem('metas')) || [];

    // Filtra as metas para remover a que possui o ID fornecido
    metas = metas.filter(meta => meta.id !== id);

    // Salva a lista atualizada de metas no localStorage
    localStorage.setItem('metas', JSON.stringify(metas));

    // Exibe as metas atualizadas na página
    exibirMetas(metas);
}



  






// document.addEventListener('DOMContentLoaded', (event) => {
//     // Função para criar os elementos HTML das metas
//     function criarElementoMeta(meta) {
//         const metaDiv = document.createElement('div');
//         metaDiv.classList.add('meta');
//         metaDiv.innerHTML = `
//             <div class="area_metas_individuais">
//                 <p id="dono_da_meta"><span>${meta.usuario}</span></p>
//                 <h4 id="nome_metas"><span>${meta.objetivo}</span></h4>
//                 <p id="data_final">Data Final: <span>${meta.data}</span></p>
//                 <p id="valor_objetivo">Valor: <span>${meta.valor}</span></p>
//                 <div class="actios_goals">
//                     <button><i id="modificar_objetivo"class="bi bi-pencil" ></i></button>
//                     <button><i id="apagar_objetivos"class="bi bi-trash" ></i></button>
//                     <button><i id="marcar_objetivo" class="bi bi-check-all"></i></button>
//                 </div>
//                 <a href="Metas.html"> <button class="botao_Adicionar_meta"> <i class="bi bi-plus"></i> Adicionar</button></a>
//             </div>
//         `;
//         return metaDiv;
//     }

//     // Recupera o campo de metas
//     let CampoMetas = document.querySelector('#CampoMetas');

//     // Recupera as metas da tela de criar metas
//     const MetasExibição = localStorage.getItem('meta');

//     if (MetasExibição) {
//         // Converte a string JSON de volta para um objeto meta
//         const meta = JSON.parse(MetasExibição);

//         CampoMetas.innerHTML = '';
        

//         // Cria e exibe o elemento HTML para a meta
//         const metaDiv = criarElementoMeta(meta);
//         CampoMetas.appendChild(metaDiv);
//         fadeIn(metaDiv);

        
//     } else {
//         CampoMetas.innerHTML = '<p>Nenhuma meta encontrada.</p>';
//     }
// });
// // Função para exibir gradualmente um elemento HTML
// function fadeIn(element) {
//     let op = 0.1;  // Valor inicial da opacidade
//     element.style.display = 'block';  // Exibe o elemento
//     const timer = setInterval(function () {
//         if (op >= 1) {
//             clearInterval(timer);  // Interrompe o setInterval quando a opacidade atinge 1
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;  // Aumenta gradualmente a opacidade
//     }, 50);  // Intervalo de 50ms para transição suave 
// }
// function adicionarMeta(meta) {
//     let metas = JSON.parse(localStorage.getItem('metas')) || [];
//     metas.push(meta);
//     localStorage.setItem('metas', JSON.stringify(metas));
// }

// function apagarMeta(id) {
//     // Recupera todas as metas do localStorage
//     let metas = JSON.parse(localStorage.getItem('metas')) || [];
//     // Filtra o array de metas para remover a meta com o ID correspondente
//     metas = metas.filter(meta => meta.id !== id);
//     // Salva o array atualizado no localStorage
//     localStorage.setItem('metas', JSON.stringify(metas));
//     // Atualiza a exibição
//     window.location.reload();
// }































// document.addEventListener('DOMContentLoaded'),(event)=>{

// // campo onde as metas seraão exibidas
// let CampoMetas= document.querySelector('#CampoMetas');
// let dono_da_meta=document.querySelector('#dono_da_meta');
// let nome_metas=document.querySelector('#nome_metas');
// let data_final=document.querySelector('#"data_final');
// let valor_objetivo=document.querySelector('#valor_objetivo');

// // recupero as metas da tela de criar metas
// const MetasExibição= localStorage.getItem('meta');

// if (MetasExibição){

//     const meta = JSON.parse(MetasExibição);
//     const metaDiv = document.createElement('div');
//     metaDiv.classList.add('meta');

//     metaDiv.innerHTML = `
//     <p id="dono_da_meta">${meta.usuario}</p>
//     <input id="nome_metas" type="text" value="${meta.objetivo}" readonly>
//     <input id="data_final" type="date" value="${meta.data}" readonly>
//     <input id="valor_objetivo" type="number" value="${meta.valor}" readonly>
//     <input id="descricao_objetivo" type="text" value="${meta.descricao}" readonly>
// `;
    
//      CampoMetas.appendChild(metaDiv);
//      fadeIn(metaDiv);
// } else {
//     document.getElementById('CampoMetas').innerHTML = '<p>Nenhuma meta encontrada.</p>';
// };


// }


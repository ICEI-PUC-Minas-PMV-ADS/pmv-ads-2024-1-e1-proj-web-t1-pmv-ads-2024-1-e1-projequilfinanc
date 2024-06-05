document.addEventListener('DOMContentLoaded', (event) => {
    // Recupera o campo de metas

    // Recupera as metas do localStorage
    const metas = JSON.parse(localStorage.getItem('metas')) || [];

    exibirMetas(metas);

    // Adiciona o botão "Adicionar" fora do loop de metas

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
    const botaoAdicionar = document.createElement('button');
    botaoAdicionar.classList.add('botao_Adicionar_mais_metas');
    botaoAdicionar.innerHTML = '<i class="bi bi-plus"></i> Adicionar';
    botaoAdicionar.addEventListener('click', function() {
        window.location.href = 'Metas.html';
    });
    CampoMetas.appendChild(botaoAdicionar);
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
                <button id="apagar_objetivos" onclick="apagarMeta('${meta.id}')"><i class="bi bi-trash"></i></button>
                <button id="marcar_objetivo" onclick="mudarCor('${meta.id}')"><i class="bi bi-check-all"></i></button>
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
    let metas = JSON.parse(localStorage.getItem('metas')) ?? [];

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


// Função para apagar uma meta
function apagarMeta(id) {
    // Recupera as metas do localStorage
    let metas = JSON.parse(localStorage.getItem('metas')) ?? [];
    console.log(metas)
    // Filtra as metas para remover a que possui o ID fornecido
    metas = metas.filter(meta => meta.id != id);
    console.log(metas)
    // Salva a lista atualizada de metas no localStorage
    localStorage.setItem('metas', JSON.stringify(metas));
console.log(id)
    // Exibe as metas atualizadas na página
    exibirMetas(metas);
}

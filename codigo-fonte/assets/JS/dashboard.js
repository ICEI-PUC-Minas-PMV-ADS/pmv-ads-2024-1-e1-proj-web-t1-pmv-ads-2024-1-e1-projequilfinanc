document.addEventListener('DOMContentLoaded', function() {
    const data = getUserData()

    const titleType = document.getElementById('titulo')
    const tableLastMoviments = document.getElementById('lastMoviments').getElementsByTagName('tbody')[0];
    const tableCredit = document.getElementById('credit').getElementsByTagName('tbody')[0];
    const tableDebit = document.getElementById('debit').getElementsByTagName('tbody')[0];
    const finance = data.finance;

    titleType.innerHTML = `<p>${data.profile.type}</p>`

    // Saldo e Renda
    let rent = document.getElementById('rent')
    let balance = document.getElementById('balance')
    rent.innerText = finance.rent.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    balance.innerText = finance.balance.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    // Adicionando a tabela "Ultimas movimentações" os dados geral
    const movements = data.finance.lastMoviments;
    for (const key in movements) {
        const movement = movements[key];
        const row = tableLastMoviments.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerText = movement.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        cell2.innerText = movement.desc;
        cell3.innerText = movement.member;
        movement.form === 'credit' ? cell1.style.color = '#19bd0a' : cell1.style.color = '#bd160a';
    }

    // Adicionando as tabelas de "Receitas" e "Despesas" os dados respectivos
    let cred = data.finance.credit
    for (const key in cred) {
        const movement = cred[key];
        if (movement.form === 'credit') {
            const row = tableCredit.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.innerText = movement.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            cell1.style.color = '#19bd0a'
            cell2.innerText = movement.desc;
        }
    }

    let deb = data.finance.debit
    for (const key in deb) {
        const movement = deb[key];
        if (movement.form === 'debit') {
            const row = tableDebit.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.innerText = movement.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            cell1.style.color = '#bd160a'
            cell2.innerText = movement.desc;
            
        }
    }

    // Criando o grafico e adicionando dados para ser exibido
    const ctx = document.getElementById('myChart');
    let credit = calculateTotalCredits(cred)
    let debit = calculateTotalCredits(deb)
    for (const key in movements) {
        if (movements.hasOwnProperty(key)) {
            const movement = movements[key];
            if (movement.type === 'credit') {
                credit += movement.amount
            } else if (movement.type === 'debit') {
                debit += movement.amount
            }
        }
    }
    // Configuração grafico
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Receitas', 'Despesas'],
        datasets: [{
            label: 'Movimentações',
            data: [
                credit,
                debit
            ],
            borderWidth: 1
        }]
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });
})

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

function calculateTotalCredits(credits) {
    return credits.reduce((total, credit) => total + Number(credit.value), 0);
}
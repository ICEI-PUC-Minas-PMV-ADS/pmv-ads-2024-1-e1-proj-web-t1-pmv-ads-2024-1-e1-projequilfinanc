document.addEventListener('DOMContentLoaded', function() {
    fetch('./json/data.json')
        .then(response => response.json())
        .then(data => {

            // Configurando para adicionar dados as categorias:
            // "Renda", "Saldo" e "Reserva Emergencial" somente
            const elements = {
                rent: document.getElementById('rent'),
                balance: document.getElementById('balance'),
                reservation: document.getElementById('reservation')
            };
            const tableLastMoviments = document.getElementById('lastMoviments').getElementsByTagName('tbody')[0];
            const tableCredit = document.getElementById('credit').getElementsByTagName('tbody')[0];
            const tableDebit = document.getElementById('debit').getElementsByTagName('tbody')[0];
            const finance = data.userId.finance;
            for (const key in elements) {
                if (elements.hasOwnProperty(key) && finance.hasOwnProperty(key)) {
                    elements[key].innerText = finance[key].toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });
                }
            }
            
            // Adicionando a tabela "Ultimas movimentações" os dados geral
            const movements = data.userId.finance.lastMoviments;
            for (const key in movements) {
                if (movements.hasOwnProperty(key)) {
                    const movement = movements[key];
                    const row = tableLastMoviments.insertRow();
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);

                    cell1.innerText = movement.amount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });
                    cell2.innerText = movement.description;
                    cell3.innerText = movement.title;
                    movement.type === 'credit' ? cell1.style.color = '#19bd0a' : cell1.style.color = '#bd160a';
                }
            }

            // Adicionando as tabelas de "Receitas" e "Despesas" os dados respectivos
            for (const key in movements) {
                if (movements.hasOwnProperty(key)) {
                    const movement = movements[key];
                    if (movement.type === 'credit') {
                        const row = tableCredit.insertRow();
                        const cell1 = row.insertCell(0);
                        const cell2 = row.insertCell(1);

                        cell1.innerText = movement.amount.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        });
                        cell1.style.color = '#19bd0a'
                        cell2.innerText = movement.description;
                    }
                    if (movement.type === 'debit') {
                        const row = tableDebit.insertRow();
                        const cell1 = row.insertCell(0);
                        const cell2 = row.insertCell(1);

                        cell1.innerText = movement.amount.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        });
                        cell1.style.color = '#bd160a'
                        cell2.innerText = movement.description;
                        
                    }
                }
            }

            // Criando o grafico e adicionando dados para ser exibido
            const ctx = document.getElementById('myChart');
            let credit = 0
            let debit = 0
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
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
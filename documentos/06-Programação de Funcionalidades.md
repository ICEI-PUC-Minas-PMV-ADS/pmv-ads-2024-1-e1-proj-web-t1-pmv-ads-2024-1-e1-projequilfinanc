# Programação de Funcionalidades

Pré-requisitos:  [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md), [Metodologia](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/03-Metodologia.md), [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/04-Projeto%20de%20Interface.md), Arquitetura da Solução

### Tela de Login (RF-02)
Responsável: Hugo

O acesso a tela de login permite que o usuário realize o login de sua conta.

Exemplo da tela de login

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/cdd1624b-d81b-44d0-b23f-0c268a00c9ea)

#### Requisito atendido

RF-02    O sistema deve permitir que o usuário realize o login de sua conta.   


#### Artefatos da funcionalidade

* login.html
* login.css
* settings.js

#### Estrutura de Dados

```
{
"email": "teste@hotmail.com",
"password": "12345"
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Cadastro (RF-01)

Responsável: Marcella

O acesso a tela de cadastro permite que o usuário crie sua conta.

Exemplo da tela de cadastro:

![cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/42ebbe6a-c9aa-412c-85ea-7afd1ff0ef54)

#### Requisito atendido

RF-01    O sistema deve permitir que o usuário cadastre uma conta.

#### Artefatos da funcionalidade

* cadastro.html
* cadastro.css
* settings.js

#### Estrutura de Dados

```
{
"name": "",
"email": "teste@hotmail.com",
"password": "12345"
}
```

#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela Principal (RF-10/ RF-11)

Responsável: Hugo

O acesso a tela permite que o usuário tenha visualização completa de todas as suas despesas e rendas para ter maior controle sobre os mesmos.

Exemplo da tela principal:

![principal](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/aa18acd4-0343-4427-a321-561941e92a66)

#### Requisito atendido

RF-10    O sistema deve mostrar as movimentações financeiras.

RF-11    O sistema deve ajudar os usuários a identificar e eliminar gastos desnecessários em sua renda familiar, fornecendo análises detalhadas e sugestões para redução de despesas.

#### Artefatos da funcionalidade

* principal.html
* principal.css
* settings.js

#### Estrutura de Dados

```
{
  "balance": 0.00,
  "reserve": 0.00,
  "monthly_income": 0.00,
  "last_moviments": [
    {
      "value": 0.00,
      "date": "dd/mm/yyyy",
      "name": ""
    }
  ],
  "receives": [
    {
      "value": 0.00,
      "date": "dd/mm/yyyy",
      "name": ""
    }
  ],
  "expenses": [
    {
      "value": 0.00,
      "date": "dd/mm/yyyy",
      "name": ""
    }
  ],
  "chart":[
    {
      "value": 0.00,
      "date": "dd/mm/yyyy",
      "name": ""
    }
  ]
} 
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Cadastro de Dados Perfil Familiar (RF-13)

Responsável: Vitor

O acesso a tela permite que o usuário cadastre os dados pessoais de cada membro da família. 

Exemplo da tela Cadastro de Dados Perfil Familiar:

![familiar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/d757e4d6-6912-4fc6-9c7e-1996256da874)


#### Requisito atendido

RF-13    O sistema deve permitir o cadastro de dados do perfil individual e do perfil familiar.

#### Artefatos da funcionalidade

* familiar.html
* familiar.css
* settings.js

#### Estrutura de Dados

```
{
  "name": "",
  "last_name": "",
  "phone": "",
  "date": "dd/mm/yyyy",
  "email": "",
  "password": "",
  "members": [
    {
      "name": "",
      "phone": ""
    }
  ]
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Cadastro de Dados Perfil Individual (RF-13)

Responsável: Vitor

O acesso a tela permite que o usuário cadastre os dados pessoais. 

Exemplo da tela Cadastro de Dados Perfil Individual:

![individual](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/64a986c5-24d2-404a-b1f3-424f251bc3d0)

#### Requisito atendido

RF-13    O sistema deve permitir o cadastro de dados do perfil individual e do perfil familiar.

#### Artefatos da funcionalidade

* individual.html
* individual.css
* settings.js

#### Estrutura de Dados

```
{
  "name": "",
  "last_name": "",
  "phone": "",
  "date": "dd/mm/yyyy",
  "email": "",
  "password": ""
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Receitas (RF-14)

Responsável: Woton

O acesso a tela permite que o usuário cadastre as rendas  

Exemplo da tela Receitas:

![receitas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/2918e655-5afe-4615-a099-5f32d5ad1ec3)


#### Requisito atendido

RF-14 O sistema deve permitir o cadastro de rendas fixas e variavéis.

#### Artefatos da funcionalidade

* receitas.html
* receitas.css
* settings.js

#### Estrutura de Dados

```
{
  "value": 0.00,
  "category": 1,
  "member": 1,
  "type": 1,
  "desc": "abc..."
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Despesas (RF-07/ RF-09)

Responsável: Marcella

O acesso a tela permite que o usuário cadastre suas despesas. 

Exemplo da tela Depesas:

![despesas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/f78f94b4-5266-446f-87f2-5e36aca77f8e)

#### Requisito atendido

RF-07    O sistema deve permitir que os usuários organizem as suas contas de acordo com a data de vencimento.

RF-15    O sistema deve permitir o cadastro de desepesas fixas e variavéis.

#### Artefatos da funcionalidade

* desepesas.html
* despesas.css
* settings.js

#### Estrutura de Dados

```
{
  "value": 0.00,
  "category": 1,
  "member": 1,
  "due_date": "mm/dd/yyyy",
  "desc": "abc..."
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

### Tela de Planejamento (RF-03/RF- 08)

Responsável: Maria

O acesso a tela permite que o usuário cadastre a renda e coloque a porcentagem que deseja guardar de acordo com a regra 50, 30, 20.

Exemplo da tela Planejamento:

![planejamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/bc7a82bd-9586-4641-8d2a-a3c211263373)

#### Requisito atendido

RF-03    O sistema deve permitir o cadastro da renda mensal do indivíduo.

RF-08    O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal.

#### Artefatos da funcionalidade

* planejamento.html
* planejamento.css
* settings.js

#### Estrutura de Dados

```
{
  "id": "valor",
  "tipo": "number",
  "placeholder": "valor"
}
```
#### Instruções de acesso

Em desenvolvimento...

<hr>

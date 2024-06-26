# Programação de Funcionalidades

Pré-requisitos:  [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md), [Metodologia](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/03-Metodologia.md), [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/04-Projeto%20de%20Interface.md), Arquitetura da Solução

### Tela Home Page
Responsavél: Maria

O acesso a tela Home Page permite que o usuário tenha a primeira vizualização do sistema.

Exemplo tela Home Page

![SavingCash - Google Chrome 23_05_2024 15_45_22](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/161634139/859f9283-81de-4e53-9613-d54c51f1dfa8)

#### Artefatos da funcionalidade

* login.html
* login.css
* login.js
#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/

2. Clique em "Login" se já tem uma conta ou em "Cadastro" para cadastrar uma nova conta.

<hr>

### Tela de Login (RF-02)
Responsável: Hugo

O acesso a tela de login permite que o usuário realize o login de sua conta.

Exemplo da tela de login

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/78efc87c-62da-46e5-b406-e578e124bc09)

#### Requisito atendido

RF-02    O sistema deve permitir que o usuário realize o login de sua conta.   


#### Artefatos da funcionalidade

* login.html
* login.css
* login.js

#### Estrutura de Dados

```
{
"email": "teste@hotmail.com",
"password": "12345"
}
```
#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/login.html
2. Coloque as informações necessárias e clique em "Entrar" para ter acesso a sua conta.

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
* cadastro.js

#### Estrutura de Dados

```
{
"name": "",
"email": "teste@hotmail.com",
"password": "12345"
}
```

#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/cadastro.html
2. Coloque os dados necessários para criar uma nova conta, finalizando clique em "Cadastrar", onde será levado para a tela de Cadastro de Perfil.

<hr>

### Tela Principal (RF-10/ RF-11)

Responsável: Hugo

O acesso a tela permite que o usuário tenha visualização completa de todas as suas despesas e rendas para ter maior controle sobre os mesmos.

Exemplo da tela principal:

![principal](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/de241da0-b40d-4af0-8211-c558c1af2106)


#### Requisito atendido

RF-10    O sistema deve mostrar as movimentações financeiras.

RF-11    O sistema deve ajudar os usuários a identificar e eliminar gastos desnecessários em sua renda familiar, fornecendo análises detalhadas e sugestões para redução de despesas.

#### Artefatos da funcionalidade

* principal.html
* principal.css
* principal.js

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

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/principal.html
2. Clicando ao menu lateral você poderá transitar entre as telas.

<hr>

### Tela de Cadastro de Dados Perfil Familiar (RF-13)

Responsável: Vitor

O acesso a tela permite que o usuário cadastre os dados pessoais de cada membro da família. 

Exemplo da tela Cadastro de Dados Perfil Familiar:

![perfil familliar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/33769ef0-100e-4bef-b2dd-fab79b422de8)


#### Requisito atendido

RF-13    O sistema deve permitir o cadastro de dados do perfil individual e do perfil familiar.

#### Artefatos da funcionalidade

* familiar.html
* familiar.css
* familiar.js

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

1. Abra um navegador de Internet e informe a seguinte URL: (https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/familiar.html)
2. Cadastre o perfil familiar colocando suas informações.

<hr>

### Tela de Cadastro de Dados Perfil Individual (RF-13)

Responsável: Vitor

O acesso a tela permite que o usuário cadastre os dados pessoais. 

Exemplo da tela Cadastro de Dados Perfil Individual:

![perfil individual](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/bbac019c-f931-4dbc-9be8-df6a09c00563)

#### Requisito atendido

RF-13    O sistema deve permitir o cadastro de dados do perfil individual e do perfil familiar.

#### Artefatos da funcionalidade

* individual.html
* individual.css
* individual.js

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

1. Abra um navegador de Internet e informe a seguinte URL: (https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/individual.html)
2. Cadastre o perfil individual colocando suas informações.

<hr>

### Tela de Receitas (RF-14)

Responsável: Woton

O acesso a tela permite que o usuário cadastre as rendas  

Exemplo da tela receitas:

![receitas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/3360ec87-39a1-43c4-939a-f59f4812187b)

#### Requisito atendido

RF-14 O sistema deve permitir o cadastro de rendas fixas e variavéis.

#### Artefatos da funcionalidade

* receitas.html
* receitas.css
* receitas.js

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

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/receitas.html
2. Cadastre todas as suas receitas e as informações necessárias.
3. Clique em "Enviar" para cadastrar corretamente.

<hr>

### Tela de Despesas (RF-07/ RF-09)

Responsável: Marcella

O acesso a tela permite que o usuário cadastre suas despesas. 

Exemplo da tela depesas:

![despesas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/f78f94b4-5266-446f-87f2-5e36aca77f8e)

#### Requisito atendido

RF-07    O sistema deve permitir que os usuários organizem as suas contas de acordo com a data de vencimento.

RF-15    O sistema deve permitir o cadastro de desepesas fixas e variavéis.

#### Artefatos da funcionalidade

* desepesas.html
* despesas.css
* despesas.js

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

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/despesas.html
2. Cadastre todas as suas receitas e as informações necessárias.
3. Clique em "Enviar" para cadastrar corretamente.

<hr>

### Tela de Planejamento (RF-03/RF- 08)

Responsável: Maria

O acesso a tela permite que o usuário cadastre a renda e coloque a porcentagem que deseja guardar de acordo com a regra 50, 30, 20.

Exemplo da tela planejamento:

![planejamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/bc7a82bd-9586-4641-8d2a-a3c211263373)

#### Requisito atendido

RF-03    O sistema deve permitir o cadastro da renda mensal do indivíduo.

RF-08    O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal.

#### Artefatos da funcionalidade

* planejamento.html
* planejamento.css
* planejamento.js

#### Estrutura de Dados

```
{
  "id": "valor",
  "tipo": "number",
  "placeholder": "valor"
}
```
#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/planejamento.html
2. Cadastre sua renda.
3. Insira qual porcentagem gostaria de economizar.
4. Clique em "calcular" para obter o resultado.

<hr>

### Tela de Metas (RF-06)

Responsável: Marcella

O acesso a tela permite que o usuário cadastre novos objetivos de metas para o futuro.

Exemplo da tela de metas:

![metas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/81fcee83-6268-465a-a07d-1c192b4cf525)

#### Requisito atendido

RF-06    O sistema deve permitir estabelecer metas de curto e longo prazo.

#### Artefatos da funcionalidade

* metas.html
* metas.css
* metas.js

#### Estrutura de Dados

```
{
  "goal": "abc...",
  "date": "mm/dd/yyyy",
  "member": 1,
  "value": 0.00,
  "desc": "abc..."
}
```
#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/metas.html
2. Cadastre um novo objetivo, colocando as informações necessárias.
3. Clique em enviar para cadastrar corretamente.

<hr>

Responsável: Vitor

O acesso a tela permite que o usuário visualize suas metas definidas.

Exemplo da tela de visualizar metas:

![visualizar metas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/89250a82-2a19-4d5b-a612-8824d62896f3)

#### Requisito atendido

RF-16  O sitema deve permitir que o usuário consiga analisar suas metas definidas.                        

#### Artefatos da funcionalidade

* visualizarmetas.html
* visualizarmetas.css
* visualizarmetas.js

#### Estrutura de Dados


#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: (https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/vizualizar_metas.html)
2. Clique em "Adcionar" para cadastrar uma nova meta.
  
<hr>

Responsável: Woton

O acesso a tela permite que o usuário consiga fazer o cadastro de perfil individual ou familiar e qual sua renda mensal.

Exemplo da tela de cadastro de perfil:

![cadastro de perfil individual](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/b977b525-d04c-4feb-adbe-083467e3c199)

![cadastro de perfil familiar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/assets/164430057/7a4ffd59-3a8d-4ad1-bf79-1223b4887abb)


#### Requisito atendido

RF-17  O sistema deve permitir que depois do login o usuário consiga cadastrar sua renda mensal e se o perfil e individual ou familiar.                   

#### Artefatos da funcionalidade

* cadastro_perfil.html
* cadastro_perfil.css
* cadastro_perfil.js

#### Estrutura de Dados

```
{
  "profile": 1,
  "value": 0.0,
  "members": [
    {
      "name":"",
      "value": 0.0
    },
    {
      "name":"",
      "value": 0.0
    }
  ]
}
```

#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: (https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/src/screens/cadastro_perfil.html)
2. Cadastre corretamente o tipo do seu perfil, se ele será individual ou familiar.
3. Coloque corretamente a renda do(s) membro(s).
4. Clique em "Próximo".

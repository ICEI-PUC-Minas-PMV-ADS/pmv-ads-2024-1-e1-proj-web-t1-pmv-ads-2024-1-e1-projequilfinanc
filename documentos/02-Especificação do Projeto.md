# Especificação do Projeto

## Perfis de Usuários

<!-- [Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.] -->

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Individual </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas físicas que desejam ter maior planejamento financeiro, corte de gastos e desperdícios, controle dos pagamentos e cobranças e atingir objetivos pessoais.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ol>
<li>Garantir que o dinheiro seja gasto de forma eficiente.</li>
<li>Alcançar os objetivos financeiros estabelecidos.</li>
<li>Conquistar objetivos estabelecidos a longo prazo.</li>
<li>Gestão de dívidas.</li>
<li>Gestão de lazer.</li>
</ol>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Familiar</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Famílias que buscam administrar o orçamento doméstico, economizar, reduzir gastos, evitar dívidas e atingir objetivos familiares.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ol>
<li>Administrar contas com valor fixo (aluguel, internet, etc).</li>
<li>Administrar contas sem valor fixo (conta de energia e água, mercado, combustível, etc).</li>
<li>Administrar despesas variáveis (passeios, restaurantes, compras, emergências, etc).</li>
<li>Gestão de dividas.</li>
</ol>
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

<!-- [Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.] 

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.] -->

| EU COMO...             | QUERO/PRECISO ...      | PARA ...                         |
|------------------------|------------------------|----------------------------------|
| Individual             | Estabelecer objetivos para economizar e conseguir realizar uma faculdade. | Para alcançar o objetivo de economizar, aprimorar o orçamento e investir em uma faculdade. |
| Individual             | Economizar para conseguir quitar as dívidas e investir no futuro. | Criar um fundo de emergência, quitar as dívidas, investir e planejar o futuro. |
| Individual             | Definir uma data para cumprimento das metas criadas para viajar. | Ajudar a ter foco e motivação para traçar meus objetivos e planos. |
| Individual             | Avaliar a situação financeira atual. | Para determinar se disponho de recursos suficientes para cumprir com minhas obrigações. |
| Individual             | Eliminar todas as suas dívidas. | A fim de evitar o estresse, o desânimo, o desencadeamento de sintomas depressivos. |
| Individual             | Evitar gastos desnecessários. | Poder investir em outra atividade financeira mais lucrativa para mim. |
| Familiar               | Projetar as receitas e despesas até a data combinada. | Para assegurar uma boa saúde financeira, sem atrasos, cobranças ou juros. |
| Familiar               | Dividir os seus gastos em fixos e variáveis. | Ter um controle financeiro maior, sabendo destinar parte da sua renda mensal para cada tipo de gasto. |
| Familiar               | Fazer reservas de emergência. | Para lidar com eventuais situações inesperadas, ter mais segurança e menos preocupações. |
| Familiar               | Fazer um levantamento de todas as contas e obrigações até a data de vencimento. | Ter uma perspectiva acertada das contas que serão pagas no futuro, evitando atrasos. |
| Familiar               | Registrar todas as entradas e saídas de dinheiro. | Para determinar se a renda familiar está acima ou abaixo dos gastos. |

## Requisitos do Projeto

<!-- [Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.] -->

### Requisitos Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais] -->
| ID    | Descrição                                                                                                            | Prioridade |
|-------|----------------------------------------------------------------------------------------------------------------------|----|
| RF-01 | O sistema deve permitir que o usuário cadastre uma conta.                                                            | ALTA   | 
| RF-02 | O sistema deve permitir que o usuário realize o login de sua conta.                                                  | ALTA   |
| RF-03 | O sistema deve permitir o cadastro da renda mensal do indivíduo.                                                     | ALTA   |
| RF-04 | O sistema deve permitir o cadastro da renda mensal de todos os componentes de uma família.                           | ALTA   |
| RF-05 | O sistema deve permitir o registro das despesas mensais individuais ou em conjunto.                                  | ALTA   |
| RF-06 | O sistema deve permitir estabelecer metas de curto e longo prazo.                                                    | MÉDIA   |
| RF-07 | O sistema deve permitir que os usuários organizem as suas contas de acordo com a data de vencimento.                 | ALTA   |
| RF-08 | O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal. | ALTA   |
| RF-09 | O sistema deve calcular os valores do cadastro para despesas fixas e variáveis de acordo com o capital.              | ALTA   |
| RF-10 | O sistema deve mostrar as movimentações financeiras.                                                                 | MÉDIA   |
| RF-11 | O sistema deve ajudar os usuários a identificar e eliminar gastos desnecessários em sua renda familiar, fornecendo análises detalhadas e sugestões para redução de despesas.                                                      | MÉDIA   |
| RF-12 | O sistema deve permitir que o usuário adicione uma renda extra.                                                      | BAIXA   |
| RF-13 | O sistema deve permitir o cadastro de dados individuais e  familiar.                                                 | ALTA   |

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais] -->
| ID     | Descrição                | Prioridade |
|--------|---------------------------------|----|
| RNF-01 | O sistema deve ser publicado em ambiente acessível ao público na Internet. | ALTA   | 
| RNF-02 | O sistema deve ser adaptável, permitindo a visualização em diversos dispositivos de forma adequada. | ALTA   |
| RNF-03 | O sistema deve apresentar um bom nível de contraste entre os elementos da tela. | MÉDIA   |
| RNF-04 | O sistema deve estar de acordo com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge. | ALTA   |
| RNF-05 | O sistema deve ser seguro e proteger as informações financeiras do usuário, com medidas de segurança robustas para prevenir o acesso não autorizado. | ALTA   |

**Prioridade: Alta / Média / Baixa.

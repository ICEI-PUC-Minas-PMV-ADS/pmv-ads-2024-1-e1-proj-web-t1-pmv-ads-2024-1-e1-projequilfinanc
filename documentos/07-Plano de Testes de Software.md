# Plano de Testes de Software
Pré requisitos: [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md), [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projequilfinanc/blob/main/documentos/04-Projeto%20de%20Interface.md)
Os testes funcionais a serem realizados na aplicação são descritos a seguir. 
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home Page</td>
  <td>
   <ul>
    <li>RF-01:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Maria</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento dos links da página Cadastro</td>
  <td>
   <ul>
    <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-03 O sistema deve permitir o cadastro da renda mensal do indivíduo.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Cadastro estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Cadastro.</li>
    <li>Clicar nos links da página Cadastro</li>
   </ol>
   </td>
  <td>Todos os links da página Cadastro devem encaminhar os usuários para as páginas descritas.</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento do Cadastro de conta.</td>
  <td>
   <ul>
    <li>RF-01 O sistema deve permitir que o usuário cadastre uma conta.</li>
   </ul>
  </td>
  <td>Verificar se preenchendo os dados o usuário será possível criar uma nova conta.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Cadastro.</li>
    <li>Preencher os dados corretamente para criar uma conta.</li>
    <li>Clicar em cadastrar.</li>
   </ol>
   </td>
  <td>Ao cadastrar uma nova conta a página Cadastro deve mostrar uma mensagem "Cadastro realizado com sucesso!" e encaminhar o usuário para a próxima página.</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar a validação dos dados preenchidos.</td>
  <td>
   <ul>
    <li>RF.</li>
   <li>RF.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher todos o usuário não conseguirá passar para a próxima página.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Cadastro.</li>
    <li>Não preencher os dados necessários.</li>
    <li>Clicar em cadastrar.</li>
   </ol>
   </td>
  <td>Caso não preencha todos os dados irá mostrar uma imagem com a seguinte informação "Por favor, preencha todos os campos.".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar senha insuficiente.</td>
  <td>
   <ul>
    <li>RF.</li>
   <li>RF.</li>
   </ul>
  </td>
  <td>Verificar se a senha está de acordo com o que é pedido, no caso deve conter no mínimo 6 caracteres e pelo menos uma letra maiúscula</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Cadastro.</li>
    <li>Adcionar uma senha menor que 6 caracteres ou sem letra maiúscula.</li>
    <li>Clicar em cadastrar.</li>
   </ol>
   </td>
  <td>Caso não preencha a senha com o mínimo exigido irá mostrar uma imagem com a seguinte informação "A senha deve ter pelo menos 6 caracteres e incluir uma letra maiúscula.".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar se os calculos estão sendo feitos corretamente</td>
  <td>
   <ul>
    <li>RF-08:	O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal.</li>
   </ul>
  </td>
  <td>Verificar se os resultados estão de acordo com os dados inseridos</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Realizar o seu login.</li>
    <li>Ir para a tela de Planejamento.</li>
    <li>Inserir uma renda.</li>
    <li>Inserir uma porcentagem.</li>
    <li>Clicar em calcular.</li>
   </ol>
   </td>
  <td>Todos os calculos feitos devem corresponder corretamente aos dados associados.</td>
  <td>Maria</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar os dados preenchidos</td>
  <td>
   <ul>
    <li>RF-08:	O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal.</li>
   </ul>
  </td>
  <td>Verificar se os dados foram preenchidos corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Realizar o seu login.</li>
    <li>Ir para a tela de Planejamento.</li>
    <li>Inserir apenas uma renda ou apenas a porcentagem.</li>
    <li>Clicar em calcular.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação de informações e ao clicar em calcular, deve aparecer a mensagem "Verifique se os dados estão preenchidos corretamente!".</td>
  <td>Maria</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar os dados preenchidos</td>
  <td>
   <ul>
    <li>RF-08:	O sistema deve calcular o valor para uma reserva emergencial, “baseado no método 50-30-20” referente à renda mensal.</li>
   </ul>
  </td>
  <td>Verificar se os dados que foram preenchidos correspondem um valor positivo</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Realizar o seu login.</li>
    <li>Ir para a tela de Planejamento.</li>
    <li>Inserir uma renda com valor negativo.</li>
    <li>Inserir uma porcentagem.</li>
    <li>Clicar em calcular.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação de informações e ao clicar em calcular, deve aparecer a mensagem "Por favor, informe apenas números positivos!".</td>
  <td>Maria</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09: Verificar o funcionamento dos links da página de Despesas.</td>
  <td>
   <ul>
    <li>RF-18	O sistema deve permitir que o usuário tenha acesso ao resto do site pela barra de menu.</li
   </ul>
  </td>
  <td>Verificar se os links da página de Despesas estão encaminhando para as respectivas páginas corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Clicar nos links da página de Depesas.</li>
   </ol>
   </td>
  <td>Todos os links da página de Despesas devem encaminhar os usuários para as páginas descritas.</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-10: Verificar o funcionamento do cadastro de Despesas.</td>
  <td>
   <ul>
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li
   </ul>
  </td>
  <td>Verificar se ao colocar todos os dados o usuário consegue cadastrar corretamente suas despesas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Preencher todos os dados necessários.</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Preenchendo todos os dados o usuário verá na tela uma mensagem "Cadastro de despesas enviado com sucesso!" indicando que está tudo correto e que foi enviado o formulário.</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-11: Verificar a validação de dados do campo "valor".</td>
  <td>
   <ul>
    <li>RF-.</li
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "valor" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Não preencher campo "valor".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "valor" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-12: Verificar a validação de dados do campo "categoria".</td>
  <td>
   <ul>
    <li>RF-.</li
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "categoria" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Não preencher campo "categoria".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "categoria" o usuário verá na tela uma mensagem "Selecione um campo da lista.".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-13: Verificar a validação de dados do campo "membro".</td>
  <td>
   <ul>
    <li>RF-.</li
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "membro" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Não preencher campo "membro".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "membro" o usuário verá na tela uma mensagem "Selecione um campo da lista.".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-14: Verificar a validação de dados do campo "vencimento".</td>
  <td>
   <ul>
    <li>RF-.</li
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "vencimento" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Não preencher campo "vencimento".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "vencimento" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Marcella</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-15: Verificar a validação de dados do campo "descrição".</td>
  <td>
   <ul>
    <li>RF-.</li
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "descrição" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Despesas.</li>
    <li>Não preencher campo "descrição".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "descrição" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Marcella</td>
 </tr>
</table>

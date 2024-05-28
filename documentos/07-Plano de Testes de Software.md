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
    <li>RF.</li>
   <li>RF.</li>
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
    <li>RF.</li>
   <li>RF.</li>
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


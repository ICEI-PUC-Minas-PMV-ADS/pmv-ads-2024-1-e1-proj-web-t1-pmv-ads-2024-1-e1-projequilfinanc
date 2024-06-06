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
    <li> RF-01: O sistema deve permitir que o usuário cadastre uma conta.</li>
    <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
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
    <li> RF-01: O sistema deve permitir que o usuário cadastre uma conta.</li>
    <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
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
    <li> RF-01: O sistema deve permitir que o usuário cadastre uma conta.</li>
    <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li> RF-01: O sistema deve permitir que o usuário cadastre uma conta.</li>
    <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li>RF-18	O sistema deve permitir que o usuário tenha acesso as demais telas do sistema através do menu lateral.</li>
    <li>RF-20: O sistema deve permitir que o usuário consiga sair de sua conta.</li>
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
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
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
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li>RF-15:	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
    <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
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
  <td>CT-16: Verificar o funcionamento dos links da página de Metas.</td>
  <td>
   <ul>
    <li>RF-18	O sistema deve permitir que o usuário tenha acesso as demais telas do sistema através do menu lateral.</li>
   </ul>
  </td>
  <td>Verificar se os links da página de Metas estão encaminhando para as respectivas páginas corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
    <li>Clicar nos links da página de Metas.</li>
   </ol>
   </td>
  <td>Todos os links da página de Metas devem encaminhar os usuários para as páginas descritas.</td>
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
  <td>CT-17: Verificar o funcionamento do cadastro de Metas.</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar se ao colocar todos os dados o usuário consegue cadastrar corretamente suas metas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de metas.</li>
    <li>Preencher todos os dados necessários.</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Preenchendo todos os dados o usuário verá na tela uma mensagem "Cadastro de metas enviado com sucesso!" indicando que está tudo correto e que foi enviado o formulário.</td>
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
  <td>CT-18: Verificar a validação de dados do campo "novo objetivo".</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "novo objetivo" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
    <li>Não preencher campo "novo objetivo".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "novo objetivo" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
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
  <td>CT-19: Verificar a validação de dados do campo "data".</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "data" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
    <li>Não preencher campo "data".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "data" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
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
  <td>CT-20: Verificar a validação de dados do campo "membro".</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "membro" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
    <li>Não preencher campo "membro".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "membro" o usuário verá na tela uma mensagem "Selecione um item da lista.".</td>
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
  <td>CT-21: Verificar a validação de dados do campo "valor".</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "valor" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
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
  <td>CT-22: Verificar a validação de dados do campo "descrição".</td>
  <td>
   <ul>
    <li>RF-19	O sistema deve permitir que o usuário consiga cadastrar as metas que almeja alcançar.</li>
    <li>RF-21: O sistema deve verificar se há obrigatoriedade de preenchimento do campo.</li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "descrição" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Metas.</li>
    <li>Não preencher campo "descrição".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "descrição" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
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
  <td>CT-23: Verificar o funcionamento dos links da página perfil familiar</td>
  <td>
   <ul>
    <li>RF-18: O sistema deve permitir que o usuário tenha acesso as demais telas do sistema através do menu lateral.	</li>
   <li>RF-20: O Sistema deve permitir que o usuário consiga sair de sua conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página perfil familiarestão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Clicar nos links da página perfil familiar.</li>
   </ol>
   </td>
  <td>Todos os links da página perfil familiar devem encaminhar os usuários para as páginas descritas.</td>
  <td>Vitor hugo</td>
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
  <td>CT-24: Verificar a validação de dados do campo "Nome".</td>
  <td>
   <ul>
    <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..</li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "Nome" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "Nome".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "Nome" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-25: Verificar a validação de dados do campo "sobrenome".</td>
  <td>
   <ul>
     <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..</li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "Sobrenome" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "Sobrenome".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "Sobrenome" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-26: Verificar a validação de dados do campo "telefone".</td>
  <td>
   <ul>
     <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..</li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "telefone" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "telefone".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "telefone" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "telefone" no padrão correto de 11 numeros o usuário verá na tela uma mensagem "Por favor, preencha todos os números de telefone corretamente."</td>
  <td>Vitor hugo</td>
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
  <td>CT-27: Verificar a validação de dados do campo "dd/mm/aaaa".</td>
  <td>
   <ul>
         <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..</li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "dd/mm/aaaa" ou não preenche-lo no padrão correto não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "dd/mm/aaaa".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "dd/mm/aaaa" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "dd/mm/aaaa" no padrão correto de dia/mês/ano o usuário verá na tela uma mensagem "insira um valor válido. o campo esta incompleto ou tem uma data inválida."</td>
  <td>Vitor hugo</td>
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
  <td>CT-28: Verificar a validação de dados do campo "E-mail".</td>
  <td>
   <ul>
        <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..  </li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "E-mail" ou não preeche-lo não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "E-mail".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "E-mail" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "E-mail" no padrão correto de (teste@gmail.com) o usuário verá na tela uma mensagem "insira um E-mail válido".</td>
  <td>Vitor hugo</td>
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
  <td>CT-29: Verificar a validação de dados do campo "Senha".</td>
  <td>
   <ul>
     <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..  </li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "Senha"  ou não preench-lo no padrão correto não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "Senha".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "Senha" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "Senha" no padrão correto de uma 6 caracteres o usuário verá na tela uma mensagem "a senha precisa conter no minimo 6 caracteres".</td>
  <td>Vitor hugo</td>
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
  <td>CT-30: Verificar a validação de dados do campo "Membro 1".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "membro 1" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "membro 1".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "membro 1" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-31: Verificar a validação de dados do campo "telefone membro 1".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo " telefone membro 1"  ou não preench-lo no padrão correto de 11 digitos não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo " telefone membro 1".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo " telefone membro 1" o usuário verá na tela uma mensagem "Preencha este campo!" caso o telefone do membro 1 esteja fora do padrão aceito o usuário vera outra mensagem " Por favor, preencha todos os números de telefone corretamente. ".</td>
  <td>Vitor hugo</td>
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
  <td>CT-32: Verificar a validação de dados do campo "Membro 2".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, mesmo que o usuario preencha o campo "membro 2" o formulario podera ser enviado.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "membro 2".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td> Mesmo Não preenchendo o campo "membro 2" o usuário vera na tela a seguinte mensagem "cadastro realizado com sucesso !!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-33: Verificar a validação de dados do campo "telefone membro 2".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo " telefone membro 2"  ou não preench-lo no padrão correto de 11 digitos não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo " telefone membro 1".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo " telefone membro 2" o usuário verá na tela uma mensagem "Preencha este campo!" caso o telefone do membro 2 esteja fora do padrão aceito o usuário vera outra mensagem " Por favor, preencha todos os números de telefone corretamente. ".</td>
  <td>Vitor hugo</td>
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
  <td>CT-34: Verificar a validação de dados do campo "Nome".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "Nome" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil individual.</li>
    <li>Não preencher campo "Nome".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "Nome" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-35: Verificar a validação de dados do campo "sobrenome".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "sobrenome" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil individual.</li>
    <li>Não preencher campo "sobrenome".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "sobrenome" o usuário verá na tela uma mensagem "Preencha este campo!".</td>
  <td>Vitor hugo</td>
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
  <td>CT-36: Verificar a validação de dados do campo "telefone".</td>
  <td>
   <ul>
       <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "telefone" não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil individual.</li>
    <li>Não preencher campo "telefone".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "telefone" o usuário verá na tela uma mensagem "Preencha este campo!"caso o telefone esteja fora do padrão aceito o usuário vera outra mensagem " Por favor, preencha todos os números de telefone corretamente..</td>
  <td>Vitor hugo</td>
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
  <td>CT-37: Verificar a validação de dados do campo "dd/mm/aaaa".</td>
  <td>
   <ul>
         <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..</li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "dd/mm/aaaa" ou não preenche-lo no padrão correto não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "dd/mm/aaaa".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "dd/mm/aaaa" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "dd/mm/aaaa" no padrão correto de dia/mês/ano o usuário verá na tela uma mensagem "insira um valor válido. o campo esta incompleto ou tem uma data inválida."</td>
  <td>Vitor hugo</td>
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
  <td>CT-38: Verificar a validação de dados do campo "E-mail".</td>
  <td>
   <ul>
        <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..  </li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "E-mail" ou não preeche-lo não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "E-mail".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "E-mail" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "E-mail" no padrão correto de (teste@gmail.com) o usuário verá na tela uma mensagem "insira um E-mail válido".</td>
  <td>Vitor hugo</td>
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
  <td>CT-39: Verificar a validação de dados do campo "Senha".</td>
  <td>
   <ul>
     <li>RF-18	O sistema deve permitir que o usuário tenha acesso às demais telas do sistema através do menu lateral..  </li>
    <li>RF-13	O sistema deve permitir o cadastro de dados individuais e familiares.<li>
     <li>RF-20	O sistema deve permitir que o usuário consiga sair de sua conta.<li>
     <li>RF-21	O sistema deve verificar se há obrigatoriedade de preenchimento do campo.<li>
   </ul>
  </td>
  <td>Verificar a validação dos dados, se não preencher o campo "Senha"  ou não preench-lo no padrão correto não será possível enviar o fomulário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página perfil familiar.</li>
    <li>Não preencher campo "Senha".</li>
    <li>Clicar em enviar</li>
   </ol>
   </td>
  <td>Não preenchendo o campo "Senha" o usuário verá na tela uma mensagem "Preencha este campo!". Não preenchendo o campo "Senha" no padrão correto de uma 6 caracteres o usuário verá na tela uma mensagem "a senha precisa conter no minimo 6 caracteres".</td>
  <td>Vitor hugo</td>
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
  <td>CT-XX: Verificar descrição de valores do gráfico.</td>
  <td>
   <ul>
   <li>RF-10	O sistema deve mostrar as movimentações financeiras.</li>
   <li>RF-16	O sitema deve permitir que o usuário consiga analisar suas metas definidas</li>
   <li>RF-XX:	O site deve mostrar ao passar o cursor por cima os valores presentes no gráfico. </li>
   <li>RF-XX:	O site deve em sua versão mobile ao toque, os valores presentes no gráfico.</li>
   </ul>
  </td>
  <td>Verificar descrição de valores do gráfico.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a dashboard.</li>
    <li>No campo de gráficos, verificar a existência de valores no gráfico.</li>
   </ol>
   </td>
  <td>Valores apresentados corretamente ao usuário.</td>
  <td>Hugo</td>
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
  <td>CT-XX: Apresentar valores de renda, salvo e reserva emergencial.</td>
  <td>
   <ul>
   <li>RF-10	O sistema deve mostrar as movimentações financeiras.</li>
   <li>RF-16	O sitema deve permitir que o usuário consiga analisar suas metas definidas</li>
   </ul>
  </td>
  <td>Verificar valores inseridos.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a dashboard.</li>
    <li>No campo de renda verificar se valores estão sendo apresentados corretamente.</li>
    <li>No campo de saldo verificar se valores estão sendo apresentados corretamente.</li>
    <li>No campo de reserva emergencial verificar se valores estão sendo apresentados corretamente.</li>
   </ol>
   </td>
  <td>Valores apresentados corretamente ao usuário.</td>
  <td>Hugo</td>
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
  <td>CT-XX: Verificar últimas movimentações.</td>
  <td>
   <ul>
   <li>RF-10	O sistema deve mostrar as movimentações financeiras.</li>
   <li>RF-16	O sitema deve permitir que o usuário consiga analisar suas metas definidas</li>
   </ul>
  </td>
  <td>Verificar campo de últimas movimentações.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a dashboard.</li>
    <li>No campo "últimas movimentações", verificar a existência de valores no gráfico.</li>
   </ol>
   </td>
  <td>Valores apresentados corretamente ao usuário.</td>
  <td>Hugo</td>
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
  <td>CT-XX: Verificar receitas.</td>
  <td>
   <ul>
   <li>RF-10	O sistema deve mostrar as movimentações financeiras.</li>
   <li>RF-16	O sitema deve permitir que o usuário consiga analisar suas metas definidas</li>
   <li>RF-14	O sistema deve permitir o cadastro de rendas fixas e variavéis.</li>
   </ul>
  </td>
  <td>Verificar campo de receitas.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a dashboard.</li>
    <li>No campo "receitas", verificar a existência de valores no gráfico.</li>
   </ol>
   </td>
  <td>Valores apresentados corretamente ao usuário.</td>
  <td>Hugo</td>
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
  <td>CT-XX: Verificar despesas.</td>
  <td>
   <ul>
   <li>RF-10	O sistema deve mostrar as movimentações financeiras.</li>
   <li>RF-16	O sitema deve permitir que o usuário consiga analisar suas metas definidas</li>
   <li>RF-15	O sistema deve permitir o cadastro de despesas fixas e variavéis.</li>
   </ul>
  </td>
  <td>Verificar campo de despesas.</td>
  <td>
   <ol>
    <li>Realizar login.</li>
    <li>Acessar a dashboard.</li>
    <li>No campo "despesas", verificar a existência de valores no gráfico.</li>
   </ol>
   </td>
  <td>Valores apresentados corretamente ao usuário.</td>
  <td>Hugo</td>
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
  <td>CT-XX: Verificar se os links de redirecionamento estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ul>
    <li>RF-01: O site deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-02: O sistema deve permitir que o usuário realize o login de sua conta.</li>
    <li>RF-18	O sistema deve permitir que o usuário tenha acesso as demais telas do sistema através do menu lateral.</li>
   </ul>
  </td>
  <td>Verificar se os links da página estão realizando o redirecionamento corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Clicar nos hiperlinks presentes na página.</li>
   </ol>
   </td>
  <td>Verificar se os links da página estão realizando o redirecionamento corretamente.</td>
  <td>Hugo</td>
 </tr>
</table>

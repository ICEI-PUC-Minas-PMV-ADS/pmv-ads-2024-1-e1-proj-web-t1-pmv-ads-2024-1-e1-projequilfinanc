document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado'); // Verificação adicional
    const formulario = document.getElementById('formulario_metas');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  // Evita o envio padrão do formulário

        console.log('Formulário submetido'); // Verificação adicional

        const objetivo = document.getElementById('objetivo').value;
        const data = document.getElementById('data').value;
        const usuario = document.getElementById('usuario').value;
        const valor = document.getElementById('valor').value;
        const descricao = document.getElementById('descricao1').value; // Changed ID to 'descricao1'

        if (objetivo && data && usuario && valor && descricao) {
            let metas = JSON.parse(localStorage.getItem('metas')) || [];
            if(metas.length >20){
                alert("você ultrapassou o numero maximo de metas")
                return;
            }
            // Salva os dados no localStorage
            const meta  = {
                id: Date.now(),
                objetivo: objetivo,
                data: data,
                usuario: usuario,
                valor: valor,
                descricao: descricao
            };
            metas.push(meta);
            localStorage.setItem('metas', JSON.stringify(metas));

            alert('Cadastro de metas enviado com sucesso!');  // Alerta de sucesso
            formulario.reset();  // Limpa os campos do formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

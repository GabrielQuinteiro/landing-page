
document.addEventListener("DOMContentLoaded",
    function () {
        const form = document.querySelector(".form-lead");
        const mensagemAgradecimento = document.getElementById("mensagem-agradecimento");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Cria um objeto FormData pro formulario
            const formData = new FormData(form);

            fetch(form.action,
                {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Google Forms não retorna CORS adequados para requisicoes AJAX
                })
                .then(response => {
                    console.log('Formulário enviado com sucesso', response);

                    // Limpa o formulario após a submissão
                    form.reset();
                    mensagemAgradecimento.style.display = 'block';

                    window.getComputedStyle(mensagemAgradecimento).opacity; // Antes de alterar a opacidade para que a transição seja aplicada

                    mensagemAgradecimento.style.opacity = '1';

                    setTimeout(function () {
                        // Alterar a opacidade para 0 para suavizar o desaparecimento
                        mensagemAgradecimento.style.opacity = '0';

                        setTimeout(function () {

                            mensagemAgradecimento.style.opacity = '0';

                            mensagemAgradecimento.style.display = 'none';
                        }, 500);
                    }, 5000); // 5 segundos

                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error, error.message);
                });
        });
    }); 
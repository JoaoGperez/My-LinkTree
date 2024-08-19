document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-email');
    const email = 'joaoperez.dev@gmail.com'; // O e-mail a ser copiado

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(email).catch(function(err) {
            console.error('Erro ao copiar o e-mail: ', err);
        });
    });
});

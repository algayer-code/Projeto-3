$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000');

    $('#phone').focus(function() {
        if ($(this).val() === '') {
            $(this).val('(  )     -');
        }
    });

    $('#formulario').submit(function(e) {
        e.preventDefault();

        let isValid = true;
        let errorMessage = "";

        const phone = $('#phone').val();
        if (phone && phone.length < 14) {
            isValid = false;
            errorMessage += "Por favor, insira um número de telefone válido.<br>";
        }

        const email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += "Por favor, insira um e-mail válido.<br>";
        }

        if (!isValid) {
            $('#error-message').html(errorMessage).show();
        } else {
            $('#error-message').hide();
            alert("Formulário enviado com sucesso!");
        }
    });
});

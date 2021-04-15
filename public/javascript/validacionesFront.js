window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#formRegister')
    let inputName = document.querySelector('#name');
    let inputApellido = document.querySelector('#lastname');
    let inputPhone = document.querySelector('#phone');
    let inputPassword = document.querySelector('#password');
    let inputPassConfirmation = document.querySelector('#passwordConfirmation');
    let errors = [];

    inputName.addEventListener('blur', function(){
        if(!isNaN(inputName.value)){
            errors.push('Hay un error en el Nombre');
            inputName.style.border = "solid red 1px";
            let nameError = document.querySelector('#error-name');
            nameError.innerHTML  = 'Uupss! Parece que se ha producido un error en el campo nombre';
            nameError.style.color = 'red';
        }else{
            let nameError = document.querySelector('#error-name');
            inputName.style.border = "solid green 1px";
            nameError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Hay un error en el Nombre' });
        }
    });
    inputApellido.addEventListener('blur', function(){
        if(!isNaN(inputApellido.value)){
            errors.push('Hay un error en el Apellido');
            let lastnameError = document.querySelector('#error-lastname');
            lastnameError.innerHTML  = 'Uupss! Parece que se ha producido un error en el campo apellido';
            lastnameError.style.color = 'red';
            inputApellido.style.border = "solid red 1px";
        }else{
            let lastnameError = document.querySelector('#error-lastname');
            inputApellido.style.border = "solid green 1px";
            lastnameError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Hay un error en el Apellido' });
        }
    });

    document.getElementById('email').addEventListener('blur', function() {
        campo = event.target;    
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(campo.value)) {
            errors.push('Hay un error en el email')
            email.style.border = "solid red 1px";
            let emailError = document.querySelector('#error-email');
            emailError.innerHTML  = 'Uupss! Parece que se ha producido un error en el campo email';
            emailError.style.color = 'red';
        }else{
            let emailError = document.querySelector('#error-email');
            email.style.border = "solid green 1px";
            emailError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Hay un error en el email' });
        }
    });

    inputPhone.addEventListener('blur', function(){
        if(isNaN(inputPhone.value)){
            errors.push('Hay un error en el teléfono')
            inputPhone.style.border = "solid red 1px";
            let phoneError = document.querySelector('#error-phone');
            phoneError.innerHTML  = 'Uupss! Parece que se ha producido un error en el campo de teléfono, prueba sin espacios ni otro caracter';
            phoneError.style.color = 'red';
        }else{
            inputPhone.style.border = "solid green 1px";
            let phoneError = document.querySelector('#error-phone');
            phoneError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Hay un error en el teléfono' });
        }
    });

    inputPassword.addEventListener('blur', function(){
        if(inputPassword.value.length < 4){
            errors.push('Hay un error en la contraseña')
            inputPassword.style.border = "solid red 1px";
            let passwordError = document.querySelector('#error-password');
            passwordError.innerHTML  = 'Uupss! Ten en cuenta que la contraseña debe tener un mínimo de 5 caracteres';
            passwordError.style.color = 'red';
        }else{
            let passwordError = document.querySelector('#error-password');
            inputPassword.style.border = "solid green 1px";
            passwordError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Hay un error en la contraseña' });
        }
    });


    inputPassConfirmation.addEventListener('blur', function(){
        if(inputPassword.value != inputPassConfirmation.value){
            errors.push('Las contraseñas no coinciden')
            inputPassConfirmation.style.border = "solid red 1px";
            let passwordConfirmError = document.querySelector('#error-confirmPassword');
            passwordConfirmError.innerHTML  = 'Uupss! Al parecer las contraseñas no coinciden, puedes revisar que escribiste apretando abajo';
            passwordConfirmError.style.color = 'red';
        }else{
            let passwordConfirmError = document.querySelector('#error-confirmPassword');
            inputPassConfirmation.style.border = "solid green 1px";
            passwordConfirmError.innerHTML  = '';
            errors = errors.filter(function(i) { return i !== 'Las contraseñas no coinciden' });
        }
    });


    formulario.addEventListener('submit', function(event){
        if (errors.length > 0){
            event.preventDefault();
            function onlyUnique(value, index, self) { 
                return self.indexOf(value) === index;
            }
            let erroresFilter = errors;
            var uniqueArrayErrors = erroresFilter.filter( onlyUnique );
            let erroresTxt = document.querySelector('.errores-txt');
            erroresTxt.innerHTML = 'Hemos encontrado errores en los siguientes campos:'
            erroresTxt.style.color = 'red'
            let ulErrores = document.querySelector('.errores ul');
            uniqueArrayErrors.forEach(error => ulErrores.innerHTML += `<li>${error}</li>`)
            ulErrores.style.color = 'red'
        }
    })
})
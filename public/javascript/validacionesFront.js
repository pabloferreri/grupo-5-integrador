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
            errors.push('error en el campo de nombre');
            inputName.style.border = "solid red 1px";
            
            alert('Uupss! Parece que se ha producido un error en el campo nombre');
        }else{
            inputName.style.border = "solid green 1px";
        }
    });
    inputApellido.addEventListener('blur', function(){
        if(!isNaN(inputApellido.value)){
            errors.push('error en el campo de apellido');
            
            inputApellido.style.border = "solid red 1px";
            alert('Uupss! Parece que se ha producido un error en el campo apellido');
        }else{
            inputApellido.style.border = "solid green 1px";
        }
    });

    document.getElementById('email').addEventListener('blur', function() {
        campo = event.target;    
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(campo.value)) {
            errors.push('error en el campo de email')
            email.style.border = "solid red 1px";
            alert('Uupss! Parece que se ha producido un error en el campo email')
        }else{
            email.style.border = "solid green 1px";
        }
    });

    inputPhone.addEventListener('blur', function(){
        if(isNaN(inputPhone.value)){
            errors.push('error en el campo de teléfono')
            inputPhone.style.border = "solid red 1px";
            
            alert('Uupss! Parece que se ha producido un error en el campo de teléfono, prueba sin espacios ni otro caracter')
        }else{
            inputPhone.style.border = "solid green 1px";
            
        }
    });
    inputPassConfirmation.addEventListener('blur', function(){
        if(inputPassword.value != inputPassConfirmation.value){
            errors.push('error las passwords no coinciden')
            inputPassConfirmation.style.border = "solid red 1px";
            alert('Uupss! Parece que las contraseñas no coinciden')
        }else{
            inputPassConfirmation.style.border = "solid green 1px";
        }
    });

    

    formulario.addEventListener('submit', function(event){
        if (errors.length > 0){
            event.preventDefault();
        }
        alert('Uupss! Parcere que ha habido un error en los siguientes campos: ' + errors)
    })
})
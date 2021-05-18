window.addEventListener('load', function(){
    
    let formulario = document.querySelector('#formRegister')
    let inputName = document.querySelector('#name');
    let inputApellido = document.querySelector('#lastname');
    let inputDireccion = document.querySelector('#street');
    let inputDireccionNumber = document.querySelector('#number');
    let inputCiudad = document.querySelector('#city');
    /* let inputZip = document.querySelector('#zipCode'); */
    let inputProvince = document.querySelector('#province');
    let inputCountry = document.querySelector('#country');
    let inputPhone = document.querySelector('#phone');
    let inputPassword = document.querySelector('#password');
    let inputPassConfirmation = document.querySelector('#passwordConfirmation');
    let errors = [];

//Validaciones:

    //Campo Name
    inputName.addEventListener('blur', function(){
        if(!isNaN(inputName.value)){
            errors.push('Hay un error en el Nombre');
            inputName.style.border = "solid red 1px";
            inputName.style.width = '80%'
            document.getElementById('error-msg-name').style.display = "block"
        }else{
            inputName.style.border = "solid green 1px";
            document.getElementById('error-msg-name').style.display = "none"
        }
    });
    //Campo Apellido
    inputApellido.addEventListener('blur', function(){
        if(!isNaN(inputApellido.value)){
            errors.push('Hay un error en el Apellido');
            inputApellido.style.width = '80%'
            inputApellido.style.border = "solid red 1px";
            document.getElementById('error-msg-lastname').style.display = "block"
        }else{
            inputApellido.style.border = "solid green 1px";
            document.getElementById('error-msg-lastname').style.display = "none"
        }
    });
    //Campo Dirección
    inputDireccion.addEventListener('blur', function(){
        if(!isNaN(inputDireccion.value)){
            errors.push('Hay un error en la dirección');
            inputDireccion.style.width = '80%'
            inputDireccion.style.border = "solid red 1px";
/*             document.getElementById('error-msg-direccion').style.display = "block"
 */        }else{
            inputDireccion.style.border = "solid green 1px";
            /* document.getElementById('error-msg-direccion').style.display = "none" */
        }
    })
    //Campo Número Dirección
    inputDireccionNumber.onkeydown = function(e) {
        if(!((e.keyCode > 95 && e.keyCode < 106)
          || (e.keyCode > 47 && e.keyCode < 58) 
          || e.keyCode == 8)) {
            return false;
        }
    }
    //Campo Ciudad
    inputCiudad.addEventListener('blur', function(){
        if(!isNaN(inputCiudad.value)){
            errors.push('Hay un error en la ciudad');
            inputCiudad.style.width = '80%'
            inputCiudad.style.border = "solid red 1px";
            document.getElementById('error-msg-ciudad').style.display = "block"
        }else{
            inputCiudad.style.border = "solid green 1px";
            /* document.getElementById('error-msg-ciudad').style.display = "none" */
        }
    })
   /*  //Campo Zip Code
    inputZip.addEventListener('blur', function(){
        if(isNaN(inputZip.value)){
            errors.push('Hay un error en el código postal')
            inputZip.style.border = "solid red 1px";
            inputZip.style.width = '80%'
            document.getElementById('error-msg-zipCode').style.display = "block"
        }else{
            inputZip.style.border = "solid green 1px";
            document.getElementById('error-msg-zipCode').style.display = "none"
        }
    }); */
    //Campo Provincia
    inputProvince.addEventListener('blur', function(){
        if(!isNaN(inputProvince.value)){
            errors.push('Hay un error en Provincia');
            inputProvince.style.width = '80%'
            inputProvince.style.border = "solid red 1px";
            document.getElementById('error-msg-province').style.display = "block"
        }else{
            inputProvince.style.border = "solid green 1px";
            document.getElementById('error-msg-province').style.display = "none"
        }
    })
    //Campo País
    inputCountry.addEventListener('blur', function(){
        if(!isNaN(inputCountry.value)){
            errors.push('Hay un error en País');
            inputCountry.style.width = '80%'
            inputCountry.style.border = "solid red 1px";
            document.getElementById('error-msg-pais').style.display = "block"
        }else{
            inputCountry.style.border = "solid green 1px";
            document.getElementById('error-msg-pais').style.display = "none"
        }
    })
    //Campo Email
    document.getElementById('email').addEventListener('blur', function() {
        campo = event.target;    
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(campo.value)) {
            errors.push('Hay un error en el email')
            email.style.width = '80%'
            email.style.border = "solid red 1px";
            document.getElementById('error-msg-mail').style.display = "block"
        }else{
            email.style.border = "solid green 1px";
            document.getElementById('error-msg-mail').style.display = "none"
        }
    });
    //Campo Phone
    inputPhone.addEventListener('blur', function(){
        if(isNaN(inputPhone.value)){
            errors.push('Hay un error en el teléfono')
            inputPhone.style.border = "solid red 1px";
            inputPhone.style.width = '80%'
            document.getElementById('error-msg-phone').style.display = "block"
        }else{
            inputPhone.style.border = "solid green 1px";
            document.getElementById('error-msg-phone').style.display = "none"
        }
    });
    //Campo Contraseña
    inputPassword.addEventListener('blur', function(){
        if(inputPassword.value.length < 4){
            errors.push('Hay un error en la contraseña')
            inputPassword.style.border = "solid red 1px";
            inputPassword.style.width = '80%'
            document.getElementById('error-msg-pass').style.display = "block"
        }else{
            inputPassword.style.border = "solid green 1px";
            document.getElementById('error-msg-pass').style.display = "none"
        }
    });
    //Campo Confirm pass
    inputPassConfirmation.addEventListener('blur', function(){
        if(inputPassword.value != inputPassConfirmation.value){
            errors.push('Las contraseñas no coinciden')
            inputPassConfirmation.style.border = "solid red 1px";
            inputPassConfirmation.style.width = '80%'
            document.getElementById('error-msg-passconfirm').style.display = "block"
        }else{
            inputPassConfirmation.style.border = "solid green 1px";
            document.getElementById('error-msg-passconfirm').style.display = "none"
        }
    });
    //Envio de datos
    formulario.addEventListener('submit', function(event){
        if (errors.length > 0){
            event.preventDefault();
            document.getElementById('msgErrorEnd').style.display = 'block'
        }else{
            document.getElementById('msgErrorEnd').style.display = 'none'
        }
    })
})
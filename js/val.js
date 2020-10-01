var user = document.getElementById('user');
var pass = document.getElementById('pass');
var error = document.getElementById('error');
error.style.color = 'green';

function enviarFormulario(){
    console.log('Enviando Formulario...');

    var mensajesError =[];
    if(user.value === 'CarlosBurelo' || pass.value === 'carlosburelo31' ){
        window.location=("https://carlos-burelo.web.app/roms/Quantum_A80_V2.html");
    }
    var mensajesError =[];
    if (user.value === 'Gollo99' || pass.value === 'Marcoreus11' ){
        window.location=("https://carlos-burelo.web.app/roms/Quantum_A80_V2.html");
    }
    else{
        mensajesError.push('Datos inconrrectos');
        }
    error.innerHTML =mensajesError.join(', ');
    return false;
}
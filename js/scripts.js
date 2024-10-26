/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/

const btnEnviar = document.querySelector('#btn-enviar');

btnEnviar.addEventListener('click', calificar);

function calificar(e) {
    e.preventDefault();

    const preguntas = document.querySelectorAll('.radios'); // Asegúrate de que cada grupo de opciones tenga una clase común como 'pregunta'
    let todasRespondidas = true;

    preguntas.forEach(pregunta => {
        const opciones = pregunta.querySelectorAll('input[type="radio"]'); // Selecciona los radios dentro de cada pregunta
        const name = opciones[0].getAttribute('name'); // Obtiene el atributo name para agrupar las opciones
        const seleccionado = document.querySelector(`input[name="${name}"]:checked`);

        if (!seleccionado) {
            todasRespondidas = false;
        }
    });

    if (!todasRespondidas) {
        let error = document.querySelector('#mensaje-error');
        error.classList.remove('d-none');
        setTimeout(() => {
            error.classList.add('d-none');
        }, 3500);
        return;
    }

    let inputs = document.querySelectorAll('input:checked');
    
    let libre = 0;
    let mecanico = 0;
    let calculo = 0;
    let cientifico = 0;
    let persuasivo = 0;
    let artistico = 0;
    let literario = 0;
    let musical = 0;
    let servicioSocial = 0;
    let oficina = 0;

    inputs.forEach( input => {

        const pregunta = input.getAttribute('name');  // Obtiene el 'name' del input
        
        let libreArr = ['p1', 'p6', 'p11', 'p16', 'p21', 'p26'];
        let mecanicoArr = ['p2', 'p7', 'p12', 'p17', 'p22', 'p27'];
        let calculoArr = ['p3', 'p8', 'p13', 'p18', 'p23', 'p28'];
        let cientificoArr = ['p4', 'p9', 'p14', 'p19', 'p24', 'p29'];
        let persuasivoArr = ['p5', 'p10', 'p15', 'p20', 'p25', 'p30'];

        let artisticoArr = ['p31', 'p36', 'p41', 'p46', 'p51', 'p56'];
        let literarioArr = ['p32', 'p37', 'p42', 'p47', 'p52', 'p57'];
        let musicalArr = ['p33', 'p38', 'p43', 'p48', 'p53', 'p58'];
        let servicioSocialArr = ['p34', 'p39', 'p44', 'p49', 'p54', 'p59'];
        let oficinaArr = ['p35', 'p40', 'p45', 'p50', 'p55', 'p60'];

        if(libreArr.includes(pregunta) === true) {
            libre = libre + Number(input.value);
        } else if(mecanicoArr.includes(pregunta) === true) {
            mecanico = mecanico + Number(input.value);
        } else if(calculoArr.includes(pregunta) === true) {
            calculo = calculo + Number(input.value);
        } else if(cientificoArr.includes(pregunta) === true) {
            cientifico = cientifico + Number(input.value);
        } else if(persuasivoArr.includes(pregunta) === true) {
            persuasivo = persuasivo + Number(input.value);
        } else if(artisticoArr.includes(pregunta) === true) {
            artistico = artistico + Number(input.value);
        } else if(literarioArr.includes(pregunta) === true) {
            literario = literario + Number(input.value);
        } else if(musicalArr.includes(pregunta) === true) {
            musical = musical + Number(input.value);
        } else if(servicioSocialArr.includes(pregunta) === true) {
            servicioSocial = servicioSocial + Number(input.value);
        } else if(oficinaArr.includes(pregunta) === true) {
            oficina = oficina + Number(input.value);
        }
    
    });

    const resultadoContenedor = document.querySelector('#resultado-contenedor');
    resultadoContenedor.classList.remove('d-none');

    document.querySelector('#puntos-libre').textContent = `${String(libre)}`;
    document.querySelector('#puntos-mecanico').textContent = `${String(mecanico)}`;
    document.querySelector('#puntos-calculo').textContent = `${String(calculo)}`;
    document.querySelector('#puntos-cientifico').textContent = `${String(cientifico)}`;
    document.querySelector('#puntos-persuasivo').textContent = `${String(persuasivo)}`;
    document.querySelector('#puntos-artistico').textContent = `${String(artistico)}`;
    document.querySelector('#puntos-literario').textContent = `${String(literario)}`;
    document.querySelector('#puntos-musical').textContent = `${String(musical)}`;
    document.querySelector('#puntos-servicioSocial').textContent = `${String(servicioSocial)}`;
    document.querySelector('#puntos-oficina').textContent = `${String(oficina)}`;

    document.querySelector('#label-libre').textContent = 'Libre';
    document.querySelector('#label-mecanico').textContent = 'Mecánico';
    document.querySelector('#label-calculo').textContent = 'Cálculo';
    document.querySelector('#label-cientifico').textContent = 'Científico';
    document.querySelector('#label-persuasivo').textContent = 'Persuasivo';
    document.querySelector('#label-artistico').textContent = 'Artístico';
    document.querySelector('#label-literario').textContent = 'Literario';
    document.querySelector('#label-musical').textContent = 'Musical';
    document.querySelector('#label-servicioSocial').textContent = 'Social';
    document.querySelector('#label-oficina').textContent = 'Oficina';
    
    btnEnviar.textContent = 'Tomar test de nuevo';
    btnEnviar.removeEventListener('click', calificar)
    btnEnviar.addEventListener('click', reset);
}

function reset(e) {
    e.preventDefault();
    let inputs = document.querySelectorAll('input[type=radio]');
    inputs.forEach( input => { 
        input.checked = false;
    })

    document.querySelector('#resultado-contenedor').classList.add('d-none');


    btnEnviar.textContent = 'Enviar';
    btnEnviar.removeEventListener('click', reset)
    btnEnviar.addEventListener('click', calificar);
}

var contadorpopulares = 1;
var contadorsecundario = 6;
var contadorsignificativo = 12;
var hpopular = "";
var hsecundario = "";
var hsignificativo = "";
//ahora vamos a escuchar el onmouseover
function detectando(lugar) {
    console.log(lugar);
    if (lugar == 'popular') {
        if (contadorpopulares <= 5) {
            var personaje = getData(contadorpopulares, 'ppopulares')
            contadorpopulares++;
        }

    } else if (lugar == 'secundario') {
        if (contadorsecundario <11) {
            var personaje = getData(contadorsecundario, 'psecundario')
            contadorsecundario++;
        }
    }
    else if (lugar == 'significativo') {
        if (contadorsignificativo<17) {
            var personaje = getData(contadorsignificativo, 'psignificativo')
            contadorsignificativo++;
        }
    }
}

function getData(id, lugar) {
    let promise = fetch('https://swapi.dev/api/people/' + id)
    promise
        .then(response => response.json())
        .then(json => {
            console.log(json)
            inyectar(json, lugar);
        })
        .catch(error => {
            console.log("error");
        })
}
function inyectar(json, lugar) {
    if (lugar == 'ppopulares') {
        hpopular += `<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
           <div class="timeline-icon"></div>
           <div class="timeline-text">
               <h6>${json.name}</h6>
               <p id="ppopulares">Estatura: ${json.height} cm. <br>Peso: ${json.mass} kg.</p>
           </div>
           </div>`
        document.getElementById(lugar).innerHTML = hpopular;

    } else if (lugar == 'psecundario') {
        hsecundario += `<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon1"></div>
        <div class="timeline-text">
            <h6>${json.name}</h6>
            <p id="ppopulares">Estatura: ${json.height} cm. <br>Peso: ${json.mass} kg.</p>
        </div>
        </div>`
        document.getElementById(lugar).innerHTML = hsecundario;

    } else if(lugar== 'psignificativo'){
        hsignificativo += `<div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon2"></div>
        <div class="timeline-text">
            <h6>${json.name}</h6>
            <p id="ppopulares">Estatura: ${json.height} cm. <br>Peso: ${json.mass} kg.</p>
        </div>
        </div>`
        document.getElementById(lugar).innerHTML = hsignificativo;
    }
}
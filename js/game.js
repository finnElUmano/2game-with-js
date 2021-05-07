const WIDTH = 400;
const HEIGH = 400;

let mapa = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click', function(e){
    
    clicks++;
    let distance =  getDistance(e, mapa);
    let getDistanceHont = getDistanceHint(distance);
    console.log(getDistanceHont);
    $distance.innerHTML = `<h1>${getDistanceHont}</h1>`;

    if (distance < 20) {
        alert(`Found the Treasure in ${clicks} clicks!`);
        location.reload(); //recargando la pagina
    }
});

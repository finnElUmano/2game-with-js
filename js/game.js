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
    console.log('click');
    clicks++;
    let distance =  getDistance(e, mapa);
    let getDistanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distance}</h1>`;
});

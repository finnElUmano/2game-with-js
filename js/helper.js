let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy + diffy));

}

// return an string  depending  on the distance
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boiling Hot!";
    } else if (distance < 40) {
        return "Really Hot";
    } else if (distance < 60) {
        return "Hot" ;
    } else if( distance < 100) {
        return "warm";
    } else if ( distance < 180) {
        return "Cold";
    } else if (distance < 360) {
        return "Really Cold!";
    } else {
      return "Freezing!";
    }

}
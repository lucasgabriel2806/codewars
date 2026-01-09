var number = function(busStops){

    let peoples = 0;

    for(let i = 0; i < busStops.length; i++) {
        peoples += busStops[i][0] - busStops[i][1];
    }

    return peoples;

}

console.log(number([[5, 0], [5, 1]]));
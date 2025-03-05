// Code your solution in this file!
function distanceFromHqInBlocks(userLocation){
    const Hqlocation = 42
    if(userLocation >= Hqlocation){
        return userLocation - Hqlocation;
    }
    return Hqlocation - userLocation;
};

function distanceFromHqInFeet(userLocation){
    return distanceFromHqInBlocks(userLocation) * 264
};

function distanceTravelledInFeet(startLocation, endLocation){
    return Math.abs(startLocation-endLocation) * 264
};

function calculatesFarePrice(startLocation, endLocation){
    const distanceTravelled = distanceTravelledInFeet(startLocation, endLocation)
    let fare;
    if(distanceTravelled >= 400 && distanceTravelled <= 2000){
        fare = 2 * (distanceTravelled - 400)/100;
    }else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
        fare = 25;
    }else if(distanceTravelled > 2500){
        return 'cannot travel that far'
    }else{
        fare = 0
    }
    return fare;
};
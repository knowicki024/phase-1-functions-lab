// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber -42);
}

function distanceFromHqInFeet(streetNumber) {
    const blockLengthInFeet = 264; {
    return Math.abs(streetNumber - 42) * blockLengthInFeet;
}}

function distanceTravelledInFeet(start, destination) {
    const blockLengthInFeet = 264;
    return Math.abs(destination - start) * blockLengthInFeet;
}

function calculatesFarePrice(start,destination) {
 const distance = distanceTravelledInFeet(start, destination);

 if (distance <= 400) {
  return 0;
 } else if ( distance > 400 && distance <=2000) {
  return Math.abs(distance - 400) * 0.02
 } else if (distance > 2000 && distance <= 2500) {
  return 25;
 } else (distance > 2500)
 return 'cannot travel that far'
 }




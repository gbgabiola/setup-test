function getDistanceBetweenTwoPoints(x1, y1, x2, y2) {
  const deltaX = Math.pow(x2 - x1, 2);
  const deltaY = Math.pow(y2 - y1, 2);
  const sum = deltaX + deltaY;
  const distance = Math.sqrt(sum);
  return 'Distance: ' + distance;
}

const distance = getDistanceBetweenTwoPoints(3, 5, 6, 7);
console.log(distance);

const distance1 = getDistanceBetweenTwoPoints(1, 6, 20, 3);
console.log(distance1);

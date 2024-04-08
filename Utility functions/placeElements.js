/**
 * place all elements in circular form inside a container
 *
 * @param {NodeListOf} elements elements to be placed in circular form
 * @param {Number} noOfElements total number of elements
 * @param {Number} arcRadius Radius of arc around which elements should be placed
 * @param {Number} arcStartInDeg Start angle of arc
 * @param {Number} arcEndInDeg End angle of arc
 * @param {Number} startX starting left position of element
 * @param {Number} startY starting top position of element
 *
 * @returns {void}
 */
function placeElements(
  elements,
  noOfElements,
  arcRadius,
  arcStartInDeg,
  arcEndInDeg,
  startX,
  startY
) {
  let x,
    y,
    xCoord,
    yCoord,
    prevX = 0,
    prevY = 0,
    diffX = 0,
    diffY = 0;

  const arcStart = (arcStartInDeg * Math.PI) / 180; // In radians
  const arcEnd = (arcEndInDeg * Math.PI) / 180; // In radians
  const arcLength = arcEnd - arcStart;
  const arcSteps = arcLength / noOfElements;
  let curAngle = arcStart;

  for (let i = 0; i < noOfElements; i++) {
    x = arcRadius * Math.cos(curAngle);
    y = arcRadius * Math.sin(curAngle);

    if (curAngle === arcStart) {
      xCoord = startX;
      yCoord = startY;
    } else {
      diffX = x - prevX;
      diffY = y - prevY;
      xCoord = xCoord + diffX;
      yCoord = yCoord - diffY;
    }

    prevX = x;
    prevY = y;

    curAngle += arcSteps;

    elements[i].style.left = xCoord + "px";
    elements[i].style.top = yCoord + "px";
  }
}

export default placeElements;

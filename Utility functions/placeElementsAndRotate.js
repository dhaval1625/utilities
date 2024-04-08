/**
 * place all elements in circular form inside a container and rotate them according to starting rotation angle and no. of elements
 *
 * @param {NodeListOf} elements elements to be placed in circular form
 * @param {Number} noOfElements total number of elements
 * @param {Number} arcRadius Radius of arc around which elements should be placed
 * @param {Number} arcStartInDeg Start angle of arc
 * @param {Number} arcEndInDeg End angle of arc
 * @param {Number} startX starting left position of element
 * @param {Number} startY starting top position of element
 * @param {Number} [startRotateAngle] starting angle of first element : Not required
 * @param {Number} [rotX] rotation of all elements about X - Axis : Not required
 *
 * @returns {void}
 */
function placeElementsAndRotate(elements, noOfElements, arcRadius, arcStartInDeg, arcEndInDeg, startX, startY, startRotateAngle, rotX = 0) {
   let x,
      y,
      xCoord,
      yCoord,
      prevX = 0,
      prevY = 0,
      diffX = 0,
      diffY = 0;
   
   const rotationSteps = 360 / noOfElements;
   let curRotationAngle = startRotateAngle ?? null;

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

      elements[i].style.left = xCoord + 'px';
      elements[i].style.top = yCoord + 'px';
      if(startRotateAngle !== undefined) {
         elements[i].style.transform = `rotate(${curRotationAngle}deg) rotateX(${rotX}deg)`;
         curRotationAngle -= rotationSteps;
      }
   }
}

export default placeElementsAndRotate;

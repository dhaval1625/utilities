// this function will reture time for given timezone absolute to GMT

function insert(string, subStr, pos) {
   return string.slice(0, pos) + subStr + string.slice(pos);
}

function getMinutes(time) {
   const timeArr = time.split(':');
   return Number(timeArr[0]) * 60 + Number(timeArr[1] || 0);
}

function getTimeString(minutes) {
   const absMinutes = Math.abs(minutes);

   let sign = minutes.toString().slice(0,1);
   if(sign === '-') sign = '+';
   else sign = '-';

   const hours = Math.floor(absMinutes / 60);
   const minutesRem = absMinutes % 60;

   return sign + hours.toString().padStart(2,'0') + ':' + minutesRem.toString().padStart(2,'0');
}

function getTimeDiff(givenTime, refTime) {
   const givenMinutes = Number(givenTime.slice(0,1) + getMinutes(givenTime.slice(1)));
   const refMinutes = Number(refTime.slice(0,1) + getMinutes(refTime.slice(1)));

   const minDiff = givenMinutes - refMinutes;

   return getTimeString(minDiff);
}

export default function parseTimeZone(timeZone) {
   const currentTime = new Date().toTimeString();

   const startIdx = currentTime.indexOf('GMT') + 3;
   const endIdx = currentTime.indexOf('GMT') + 8;
   const temp = currentTime.slice(startIdx,endIdx);
   const localeTimeZone = insert(temp, ':', 3); 
   const absTimeZone = getTimeDiff(timeZone,localeTimeZone);

   const parsedTime = Date.parse(new Date().toISOString().replace('Z',absTimeZone));

   // console.log(new Date(parsedTime).toTimeString());

   return parsedTime;
}

// parseTimeZone('-12');
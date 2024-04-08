export default function getRangeArray(size, startAt = 0) {
   return [...Array(size).keys()].map(i => i + startAt);
};
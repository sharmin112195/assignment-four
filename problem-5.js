
function  waitingTime(waitingTimes  , serialNumber) {
     if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
         return 'Invalid Input';
     }
    let totalLength = waitingTimes.length;
    let candidate = serialNumber - 1;
    let totalTime = 0;
    for (let i= 0; i < waitingTimes.length ; i++ ){
        totalTime += waitingTimes [i];
    }
    let averageTime = Math.round(totalTime / totalLength);
    remain_candidate = candidate - totalLength ;
   let waitingCandidate = remain_candidate > 0 ? remain_candidate : 0;

   let waiting_time = waitingCandidate * averageTime;
   return waiting_time;
   
}
 console.log(waitingTime ([ 3, 5, 7, 11, 6 ], 10));
 console.log(waitingTime ([13, 2], 6));
 console.log(waitingTime ([13, 2, 6, 7, 10], 6));
  console.log(waitingTime ([6], 4));
console.log(waitingTime (7 , 10));
console.log(waitingTime ("[6,2]", 9));
console.log(waitingTime ([7, 8, 3, 4, 5], "9"));
console.log(waitingTime (11, [7, 8, 3, 4, 5]));

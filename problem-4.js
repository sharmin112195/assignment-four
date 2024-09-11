
function calculateFinalScore(obj) {
   if (typeof obj !== "object"){
    return "Invalid Input"
   }
   let totalMarks = obj.testScore + obj.schoolGrade ;
   if (obj.isFFamily){
    totalMarks = totalMarks + 20 ;
   }
if(obj.isFFamily && totalMarks >= 80){
    return true
}
else if (obj.isFFamily && totalMarks < 80){
    return false
}
else if (!obj.isFFamily && totalMarks >= 80){
    return true
}
else if(!obj.isFFamily && totalMarks < 80){
    return false
}
    

}

  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true }));
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore("hello") );
  console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true }));
  console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : false }));



function sendNotification(email) {
    let atTheRate = email.indexOf('@');
    if(atTheRate === -1 || atTheRate === 0 ||atTheRate === email.length - 1 ){
       return "Invalid Email" ;
    }
      else if(email.lastIndexOf('@')!== atTheRate){
         return "Invalid Email" ;
     }
     
let symbol = email.split('@')
let userName = symbol[0]
let domainName = symbol[1]
let emailAccount = userName + ' sent you an email from ' + domainName ;
return emailAccount;
}


 console.log(sendNotification('zihad@gamil.com'));
 console.log(sendNotification('farhan34@yahoo.com'));
  console.log(sendNotification('nadim.naem5@outlook.com'));
 console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com@'));
console.log(sendNotification('sadia8@@icloud.com')); console.log(sendNotification('@sadia8icloud.com'));
console.log(sendNotification('sadia8@@@@@icloud.com'));

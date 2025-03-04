//define variables for each of the numbers in the combination
//define code 1 as 10
const codea = 5 * 2;
// console.log(code1);
//define code 2 as 40
const codeb = 400 / 10;
// console.log(code2);
//define code 3 as 39
const codec = 5 * 6 + 9;
// console.log(code3);
//create an alert that tells users the combination and includes the string "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// define alert message - reminder this cannot run in node, only in browser
alertmessage = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: 
${codea} - ${codeb} - ${codec}`;
// console.log(alertmessage);
// //define alert pop-up for browser
alert(alertmessage);

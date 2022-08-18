// let anyOddNumber = prompt('Enter any odd number 1 - 50 :')
// for(let i = 1; i < 50; i++){
//     if(i % 2 !== 0) {
//         console.log(`Here is an odd number: ${i}`)
//         continue;
//     } else if(i === anyOddNumber){
//         console.log(`Yikes! Skipping number: ${anyOddNumber}`)
//     } else if (i % 2 === 0){
//        break;
//     }
//     console.log(i)
// }
function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean")
}
while(true){
    let anyOddNumber = prompt ('enter an odd number 1 - 50')
    if(anyOddNumber>= 1 && anyOddNumber <= 50 && anyOddNumber % 2 === 1 && isNumber(anyOddNumber)){
        console.log("The number to skip is: " + anyOddNumber);
        console.log(" ");
        for(let i = 1; i <=50; i += 2){
            if (i == anyOddNumber){
                console.log(`Yikes! Skipping number: ${anyOddNumber}`)
                continue;
            }else {
                console.log(`Here is an odd number: ${i}`)
            }
        }
        break;
    }
}

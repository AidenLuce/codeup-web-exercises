// let sayHey = function(){
//     let count = 0;
//     function hey(){
//         if (count < 10){
//             console.log("hey" + count);
//             count++
//         }else{
//             clearInterval();
//         }
//     }
//     setInterval(hey, 1000);
// }

// let count =0
// let thisTimeItWillStop;
// function hey(){
//     if (count < 10){
//         console.log('hey ' + count);
//         count++
//     } else {
//         clearInterval()
//     }
// }
var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);


setTimeout(wakeUp, 5000)
function wakeUp(){
    alert("WAKE UUUUUUUUP!")
}
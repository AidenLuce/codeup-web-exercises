// let i = 1
// while(i< 40000){
//     i = i * 2;
//     console.log(i)
// }


let allCones = Math.floor(Math.random() * 50) + 50;

do{
 let bought = Math.floor(Math.random() * 5) + 1;
if (allCones > bought) {
  console.log(bought + ' cones sold...')
  allCones -= bought
  console.log(allCones)

} else if (allCones < bought){
  console.log(`Cannot sell you ${bought} I only have ${allCones}`)
  allCones -= allCones
}
} while(allCones !== 0);
console.log('Yay! I sold them all!')

const  aPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        Math.random() > 0.5 ? resolve("I was fulfilled!"): reject("I was rejected!")
    }, 3000);
});
// aPromise.then(value => console.log(value)).catch(error=>console.log(error))

fetch("data/murals.json").then (response => response.json()).then(data => console.log(data));


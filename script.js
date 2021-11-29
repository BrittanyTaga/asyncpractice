//function called getRandom Number that returns a promise
let getRandomNumber = function(){
    //getting the promise to write a setTimeout that resolves the promise with random number in 0.5s
    let promise = new Promise((resolve) =>{
        setTimeout(() => resolve(Math.random()), 500)
    })
    return promise //promise is returned here
}
//async function invokes the getRandomNumber, awaiting, and printing to console
async function OOF(){
    getRandomNumber().then(result => console.log(result))
}

//to invoke the function
OOF()

//write an asynchronous function that accepts 1 parameter (city name)
async function getCity(city) {
    //when invoked, use geocode.xyz's api for data
    let response = await fetch(`https://geocode.xyz/${city}?json=1`)
    let data = await response.json()
    //once retrieved, print to console
    console.log('Latitude:' + data.latt + 'Longitude:' + data.longt)
}

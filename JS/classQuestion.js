

const myPets = [
    {name: "Spot", type: "dog", age: 4},
    {name: "Bella", type: "cat", age: 5},
    {name: "Pete", type: "parrot", age: 4},
    {name: "Bella", type: "dog", age: 2}
]

let dogNames = [];

for(let i=0; i < myPets.length; i++){
    if(myPets[i].type === "dog"){
        dogNames.push(myPets[i].name);
    }   
}

console.log(dogNames);
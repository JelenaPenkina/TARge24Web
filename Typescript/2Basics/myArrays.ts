//const superHeros: string[] = []

//const heroPower: Array<number> = [] // Terminal -> tsc myArray.ts 

//type User1 = {
//    name: string
//    isActive: boolean
//}

let humans = ["Bob", "John", "Jane"];
// humans.push("bob")
console.log(humans[0]);
console.log(humans[1]);
console.log(humans[2]);

humans = ["Tarzan", "Mario", "Luigi"];
// let muutujat saab mitu korda MUUTA
console.log(humans)

const heros = ["Spiderman", "Catwoman", "Thor"]
// heros = ["Spiderman", "Catwoman", "Thor"] see annab errorit kuna consti saab ainult ühe 
// korra deklareerida
console.log(heros)

const someNumbers = [
    [255,255,255],
    [1,1,1]
]

console.log(someNumbers);

// push lisab uue väärtuse juurde
heros.push("Superman")
// heros.push(3) // annab errorit kuna nr 3 on int andmetüüp, kuigi prindib välja 
console.log(heros)

// sisesta käsklus: npx tsc myArray.ts ja see tekitab paralleelselt js file 

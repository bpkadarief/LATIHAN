const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (const number of numbers) {
//     console.log(number);
// }

// numbers.forEach();

// const buahBuahan = ["Apel", "Mangga", "Jeruk", "Pisang"];
// console.log("Daftar Buah:");
// // Menggunakan forEach untuk menampilkan setiap buah
// buahBuahan.forEach(function(buah) {
//   console.log("- " + buah);
// });


function isOdd(bilangan){
    return bilangan % 2 !== 1;
}

function isEven(bilangan){
    return bilangan % 2 === 0;
}

//filter
const bilanganGanjil = numbers.filter(bilangan => bilangan % 2 == 1);
const bilanganGenap = numbers.filter((bilangan) => bilangan % 2 === 0);

console.log("Bilangan Ganjil:", bilanganGanjil); 
console.log("Bilangan Genap:", bilanganGenap); 

//find -> mencari elemen pertama yang memenuhi kondisi
const ganjil1 = numbers.find((bilangan) => bilangan % 2 === 1);
console.log("Bilangan Ganjil Pertama:", ganjil1);

//findIndex -> mencari indeks elemen pertama yang memenuhi kondisi
const indexGanjilPertama = numbers.findIndex((bilangan) => bilangan % 2 === 1);
console.log("Indeks Bilangan Ganjil Pertama:", indexGanjilPertama);

//map -> membuat array baru berdasarkan array lama
const x = [1, 2, 3, 4, 5];
const y = [];

for (const bilangan of x){
    y.push(bilangan * bilangan);    
}












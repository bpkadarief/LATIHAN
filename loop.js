//looing

//for
//for (initial; condition; expression){}
//contoh
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}   

// Membuat segitiga bintang dengan looping
const tinggi = 5;
let hasil = "";

for (let i = 1; i <= tinggi; i++) {
    for (let j = 1; j <= i; j++) {
        hasil += "*";
    }
    hasil += "\n";
}

console.log(hasil);

//while
//while (condition){}
const expression = true;
let count = 0;
while (expression)
{
    console.log("Perulangan ke-" + count);
    count++;
    if (count >= 5) {
        break; // keluar dari loop jika count >= 5
    }
}

//do while
//do {statements} while (condition);    
let i = 0;
do {
    console.log("Perulangan ke-" + i);
    i++;
} while (i < 5);      
// do while akan selalu dieksekusi minimal sekali meskipun kondisi awalnya false  
// contoh do while
let j = 0;
do {
    console.log("Perulangan ke-" + j);
    j++;
} while (j < 5);

//loop array
const animals = ["kucing", "anjing", "burung", "ikan"];
for (let i = 0; i < animals.length; i++) {
    console.log("Hewan ke-" + (i + 1) + ": " + animals[i]);
}

//repeat
const name = "Arief";
console.log(name.repeat(3)); // AriefAriefArief

//looping arra
for (const item of buah) {
    console.log("Buah: " + item);
}
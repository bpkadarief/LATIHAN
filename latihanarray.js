//create array of string
//modify array of string => add, remove, update, delete, sort, print, length


const animals = ["kucing", "anjing", "burung", "ikan"];
console.log(animals);
// Menambahkan elemen ke array
animals.push("kelinci");
console.log(animals);
// Menghapus elemen dari array
animals.pop();
console.log(animals);
// Mengupdate elemen di array  
animals[0] = "kucing garong";
console.log(animals);
// Menghapus elemen tertentu dari array
const index = animals.indexOf("anjing");

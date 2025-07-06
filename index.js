/*
const { Children } = require("react");

// latihan 1 //
let nama = "John";
let umur = 30;
let pekerjaan = "Programmer";

console.log("Nama:", nama);
console.log("Umur:", umur);   
console.log("Pekerjaan:", pekerjaan);


// latihan 2 //
let angka1 = 10;
let angka2 = 5;

console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2); 


// latihan 3 //
let x = 10;

// Tambah 5
x += 5;
console.log("Setelah ditambah 5:", x);

// Kurang 5
x -= 5;
console.log("Setelah dikurang 5:", x);

// Kali 5
x *= 5;
console.log("Setelah dikali 5:", x);

// Bagi 5
x /= 5;
console.log("Setelah dibagi 5:", x); 

//Latihan 4 //
let a = 10; 
let b = 3

console.log("Hasil bagi a dan b:", a / b);
console.log("Hasil sisa bagi a dan b:", a % b);
console.log("increment a:", ++a);
console.log("decrement b:", --b);

// Latihan 5 //
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // false
console.log(isAdult || hasLicense); // true


//Latihan-Latihan //


//function
function Hello(name) {
    console.log("Hello, " + name + "!");    
}



const number1 = [1, 2, 3, 4, 5];
const number2 = number1;
console.log("Number 1:", number1);
console.log("Number 2:", number2);
number1[0] = 100;
console.log("number1", number1);
console.log("number2", number2);

//method
console.log("number1");
number1.push(6);
console.log("number1 after push:", number1);
console.log("number2 after number1 push:", number2);    
number1unshift(0);
console.log("number1 after unshift:", number1);     
console.log("number2 after number1 unshift:", number2);


const text = "satu dua tiga empat lima";
const words = text.split(" ");

//create array of string
//modify array of string => add, remove, update, delete, sort, print, length

const animals = ["kucing", "anjing", "burung", "ikan"];


// latihan 10 - Object

//Object
const person1Obj = {
    name: "John",
    age: 30,  
    isMarried: true,
    Children: ["Alice", "Bob"], 
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"      
      }
}

// Accessing object properties
const key = "age";
console.log("Name:", person1Obj.name);
console.log("Age:", person1Obj.age);   
console.log("Is Married:", person1Obj.isMarried);
console.log("Children:", person1Obj.Children.join(", ")); 
console.log(person1Obj[key]);
console.log(person1Obj["name"]);
//update age
person1Obj.age = 31;
//add city
person1Obj.city = "New York";
//delete isMarried
delete person1Obj.isMarried;
//print object
console.log("Updated person object:", person1Obj);

const user = [
    {
        id: 1,
        name: "John",
        age: 30,
        isMarried: true,
        children: ["Alice", "Bob"],
        
    },
    {
        id: 2,
        name: "Jane",
        age: 28,
        isMarried: false,
        children: [],
        },
        {
        id: 3,
        name: "Mike",
        age: 35,
        isMarried: true,
        children: ["Charlie"],  
        }
]   

console.table(user);

//flow control
//conditional statement
let lapar = true
let isIstirahat = false

if (lapar && !isIstirahat) {
    console.log("Makan dulu");
}

if (lapar || isIstirahat) {
    console.log("Makan atau istirahat");
}   

if (!lapar) {
    console.log("Tidak lapar");
}

if (lapar === false) {
    console.log("Tidak lapar");
}
//looping statement

const nilai = 89;
let grade = "";

if (nilai >= 90) {
    grade = "A";
    else if (nilai >= 80) {
        grade = "B";
    }   
    else if (nilai >= 70) {
        grade = "C";
    }
    else if (nilai >= 60) {
        grade = "D";
    }
    else {
        grade = "E";
    }

    console.log("Grade:", grade);
}

const clockIn = 8;
const clockOut = 17;
const maxclockIn = 9;

if (clockIn < maxclockIn) {
    console.log("Anda masuk kerja tepat waktu");
} else if (clockIn === maxclockIn) {
    console.log("Anda masuk kerja tepat waktu");
} else {
    console.log("Anda masuk kerja terlambat");
}

// switch case
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "E":
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}
*/


/*
// latihan

const umur = 20;
const jmlTiket = 3;
const riwayatPembelian = [];
let hargaTiket = 0;
let totalHarga = 0;
let totalPembelian = 0;
let kategori = "";

//tentukan kategori & harga tiket

if (umur < 12) {
    hargaTiket = 25000;
    kategori = "Anak-anak";
    console.log("Kategori: " + kategori);
    console.log("Harga Tiket: " + hargaTiket);
} else if (umur >= 12 && umur < 60) {
    hargaTiket = 50000;
    kategori = "Dewasa";
    console.log("Kategori: " + kategori);
    console.log("Harga Tiket: " + hargaTiket);
} else {
    hargaTiket = 30000;
    kategori = "Lansia";
    console.log("Kategori: " + kategori);
    console.log("Harga Tiket: " + hargaTiket);
}

totalHarga = hargaTiket * jmlTiket;
const tiket = {
    kategori: kategori,
    jumlah: jmlTiket,
    totalHarga: totalHarga
};
riwayatPembelian.push(tiket);
console.log("Riwayat Pembelian:");
*/





function getKategoriDanHarga(umur) {
    let kategori = "";
    let hargaTiket = 0;

    if (umur < 12) {
        kategori = "Anak";
        hargaTiket = 25000;
    } else if (umur >= 12 && umur < 60) {
        kategori = "Dewasa";
        hargaTiket = 50000;
    } else {
        kategori = "Lansia";
        hargaTiket = 30000;
    }

    return { kategori, hargaTiket };
}

// Contoh penggunaan:
const hasil = getKategoriDanHarga(20);
console.log("Kategori:", hasil.kategori);
console.log("Harga Tiket:", hasil.hargaTiket);

//buat objek dengan format kategori: anak-anak, jumlah:2, totalHarga: 50000
const pembelian = [];

const objekPembelian = {
    kategori: "anak-anak",
    jumlah: 2,
    totalHarga: 50000
};

pembelian.push(objekPembelian);

console.log(pembelian);

console.log("Riwayat Pembelian:");
pembelian.forEach((item, index) => {
    console.log(
        `#${index + 1} | Kategori: ${item.kategori}, Jumlah: ${item.jumlah}, Total Harga: Rp${item.totalHarga}`
    );
});

// Latihan
//1. tentukan kategori dan harga tiket berdasarkan umur
//2. buat objek dengan format kategori: anak-anak, jumlah:2, totalHarga: 50000
//3. buat array riwayat pembelian 
//4. tampilkan riwayat pembelian dengan format #1 | Kategori: anak-anak, Jumlah: 2, Total Harga: Rp50000



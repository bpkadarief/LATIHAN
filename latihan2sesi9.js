// function daftarNasabahLolos(nasabah) {
//     // 1. Filter nasabah yang memenuhi syarat: nilaiKredit > 75
//     const nasabahMemenuhiSyarat = nasabah.filter(dataNasabah => {
//         return dataNasabah.nilaiKredit > 75;
//     });

//     // 2. Inisialisasi object literal untuk menyimpan nasabah yang dikelompokkan
//     const hasilKelompok = {};

//     // 3. Iterasi nasabah yang sudah memenuhi syarat dan kelompokkan berdasarkan kelasKredit
//     nasabahMemenuhiSyarat.forEach(dataNasabah => {
//         const kelas = dataNasabah.kelasKredit;

//         // Periksa apakah kelas kredit ini sudah ada sebagai kunci di hasilKelompok
//         if (!hasilKelompok[kelas]) {
//             // Jika belum ada, inisialisasi dengan array kosong
//             hasilKelompok[kelas] = [];
//         }

//         // Tambahkan nasabah ke array di bawah kelas kredit yang sesuai
//         hasilKelompok[kelas].push(dataNasabah);
//     });

//     // 4. Kembalikan object literal yang sudah dikelompokkan
//     return hasilKelompok;
// }

// // --- TEST CASE ---

// // Data nasabah contoh 1
// const dataNasabah1 = [
//     { nama: "Andi", nilaiKredit: 80, kelasKredit: "Gold" },
//     { nama: "Budi", nilaiKredit: 65, kelasKredit: "Silver" },
//     { nama: "Citra", nilaiKredit: 90, kelasKredit: "Platinum" },
//     { nama: "Dewi", nilaiKredit: 75, kelasKredit: "Silver" }, // Nilai 75, TIDAK LOLOS (>75)
//     { nama: "Eko", nilaiKredit: 88, kelasKredit: "Gold" },
//     { nama: "Fajar", nilaiKredit: 92, kelasKredit: "Platinum" },
//     { nama: "Gita", nilaiKredit: 85, kelasKredit: "Gold" }
// ];

// console.log("--- Test Case 1: Nasabah dengan campuran lolos/tidak ---");
// console.log("Data Nasabah Awal:", dataNasabah1);
// const lolosKelompok1 = daftarNasabahLolos(dataNasabah1);
// console.log("Nasabah Lolos (Dikelompokkan):", lolosKelompok1);
// /*
// Output diharapkan:
// {
//   Gold: [
//     { nama: 'Andi', nilaiKredit: 80, kelasKredit: 'Gold' },
//     { nama: 'Gita', nilaiKredit: 85, kelasKredit: 'Gold' }
//   ],
//   Platinum: [
//     { nama: 'Citra', nilaiKredit: 90, kelasKredit: 'Platinum' },
//     { nama: 'Fajar', nilaiKredit: 92, kelasKredit: 'Platinum' }
//   ]
// }
// */
// console.log("\n");


// // Test Case 2: Semua nasabah lolos, ada kelas kredit baru
// const dataNasabah2 = [
//     { nama: "Hana", nilaiKredit: 95, kelasKredit: "Diamond" },
//     { nama: "Irfan", nilaiKredit: 82, kelasKredit: "Gold" },
//     { nama: "Joko", nilaiKredit: 88, kelasKredit: "Diamond" },
// ];

// console.log("--- Test Case 2: Semua nasabah lolos, ada kelas kredit baru ---");
// console.log("Data Nasabah Awal:", dataNasabah2);
// const lolosKelompok2 = daftarNasabahLolos(dataNasabah2);
// console.log("Nasabah Lolos (Dikelompokkan):", lolosKelompok2);
// /*
// Output diharapkan:
// {
//   Diamond: [
//     { nama: 'Hana', nilaiKredit: 95, kelasKredit: 'Diamond' },
//     { nama: 'Joko', nilaiKredit: 88, kelasKredit: 'Diamond' }
//   ],
//   Gold: [
//     { nama: 'Irfan', nilaiKredit: 82, kelasKredit: 'Gold' }
//   ]
// }
// */
// console.log("\n");


// // Test Case 3: Tidak ada nasabah yang lolos
// const dataNasabah3 = [
//     { nama: "Kartika", nilaiKredit: 70, kelasKredit: "Silver" },
//     { nama: "Leo", nilaiKredit: 50, kelasKredit: "Bronze" },
// ];

// console.log("--- Test Case 3: Tidak ada nasabah yang lolos ---");
// console.log("Data Nasabah Awal:", dataNasabah3);
// const lolosKelompok3 = daftarNasabahLolos(dataNasabah3);
// console.log("Nasabah Lolos (Dikelompokkan):", lolosKelompok3);
// /*
// Output diharapkan:
// {} (object kosong)
// */
// console.log("\n");


// // Test Case 4: Array nasabah kosong
// const dataNasabah4 = [];

// console.log("--- Test Case 4: Array nasabah kosong ---");
// console.log("Data Nasabah Awal:", dataNasabah4);
// const lolosKelompok4 = daftarNasabahLolos(dataNasabah4);
// console.log("Nasabah Lolos (Dikelompokkan):", lolosKelompok4);
// /*
// Output diharapkan:
// {} (object kosong)
// */
// console.log("\n");

function daftarNasabahLolos(listNasabah){
    const hasilKelompok = {};
    for (let nasabah of listNasabah){
        if (nasabah.nilaiKredit > 75){
            if(hasilKelompok[nasabah.kelasKredit] === undefined){
                hasilKelompok[nasabah.kelasKredit] = [];
            }
            hasilKelompok[nasabah.kelasKredit].push(nasabah);
        }
    }
    return hasilKelompok;
}
const dataNasabah = [
    { nama: "Andi", nilaiKredit: 80, kelasKredit: "Gold" },
    { nama: "Budi", nilaiKredit: 65, kelasKredit: "Silver" },
    { nama: "Citra", nilaiKredit: 90, kelasKredit: "Platinum" },
    { nama: "Dewi", nilaiKredit: 75, kelasKredit: "Silver" }, // Nilai 75, TIDAK LOLOS (>75)
    { nama: "Eko", nilaiKredit: 88, kelasKredit: "Gold" },
    { nama: "Fajar", nilaiKredit: 92, kelasKredit:  "Platinum" },
    { nama: "Gita", nilaiKredit: 85, kelasKredit:   "Gold" }
];

const hasil = daftarNasabahLolos(dataNasabah);
console.log(hasil);


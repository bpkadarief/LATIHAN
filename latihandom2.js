// // Menunggu sampai seluruh DOM (halaman HTML) selesai dimuat
// // Ini adalah praktik terbaik untuk memastikan semua elemen HTML sudah tersedia
// // sebelum JavaScript mencoba memanipulasinya.
// /*
// document.addEventListener('DOMContentLoaded', function() {
//     // 1. Mengambil (Mengakses) Elemen HTML dari DOM

//     // Mendapatkan elemen paragraf berdasarkan ID-nya
//     const paragraf = document.getElementById('konten-teks');
    
//     // Mendapatkan elemen tombol berdasarkan ID-nya
//     const tombol = document.getElementById('tombol-ubah-teks');

//     // Mendapatkan elemen judul halaman berdasarkan ID-nya
//     const judul = document.getElementById('judul-halaman');

//     // 2. Memanipulasi (Mengubah) Elemen DOM

//     // Mengubah warna teks judul halaman
//     judul.style.color = 'darkgreen';
//     judul.style.fontSize = '2.5em';

//     // 3. Menambahkan Event Listener (Mendengarkan Interaksi Pengguna)

//     // Menambahkan 'listener' ke tombol.
//     // Ketika tombol ini 'diklik' (event 'click'), fungsi anonim di dalamnya akan dijalankan.
//     tombol.addEventListener('click', function() {
//         // Saat tombol diklik, ubah teks paragraf
//         paragraf.textContent = 'Selamat! Teks ini berhasil diubah oleh JavaScript!';
        
//         // Kita juga bisa mengubah gayanya
//         paragraf.style.color = 'red';
//         paragraf.style.fontWeight = 'bold';
        
//         // Dan bahkan mengubah teks tombolnya sendiri
//         tombol.textContent = 'Teks Sudah Berubah!';
//         tombol.style.backgroundColor = '#28a745'; // Ubah warna tombol jadi hijau
//     });

//     // Anda bisa juga menambahkan log ke konsol untuk debugging
//     console.log("DOM siap dimanipulasi!");
//     console.log("Elemen paragraf ditemukan:", paragraf);
//     console.log("Elemen tombol ditemukan:", tombol);
// });

// */

// const todos = [
//     {
//         id: 1,
//         text: "Belajar JavaScript",
//         done: true
//     },
//     {
//         id: 2,
//         text: "Mengerjakan latihan",
//         done: false
//     }
// ];

// // Fungsi untuk menampilkan daftar todo
// function tampilkanTodos() {
//     const todoList = document.getElementById("todo-list");
//     todoList.innerHTML = ""; // Kosongkan daftar sebelum menampilkan ulang

//     todos.forEach(todo => {
//         const li = document.createElement("li");
//         li.textContent = todo.text;
//         li.className = todo.done ? "done" : "not-done";
//         li.dataset.id = todo.id; // Simpan ID di atribut data

//         // Tambahkan tombol untuk menghapus todo
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Hapus";
//         deleteButton.addEventListener("click", () => hapusTodo(todo.id));
        
//         li.appendChild(deleteButton);
//         todoList.appendChild(li);
//     });
// }

localStorage.setItem("nama", "Arief");
localStorage.setItem("umur", 20);

const nama = localStorage.getItem("nama");

const alamat = JSON.parse(localStorage.getItem("alamat")) || {
    jalan: "Jl. Contoh No. 123",
    kota: "Kota Contoh",
    kodePos: "12345"
};

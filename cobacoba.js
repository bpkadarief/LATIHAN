// main function
function pesanMakan(menu, jenisMakanan) {
  const riwayatPemesanan = [];

  // 1. tentukan kategori & harga makanan berdasarkan menu
  const kategori = kategoriBerdasarkanMenu(menu)

  // 2. bikin object dengan format: {menu: 'nasi goreng', jumlah: 2, totalHarga: 50_000}
  const totalHarga = hitungTotalHarga(menu, jumlahPesanan);

  const tiket = {
    menu: menu,
    jumlah: jumlahPesanan,
    totalHarga: totalHarga,
  };

  // 3. masukkan object ke array riwayatPembelian
  riwayatPembelian.push(pesanan);

  // 4. Tampilkan riwayat pembelian
  console.table(riwayatPembelian);
}

// sub function
function kategoriBerdasarkanUmur(umur) {
  if (umur < 12) return "Anak - anak";
  if (umur < 60) return "Dewasa";
  return "Lansia";
}

// sub function
function hitungTotalHarga(kategori, jumlahTiket) {
  const tarif = {
    "Anak - anak": 25_000,
    Dewasa: 50_000,
    Lansia: 30_000,
  };

  const harga = tarif[kategori] * jumlahTiket;
  const ppn = harga * 0.11;
  return harga + ppn;
}

// input
const umur = 29;
const jumlahTiket = 5;

beliTiket(umur, jumlahTiket);
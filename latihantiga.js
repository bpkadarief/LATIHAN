// --- 1. Mendapatkan Referensi Elemen DOM ---
const productNameInput = document.getElementById('productName');
const stockStatusSelect = document.getElementById('stockStatus');
const priceInput = document.getElementById('price');
const descriptionTextarea = document.getElementById('description');
const quantityInput = document.getElementById('quantity');
const colorInput = document.getElementById('color');
const materialInput = document.getElementById('material');
const brandInput = document.getElementById('brand');
const saveButton = document.getElementById('saveButton');
const productForm = document.getElementById('productForm');

// Referensi elemen untuk menampilkan data produk
const displayProductName = document.getElementById('displayProductName');
const displayProductImage = document.getElementById('displayProductImage');
const displayStockStatus = document.getElementById('displayStockStatus');
const displayPrice = document.getElementById('displayPrice');
const displayDescription = document.getElementById('displayDescription');
const displayQuantity = document.getElementById('displayQuantity');
const displayColor = document.getElementById('displayColor');
const displayMaterial = document.getElementById('displayMaterial');
const displayBrand = document.getElementById('displayBrand');

// Referensi elemen pesan error
const productNameError = document.getElementById('productNameError');
const stockStatusError = document.getElementById('stockStatusError');
const priceError = document.getElementById('priceError');
const descriptionError = document.getElementById('descriptionError');
const quantityError = document.getElementById('quantityError');
const colorError = document.getElementById('colorError');
const materialError = document.getElementById('materialError');
const brandError = document.getElementById('brandError');

// Array untuk menyimpan semua input yang perlu divalidasi
const inputsToValidate = [
    { element: productNameInput, errorElement: productNameError, type: 'text', validation: val => val.trim() !== '' },
    { element: stockStatusSelect, errorElement: stockStatusError, type: 'select', validation: val => val !== '' },
    { element: priceInput, errorElement: priceError, type: 'number', validation: val => val > 0 },
    { element: descriptionTextarea, errorElement: descriptionError, type: 'text', validation: val => val.trim() !== '' },
    { element: quantityInput, errorElement: quantityError, type: 'number', validation: val => val >= 0 }, // Quantity bisa 0 jika stok habis
    { element: colorInput, errorElement: colorError, type: 'text', validation: val => val.trim() !== '' },
    { element: materialInput, errorElement: materialError, type: 'text', validation: val => val.trim() !== '' },
    { element: brandInput, errorElement: brandError, type: 'text', validation: val => val.trim() !== '' },
];

// --- 2. Fungsi Validasi ---
function validateInput(inputObj) {
    const value = inputObj.element.value;
    let isValid = inputObj.validation(value);

    // Validasi khusus untuk number: pastikan tidak NaN setelah konversi
    if (inputObj.type === 'number') {
        const numValue = Number(value);
        if (isNaN(numValue) || (inputObj.validation && !inputObj.validation(numValue))) {
            isValid = false;
        }
    }

    if (!isValid) {
        inputObj.errorElement.style.display = 'block'; // Tampilkan pesan error
        inputObj.element.classList.add('input-error'); // Tambahkan kelas untuk styling error (misal border merah)
        return false;
    } else {
        inputObj.errorElement.style.display = 'none'; // Sembunyikan pesan error
        inputObj.element.classList.remove('input-error');
        return true;
    }
}

// Fungsi untuk memvalidasi semua input di form
function validateAllInputs() {
    let allValid = true;
    inputsToValidate.forEach(inputObj => {
        if (!validateInput(inputObj)) {
            allValid = false;
        }
    });
    return allValid;
}

// --- 3. Dynamic Form Handling: Stock Status ---
stockStatusSelect.addEventListener('change', () => {
    if (stockStatusSelect.value === 'Out of Stock') {
        quantityInput.disabled = true;
        quantityInput.value = '0'; // Set quantity to 0 when out of stock
        validateInput(inputsToValidate.find(item => item.element === quantityInput)); // Validasi quantity agar pesan error hilang jika sebelumnya ada
    } else {
        quantityInput.disabled = false;
        // quantityInput.value = ''; // Anda bisa memilih untuk mengosongkan atau membiarkan nilai sebelumnya
    }
    // Lakukan validasi ulang pada stockStatus itu sendiri
    validateInput(inputsToValidate.find(item => item.element === stockStatusSelect));
});

// --- 4. Real-time Validation (Event Listeners) ---
inputsToValidate.forEach(inputObj => {
    inputObj.element.addEventListener('input', () => {
        validateInput(inputObj);
    });
    // Untuk select/number input, 'change' event mungkin lebih cocok
    if (inputObj.type === 'select' || inputObj.type === 'number') {
        inputObj.element.addEventListener('change', () => {
            validateInput(inputObj);
        });
    }
});


// --- 5. Save Form Function (`saveForm()`) ---
productForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form dari refresh halaman

    const isValidForm = validateAllInputs(); // Lakukan validasi terakhir sebelum submit

    if (isValidForm) {
        // Kumpulkan data dari form
        const productData = {
            name: productNameInput.value,
            stockStatus: stockStatusSelect.value,
            price: Number(priceInput.value),
            description: descriptionTextarea.value,
            quantity: Number(quantityInput.value),
            color: colorInput.value,
            material: materialInput.value,
            brand: brandInput.value
            // image: "path/to/your/image.jpg" // Jika ada input untuk gambar
        };

        // Tampilkan data ke sisi kanan
        displayProductName.textContent = productData.name;
        displayPrice.textContent = productData.price.toLocaleString('id-ID'); // Format harga
        displayDescription.textContent = productData.description;
        displayQuantity.textContent = productData.quantity;
        displayColor.textContent = productData.color;
        displayMaterial.textContent = productData.material;
        displayBrand.textContent = productData.brand;

        // Update Stock Status display
        displayStockStatus.textContent = productData.stockStatus;
        displayStockStatus.classList.remove('stock-status-in-stock', 'stock-status-out-of-stock'); // Hapus kelas sebelumnya
        if (productData.stockStatus === 'In Stock') {
            displayStockStatus.classList.add('stock-status-in-stock');
        } else {
            displayStockStatus.classList.add('stock-status-out-of-stock');
        }

        // Optional: Reset form setelah berhasil disimpan
        // productForm.reset();
        // quantityInput.disabled = false; // Pastikan quantity aktif lagi setelah reset jika stockStatus ikut direset
        // inputsToValidate.forEach(inputObj => inputObj.errorElement.style.display = 'none'); // Sembunyikan semua pesan error
        console.log("Product saved:", productData);
        alert("Produk berhasil disimpan!");

    } else {
        alert("Mohon lengkapi semua data yang wajib diisi dan periksa kembali validasinya.");
    }
});

// --- Inisialisasi awal (misal untuk Quantity jika Stock Status defaultnya Out of Stock) ---
// Panggil handler change untuk memastikan status quantity sesuai dengan default value stockStatus saat load
stockStatusSelect.dispatchEvent(new Event('change'));

// --- Optional: Fungsi untuk memusatkan gambar, ini lebih baik di CSS ---
// displayProductImage.style.display = 'block';
// displayProductImage.style.marginLeft = 'auto';
// displayProductImage.style.marginRight = 'auto';

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Gagal mengambil data!");
    }
    return response.json(); // Ubah hasil ke format JSON
  })
  .then(data => {
    console.log("Data berhasil diambil:", data); // Tampilkan data di console
    // Kamu bisa melakukan sesuatu dengan datanya di sini
  })
  .catch(error => {
    console.error("Terjadi error:", error); // Tangani jika ada error
  });

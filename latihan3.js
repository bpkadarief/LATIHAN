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

// Referensi container untuk daftar produk
const productListContainer = document.getElementById('productList');

// Referensi elemen pesan error (tetap sama)
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
    { element: priceInput, errorElement: priceError, type: 'number', validation: val => Number(val) > 0 },
    { element: descriptionTextarea, errorElement: descriptionError, type: 'text', validation: val => val.trim() !== '' },
    { element: quantityInput, errorElement: quantityError, type: 'number', validation: val => Number(val) >= 0 }, // Quantity bisa 0 jika stok habis
    { element: colorInput, errorElement: colorError, type: 'text', validation: val => val.trim() !== '' },
    { element: materialInput, errorElement: materialError, type: 'text', validation: val => val.trim() !== '' },
    { element: brandInput, errorElement: brandError, type: 'text', validation: val => val.trim() !== '' },
];

// --- 2. Fungsi Validasi ---
function validateInput(inputObj) {
    const value = inputObj.element.value;
    let isValid = true;

    // Khusus untuk input number, cek apakah inputnya angka valid dulu
    if (inputObj.type === 'number') {
        const numValue = Number(value);
        if (isNaN(numValue)) {
            isValid = false;
        } else {
            isValid = inputObj.validation(numValue);
        }
    } else {
        isValid = inputObj.validation(value);
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
        // Validasi quantity agar pesan error hilang jika sebelumnya ada
        validateInput(inputsToValidate.find(item => item.element === quantityInput));
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


// --- 5. Save Form Function (`saveForm()` with Fetch API) ---
productForm.addEventListener('submit', async (event) => { // Tandai fungsi sebagai async
    event.preventDefault(); // Mencegah form dari refresh halaman

    const isValidForm = validateAllInputs(); // Lakukan validasi terakhir sebelum submit

    if (isValidForm) {
        const productData = {
            name: productNameInput.value,
            stockStatus: stockStatusSelect.value,
            price: Number(priceInput.value),
            description: descriptionTextarea.value,
            quantity: Number(quantityInput.value),
            color: colorInput.value,
            material: materialInput.value,
            brand: brandInput.value,
            image: "https://via.placeholder.com/200" // Default image for display
        };

        try {
            // Lakukan request ke JSONPlaceholder API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Ambil post pertama sebagai contoh
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiData = await response.json();

            // Gabungkan data dari form dengan data dari API
            const combinedProductData = {
                ...productData, // Data dari form
                apiTitle: apiData.title,
                apiBody: apiData.body,
                // Anda bisa menambahkan properti lain dari API jika diperlukan
            };

            // Tampilkan data ke daftar produk
            displayProduct(combinedProductData);

            // Reset form setelah berhasil disimpan dan ditampilkan
            productForm.reset();
            // Reset status disabled quantity input setelah form di-reset
            quantityInput.disabled = false;
            // Sembunyikan semua pesan error setelah form di-reset
            inputsToValidate.forEach(inputObj => {
                inputObj.errorElement.style.display = 'none';
                inputObj.element.classList.remove('input-error');
            });
            // Pastikan select juga kembali ke default jika perlu divalidasi
            stockStatusSelect.value = '';

            alert("Produk berhasil disimpan dan data tambahan diambil!");

        } catch (error) {
            console.error("Error fetching additional data:", error);
            alert(`Terjadi kesalahan saat mengambil data tambahan: ${error.message}. Produk tetap disimpan.`);
            // Jika fetch gagal, Anda masih bisa menampilkan data dari form saja
            // displayProduct(productData); // Opsi: tetap tampilkan data form tanpa data API
        }

    } else {
        alert("Mohon lengkapi semua data yang wajib diisi dan periksa kembali validasinya.");
    }
});

// --- Fungsi untuk menampilkan satu produk ke dalam daftar ---
function displayProduct(product) {
    const productItemDiv = document.createElement('div');
    productItemDiv.classList.add('product-item');

    // Buat elemen-elemen untuk menampilkan detail produk
    const productNameH3 = document.createElement('h3');
    productNameH3.textContent = product.name;

    const productImage = document.createElement('img');
    productImage.src = product.image; // Gunakan image dari productData
    productImage.alt = product.name;
    productImage.classList.add('product-image'); // Pastikan kelas CSS untuk centering diterapkan

    const stockStatusP = document.createElement('p');
    const stockStatusSpan = document.createElement('span');
    stockStatusSpan.textContent = product.stockStatus;
    if (product.stockStatus === 'In Stock') {
        stockStatusSpan.classList.add('stock-status-in-stock');
    } else {
        stockStatusSpan.classList.add('stock-status-out-of-stock');
    }
    stockStatusP.appendChild(stockStatusSpan);

    const priceP = document.createElement('p');
    priceP.innerHTML = `Rp. ${product.price.toLocaleString('id-ID')} <small>per pcs</small>`;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = product.description;

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info');
    productInfoDiv.innerHTML = `
        <p><strong>Quantity</strong> ${product.quantity}</p>
        <p><strong>Color</strong> ${product.color}</p>
        <p><strong>Material</strong> ${product.material}</p>
        <p><strong>Brand</strong> ${product.brand}</p>
    `;

    // Tambahkan informasi tambahan dari API
    const additionalInfoDiv = document.createElement('div');
    additionalInfoDiv.classList.add('additional-info');
    additionalInfoDiv.innerHTML = `
        <h4>Additional Info from API:</h4>
        <p><strong>Title:</strong> ${product.apiTitle || 'N/A'}</p>
        <p><strong>Description:</strong> ${product.apiBody || 'N/A'}</p>
    `;

    // Tambahkan tombol Edit/Delete (opsional, sesuaikan dengan kebutuhan)
    const productActionsDiv = document.createElement('div');
    productActionsDiv.classList.add('product-actions');
    productActionsDiv.innerHTML = `
        <button style="background-color: red; color: white; border: none; padding: 8px 12px; cursor: pointer; margin-right: 5px;">Delete</button>
        <button style="background-color: orange; color: white; border: none; padding: 8px 12px; cursor: pointer;">Edit</button>
    `;

    // Gabungkan semua elemen ke dalam productItemDiv
    productItemDiv.appendChild(productNameH3);
    productItemDiv.appendChild(productImage);
    productItemDiv.appendChild(stockStatusP);
    productItemDiv.appendChild(priceP);
    productItemDiv.appendChild(descriptionP);
    productItemDiv.appendChild(productInfoDiv);
    productItemDiv.appendChild(additionalInfoDiv); // Tambahkan info API
    productItemDiv.appendChild(productActionsDiv);

    // Tambahkan productItemDiv ke dalam container productList
    productListContainer.prepend(productItemDiv); // prepend agar produk baru muncul di atas
}


// --- Inisialisasi awal (misal untuk Quantity jika Stock Status defaultnya Out of Stock) ---
// Panggil handler change untuk memastikan status quantity sesuai dengan default value stockStatus saat load
stockStatusSelect.dispatchEvent(new Event('change'));

// --- Optional: Initial display for the example product in HTML ---
// You might want to remove the static example product from HTML
// and add it dynamically using displayProduct() on page load.
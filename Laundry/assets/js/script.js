// script.js

let laundryData = [];

// Function to calculate total price
function calculateTotal() {
    const weight = parseFloat(document.getElementById('weight').value);
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);
    const total = weight * pricePerKg;
    const jenis = parseFloat(document.getElementById('jenis').value);

    document.getElementById('total').value = total.toFixed(2);
}

// Function to submit laundry data
function submitLaundry() {
    const weight = parseFloat(document.getElementById('weight').value);
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);
    const total = parseFloat(document.getElementById('total').value);
    const jenis = document.getElementById('jenis').value; // Remove parseFloat here

    const laundry = {
        weight,
        pricePerKg,
        total,
        jenis,
    };

    laundryData.push(laundry);
    updateLaundryList();
    clearForm();
}


// Function to update laundry list
function updateLaundryList() {
    const laundryList = document.getElementById('laundryList');
    laundryList.innerHTML = '';

    laundryData.forEach((laundry, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
    <p>Jenis Barang: ${laundry.jenis}</p>
        <p>Berat (kg): ${laundry.weight}</p>
        <p>Harga per kg: ${laundry.pricePerKg} IDR</p>
        <span>Total: ${laundry.total.toFixed(2)} IDR</span>
        `;
        laundryList.appendChild(listItem);
    });

    document.querySelector('.laundry-list').style.display = 'block';
}

// Function to delete laundry data
function deleteLaundry(index) {
    laundryData.splice(index, 1);
    updateLaundryList();
}

// Function to clear the form
function clearForm() {
    document.getElementById('weight').value = '';
    document.getElementById('pricePerKg').value = '';
    document.getElementById('total').value = '';
    document.getElementById('jenis').value= '';
}

// Simulate loading, hide splash screen, and show form after 2 seconds
setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.laundry-form').style.display = 'block';
}, 2000);

// Function to add laundry item
function addLaundryItem(jenis, berat, harga) {
    const total = calculateTotal(berat, harga);
    const laundryItem = { jenis, berat, harga, total };
    laundryList.push(laundryItem);
    renderLaundryList();
}


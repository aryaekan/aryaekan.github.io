function generateLink() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Tulis ucapan dulu!");
        return;
    }

    // Simpan pesan di sessionStorage (hilang setelah browser ditutup)
    sessionStorage.setItem("valentineMessage", message);

    // Tampilkan link tanpa parameter
    let link = window.location.origin + window.location.pathname;

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("share-link").value = link;

    // Sembunyikan textarea dan tombol setelah link dibuat
    document.getElementById("message").style.display = "none";
    document.querySelector("button").style.display = "none";
}

function copyLink() {
    let copyText = document.getElementById("share-link");
    copyText.select();
    document.execCommand("copy");
    alert("Link berhasil disalin!");
}

window.onload = function () {
    // Cek apakah ada pesan yang tersimpan
    let message = sessionStorage.getItem("valentineMessage");
    
    if (message) {
        // Tampilkan hanya pesan tanpa elemen lain
        document.body.innerHTML = `<div class="container"><p>${message}</p></div>`;

        // Hapus pesan setelah ditampilkan (agar tidak muncul lagi saat reload)
        sessionStorage.removeItem("valentineMessage");
    } else {
        // Jika tidak ada pesan, tampilkan halaman utama
        document.body.innerHTML = `
            <div class="container">
                <h1>Happy Valentine’s Day! ❤️</h1>
                <p>Kirimkan ucapan spesial untuk orang yang kamu sayangi!</p>
                <textarea id="message" placeholder="Tulis ucapan romantis di sini..."></textarea>
                <button onclick="generateLink()">Buat Link Ucapan</button>
                <div id="output" class="hidden">
                    <p>Bagikan link ini:</p>
                    <input type="text" id="share-link" readonly>
                    <button onclick="copyLink()">Salin Link</button>
                </div>
            </div>
        `;
    }
};

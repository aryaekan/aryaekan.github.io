// Fungsi untuk membuat link
function generateLink() {
    let message = document.getElementById("message").value;
    
    // Jika pesan kosong, tampilkan peringatan
    if (message.trim() === "") {
        alert("Tulis ucapan dulu!");
        return;
    }

    // Buat ID unik untuk pesan
    let messageId = Date.now().toString(36) + Math.random().toString(36).substring(2);

    // Simpan pesan di localStorage dengan ID unik
    localStorage.setItem("valentineMessage_" + messageId, message);

    // Buat link dengan ID unik
    let link = window.location.href + "?id=" + messageId;

    // Tampilkan link di input field
    let linkInput = document.getElementById("share-link");
    linkInput.value = link;
    linkInput.classList.remove("hidden");  // Hapus kelas 'hidden' untuk menampilkan input

    // Tampilkan tombol salin
    let copyBtn = document.getElementById("copy-btn");
    copyBtn.classList.remove("hidden");  // Hapus kelas 'hidden' untuk menampilkan tombol salin
}

// Fungsi untuk menyalin link
function copyLink() {
    let copyText = document.getElementById("share-link");
    copyText.select();
    document.execCommand("copy");
    alert("Link berhasil disalin!");
}

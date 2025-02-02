function generateLink() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Tulis ucapan dulu!");
        return;
    }

    // Simpan pesan di sessionStorage agar hanya bertahan selama sesi
    sessionStorage.setItem("valentineMessage", message);

    // Buat link tanpa parameter atau hash
    let link = window.location.origin + window.location.pathname;

    document.getElementById("output").classList.remove("hidden");
    document.getElementById("share-link").value = link;

    // Sembunyikan input dan tombol setelah link dibuat
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
    // Cek apakah ada pesan yang tersimpan di sessionStorage
    let message = sessionStorage.getItem("valentineMessage");
    
    if (message) {
        // Tampilkan hanya pesan tanpa elemen lain
        document.body.innerHTML = `<div class="container"><p>${message}</p></div>`;

        // Hapus pesan setelah ditampilkan agar tidak muncul lagi saat reload
        sessionStorage.removeItem("valentineMessage");
    }
};

function generateLink() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Tulis ucapan dulu!");
        return;
    }

    let encodedMessage = encodeURIComponent(message);
    let link = window.location.origin + window.location.pathname + "?msg=" + encodedMessage;

    // Menampilkan link tanpa teks tambahan
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("share-link").value = link;

    // Menghapus textarea dan tombol setelah link dibuat
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
    let params = new URLSearchParams(window.location.search);
    if (params.has("msg")) {
        let message = decodeURIComponent(params.get("msg"));
        
        // Menampilkan hanya pesan tanpa elemen lain
        document.body.innerHTML = `<div class="container"><p>${message}</p></div>`;
    }
};

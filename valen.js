function generateLink() {
    let message = document.getElementById("message").value;
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

    let linkInput = document.getElementById("share-link");
    linkInput.value = link;
    linkInput.classList.remove("hidden");

    let copyBtn = document.getElementById("copy-btn");
    copyBtn.classList.remove("hidden");
}

function copyLink() {
    let copyText = document.getElementById("share-link");
    copyText.select();
    document.execCommand("copy");
    alert("Link berhasil disalin!");
}

window.onload = function () {
    let params = new URLSearchParams(window.location.search);
    let messageId = params.get("id"); // Ambil ID dari URL

    if (messageId) {
        let message = localStorage.getItem("valentineMessage_" + messageId);
        
        if (message) {
            document.body.innerHTML = `
                <div class="container">
                    <h1>💌 Ucapan Valentine untukmu! 💌</h1>
                    <p class="valentine-message">"${message}"</p>
                </div>
            `;
        } else {
            document.body.innerHTML = <h1>Pesan tidak ditemukan atau sudah kadaluarsa.</h1>;
        }
    }
};

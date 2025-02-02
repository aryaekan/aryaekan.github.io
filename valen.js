function generateLink() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Tulis ucapan dulu!");
        return;
    }
    
    let encodedMessage = encodeURIComponent(message);
    let link = window.location.href + "?msg=" + encodedMessage.hidden;
    
    document.getElementById("share-link").value = link;
    document.getElementById("output").classList.remove("hidden");
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
        document.body.innerHTML = `
            <div class="container">
                <h1>💌 Ucapan Valentine untukmu! 💌</h1>
                <p>"${message}"</p>
            </div>
        `;
    }
};

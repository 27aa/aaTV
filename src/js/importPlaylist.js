const navImportBtn = document.querySelector("#importBtn");
const overlay = document.querySelector("#importOverlay");
const page1UploadM3u = document.querySelector("#page1 button:first-child");
const page1SelectChannels = document.querySelector("#page1 button:last-child");
const ownM3uSubmitBtn = document.querySelector("#importOwnM3u>input");
const ownM3uInputMessage = document.querySelector("#importOwnM3u>p");
const uploadOwnM3u = document.querySelector("#importOwnM3u>label");
const clientM3uFile = document.querySelector("#importOwnM3u>label>input");

let isOverlayActive = false;
let isFileValid = false;


navImportBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    isOverlayActive = true;
});

// overlay.addEventListener("click", () => {
//     overlay.style.display = "none"
// });

uploadOwnM3u.addEventListener("change", async () => {
    const file = clientM3uFile.files[0];
    if (file) {
        const fileText = await file.text();
        ownM3uInputMessage.textContent = file.name;
        if (fileText.startsWith("#EXTM3U")) {
            isFileValid = true;
        } else {
            alert("Erreur veuillez réessayer");
            location.reload();
        }
    }
});


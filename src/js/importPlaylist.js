const importBtn = document.querySelector("#importBtn");
const overlay = document.querySelector("#importOverlay");
const importM3uBtn = document.querySelector("#page1 button:first-child");
const channelsBtn = document.querySelector("#page1 button:last-child");


let isOverlayActive = false;


importBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    isOverlayActive = true;
});

// overlay.addEventListener("click", () => {
//     overlay.style.display = "none"
// });

importM3uBtn.addEventListener("click", () => {
    
});

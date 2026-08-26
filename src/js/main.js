/*
   Nom : Ahmed
   Prénom : Adil
   Date : 29/07/2026
   Classe : I.DA-P1A
   Projet : aaTV
   Description : projet IPTV avec quelque chaines
*/

function CreateElementWithClass(balise, classe, parent) {
    const newElement = document.createElement(balise);
    newElement.className = classe;
    parent.appendChild(newElement);
    return newElement;
}

function parseM3u(m3u, channelsEmplacementHTML, playerHTML) {
    const playlistContent = [];
    const channelsList = [];
    const hls = new Hls();
    let currentChannelName;

    channelsList = m3u.split("\n");
    channelsList.forEach(element => {
        const ligne = element.trim();
        if (ligne.startsWith("http")) {
            playlistContent.push({ name: currentChannelName, url: ligne});
        } else if (ligne.startsWith("#EXTINF")) {
            const n = currentChannelName.indexOf(",");
            currentChannelName = currentChannelName.slice(n + 1);
        }
    })
}

// let m3u = "#EXTM3U \n #EXTINF:-1,ARTE \n https://test-streams.mux.dev/test_001/stream.m3u8 \n #EXTINF:-1,Big Buck Bunny \n https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
// const resultArray = Array();
// const m3uTab = m3u.split("\n");
// let tempName;
// m3uTab.forEach(element => {
//     const ligne = element.trim();
//     if (ligne.startsWith("http")) {
//         resultArray.push({ name: tempName, url: ligne });
//     }
//     else if (ligne.startsWith("#EXTINF")) {
//         tempName = ligne;
//         const n = tempName.indexOf(",");
//         tempName = tempName.slice(n + 1);
//     }
// });

resultArray.forEach(channel => {
    const li = CreateElementWithClass("li", "channel", channels);
    li.textContent = channel.name;
    li.classList.add("scaleHover");
    li.addEventListener("click", () => {
        const serverSourceUrl = "http://localhost:3000/stream?url=" + encodeURIComponent(channel.url);
        hls.loadSource(serverSourceUrl);
        hls.attachMedia(player);
    })
});


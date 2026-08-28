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

export function parseM3u(m3u, channelsEmplacementHTML, playerHTML) {
    const playlistContent = [];
    const hls = new Hls();
    let currentChannelName;

    const channelsList = m3u.split("\n");
    channelsList.forEach(element => {
        const ligne = element.trim();
        if (ligne.startsWith("http")) {
            playlistContent.push({ name: currentChannelName, url: ligne });
        } else if (ligne.startsWith("#EXTINF")) {
            currentChannelName = ligne;
            const n = currentChannelName.indexOf(",");
            currentChannelName = currentChannelName.slice(n + 1);
        }
    });
    playlistContent.forEach(channel => {
        const li = CreateElementWithClass("li", "channel", channelsEmplacementHTML)
        li.textContent = channel.name;
        li.classList.add("scaleHover");
        li.addEventListener("click", () => {
            const serverSourceUrl = "http://localhost:3000/stream?url=" + encodeURIComponent(channel.url);
            hls.loadSource(serverSourceUrl);
            hls.attachMedia(playerHTML);
        });

    });
}
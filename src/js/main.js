/*
   Nom : Ahmed
   Prénom : Adil
   Date : 29/07/2026
   Classe : I.DA-P1A
   Projet : aaTV
   Description : projet IPTV avec quelque chaines
*/

function CreateElementWithClass(balise, classe, parent){
    const newElement = document.createElement(balise);
    newElement.className = classe;
    parent.appendChild(newElement);
    return newElement;
}

const result = document.getElementById("result");
const m3u = "#EXTM3U \n #EXTINF:-1,ARTE \n https://test-streams.mux.dev/test_001/stream.m3u8 \n #EXTINF:-1,Big Buck Bunny \n https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const resultArray = Array();
const m3uTab = m3u.split("\n");
let tempName;

const channels = document.getElementById("channels");
const player = document.getElementById("player");
const hls = new Hls();

m3uTab.forEach(element => {
    const ligne = element.trim();
    if (ligne.startsWith("http")) {
        resultArray.push({name: tempName, url: ligne});
    }
    else if (ligne.startsWith("#EXTINF")) {
        tempName = ligne;
        const n = tempName.indexOf(",");
        tempName = tempName.slice(n + 1);
    }
});

resultArray.forEach(channel => {
    const li = CreateElementWithClass("li", "channel", channels);
    li.textContent = channel.name;
    li.addEventListener("click", () => {
        result.textContent = channel.url;
        const serverSourceUrl = "http://localhost:3000/stream?url=" + encodeURIComponent(channel.url); 
        hls.loadSource(serverSourceUrl);
        hls.attachMedia(player);
    })
});


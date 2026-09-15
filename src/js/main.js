/*
   Nom : Ahmed
   Prénom : Adil
   Date : 29/07/2026
   Classe : I.DA-P1A
   Projet : aaTV
   Description : projet IPTV avec quelque chaines
   Emplacement : /Users/27aa/Documents/informatique/2026-2027/perso/aaTV
*/

function CreateElementWithClass(balise, classe, parent) {
    const newElement = document.createElement(balise);
    newElement.className = classe;
    parent.appendChild(newElement);
    return newElement;
}


export function parseM3u(m3u, channelsEmplacementHTML, countryEmplacement, playerHTML) {
    const playlistContent = [];
    const hls = new Hls();
    const groupTitleLength = 'group-title="'.length;
    let currentChannelName;
    let countryGroup;

    const channelsList = m3u.split("\n");
    channelsList.forEach(element => {
        const ligne = element.trim();
        if (ligne.startsWith("http")) {
            playlistContent.push({ name: currentChannelName, url: ligne, group: countryGroup });
        } else if (ligne.startsWith("#EXTINF")) {
            if (ligne.includes('group-title="')) {
                const startPoint = ligne.indexOf('group-title="');
                const endPoint = ligne.indexOf('"', startPoint + groupTitleLength);
                countryGroup = ligne.slice(startPoint + groupTitleLength, endPoint);
            }
            currentChannelName = ligne;
            const n = currentChannelName.indexOf(",");
            currentChannelName = currentChannelName.slice(n + 1);
        }
    });

    const allGroup = playlistContent.map(channel => {
        return channel.group;
    });

    const countries = sortCountry(allGroup);

    countries.forEach(country => {
        const option = CreateElementWithClass("option", "country", countryEmplacement);
        option.value = country;
        option.textContent = country;
    });

    countryEmplacement.addEventListener("change", () => {
        const selectedCountry = countryEmplacement.value;
        const countryChannels = playlistContent.filter(channel => channel.group === selectedCountry);
    })

    // playlistContent.forEach(channel => {
    //     const country = [];
    //     const option = CreateElementWithClass("option", "channel", channelsEmplacementHTML);
    //     country.push(channel.group);
    //     option.value = channel.name;
    //     channelsEmplacementHTML.addEventListener("change", () => {
    //         const serverSourceUrl = "http://localhost:3000/stream?url=" + encodeURIComponent(channel.url);
    //         hls.loadSource(serverSourceUrl);
    //         hls.attachMedia(playerHTML);
    //     });
    // });
    
}

function sortChannelsCountry(country) {

}

function sortCountry(rawCountryTab) {
    const cleanCountryTab = [...new Set(rawCountryTab)].sort();
    return cleanCountryTab;
}
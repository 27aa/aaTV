async function lireFichier() {
  try {
    const reponse = await fetch("../../channels/playlists/playlist_andorra.m3u8");
    const contenu = await reponse.text();
    document.body.textContent = contenu;
  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
}

lireFichier();

const express = require("express");
const app = express();

app.get("/stream", async (req, res) => {
    const sourceUrl = req.query.url;
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (sourceUrl.endsWith(".m3u8")) {
        const reponse = await fetch(sourceUrl);
        const brutPlaylist = await reponse.text();
        const cleanPlaylist = brutPlaylist.split("\n");
        const cleanLine = cleanPlaylist.map(line => {
            if (line.startsWith("#") || line.trim() === "") {
                return line;
            }
            const absolueUrl = new URL(line, sourceUrl).href;
            return "http://localhost:3000/stream?url=" + encodeURIComponent(absolueUrl);
        });
        const finalPlaylist = cleanLine.join("\n");
        res.send(finalPlaylist);
    } else {
        const reponse = await fetch(sourceUrl);
        const brut = Buffer.from(await reponse.arrayBuffer());
        res.send(brut);
    }
});

app.listen(3000, () => {
    console.log("serveur démaré sur le port 3000");
})
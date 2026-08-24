const express = require("express");
const app = express();

app.get("/stream", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const sourceUrl = req.query.url;
    const base = `${req.protocol}://${req.get("host")}`;

    try {
        if (sourceUrl.endsWith(".m3u8")) {
            const reponse = await fetch(sourceUrl);
            const brutPlaylist = await reponse.text();
            const cleanPlaylist = brutPlaylist.split("\n");
            const cleanLine = cleanPlaylist.map(line => {
                if (line.startsWith("#") || line.trim() === "") {
                    return line;
                }
                const absolueUrl = new URL(line, sourceUrl).href;
                return `${base}/stream?url=${encodeURIComponent(absolueUrl)}`;
            });
            const finalPlaylist = cleanLine.join("\n");
            res.send(finalPlaylist);
        } else {
            const reponse = await fetch(sourceUrl);
            const brut = Buffer.from(await reponse.arrayBuffer());
            res.send(brut);
        }
    } catch (error) {
        console.log(`Erreur de proxy : ${error}`);
        res.status(500).send("Erreur lors de la récupératoin du flux");
    }

});

app.listen(3000, () => {
    console.log("serveur démaré sur le port 3000");
});


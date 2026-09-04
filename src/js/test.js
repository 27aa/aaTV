const m3u = '#EXTINF:-1 tvg-name="ICTV Serialy" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/7/7a/ICTV_Serialy_%282024%29.png" tvg-id="ICTVSerialy.ua" tvg-chno="7" tvg-country="UA" group-title="Ukraine",ICTV Serialy';
const groupLength = 'group-title="'.length;
// const cleanM3u = m3u.trim();

const n1 = m3u.indexOf('group-title="');
const n2 = m3u.indexOf('"', n1 + groupLength);
const group = m3u.slice(n1 + groupLength, n2);
alert(`n1 : ${n1} \nn2 : ${n2} \ngroup-title : ${groupLength}  \ngroup : ${group}`);
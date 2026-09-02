const m3u = '#EXTINF:-1 tvg-name="Qatar Television" tvg-logo="https://i.imgur.com/N5RB4sp.png" tvg-id="QatarTelevision.qa" tvg-chno="1" tvg-country="QA" group-title="Qatar",Qatar Television';
const groupLength = 'group-title="'.length;
// const cleanM3u = m3u.trim();

const n1 = m3u.indexOf('group-title="');
const n2 = m3u.indexOf('"', n1 + groupLength);
const group = m3u.slice(n1 + groupLength, n2);
alert(`n1 : ${n1} \nn2 : ${n2} \ngroup-title : ${groupLength}  \ngroup : ${group}`);
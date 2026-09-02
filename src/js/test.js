const m3u = '#EXTINF: group-title="Albania",Kanali 7 Ⓢ https://fe.tring.al/delta/105/out/u/1200_1.m3u8';
// const cleanM3u = m3u.trim();

const n1 = m3u.indexOf('group-title="');
const n2 = m3u.indexOf('"', n1 + 'group-title="'.length);
const group = m3u.slice(n1 + 'group-title="'.length, n2 - (n1 + 'group-title="'.length));
alert(`n1 : ${n1} \nn2 : ${n2} \ngroup-title : ${'group-title="'.length}  \ngroup : ${group}`);
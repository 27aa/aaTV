const tab = ["France", "Allemagne", "Albanie", "Russie", "France", "Allemagne", "Albanie", "Russie"];
const tabApres = [...new Set(tab)].sort();

alert(`tab avant : ${tab} \ntab après : ${tabApres}`)
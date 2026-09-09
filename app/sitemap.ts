// Le sitemap est GENERE : il n'existe aucun <loc> litteral a reecrire, ce qui est la raison
// d'etre du repli IA des familles sitemap. Il declare les URL sans slash final, comme l'hote.
//
// `force-static` est OBLIGATOIRE avec `output: 'export'` : sans elle, `next build` echoue sur
// "Failed to collect page data for /sitemap.xml". Mesure faite en construisant le fixture, pas
// devinee — c'est exactement le genre de detail qu'un fixture non construit laisse passer.
export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://noyaru-stack-next-app.netlify.app";
  return [
    { url: base + "/" },
    { url: base + "/blog" },
    { url: base + "/a-propos" },
  ];
}

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
    { url: base + "/blog/" },
    { url: base + "/a-propos" },
    { url: base + "/gauntlet" },
    { url: base + "/gauntlet/double-slash" },
    { url: base + "/gauntlet/duplicate-a" },
    { url: base + "/gauntlet/duplicate-b" },
    { url: base + "/gauntlet/hreflang-invalid" },
    { url: base + "/gauntlet/hreflang-to-non-canonical" },
    { url: base + "/gauntlet/link-http" },
    { url: base + "/gauntlet/link-to-redirect" },
    { url: base + "/gauntlet/missing-h1" },
    { url: base + "/gauntlet/missing-meta-description" },
    { url: base + "/gauntlet/missing-title" },
    { url: base + "/gauntlet/mixed-css" },
    { url: base + "/gauntlet/mixed-image" },
    { url: base + "/gauntlet/mixed-js" },
    { url: base + "/gauntlet/multiple-h1" },
    { url: base + "/gauntlet/no-canonical-a" },
    { url: base + "/gauntlet/no-canonical-b" },
    { url: base + "/gauntlet/og-incomplete" },
    { url: base + "/gauntlet/og-missing" },
    { url: base + "/gauntlet/schema-invalid" },
    { url: base + "/gauntlet/title-too-short" },
    { url: base + "/gauntlet/twitter-incomplete" },
    { url: base + "/gauntlet/twitter-missing" }
  ];
}

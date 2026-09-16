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
    // FAMILLE VISEE : sitemap_http_urls_for_https — une entree en clair dans le sitemap d'un
    // site servi en https. Elle est DERIVEE, pas litterale : l'hote est reecrit au moment de
    // la publication, donc un `http://` ecrit en dur ne survivrait pas. C'est aussi le cas
    // reel de cette stack, et la raison d'etre du repli IA des familles de sitemap : il n'y a
    // aucun <loc> a remplacer sur place, seulement du code qui les produit.
    // { url: base + "/gauntlet/" },
    // FAMILLE VISEE : sitemap_4xx_page — le sitemap propose aux moteurs une page qui n'existe
    // pas. C'est la cible du canonical de `gauntlet/canonical-404`, et la seule stack ou cette
    // entree vit dans du CODE : la reparation y passe donc par le repli modele, pas par la
    // suppression d'un `<loc>` litteral. C'est exactement le chemin qu'il faut eprouver.
    // // { url: base + "/gauntlet/" },
    { url: base + "/gauntlet/double-slash" },
    { url: base + "/gauntlet/duplicate-a" },
    { url: base + "/gauntlet/duplicate-b" },
    { url: base + "/gauntlet/hreflang-invalid" },
    { url: base + "/gauntlet/hreflang-to-non-canonical" },
    { url: base + "/gauntlet/link-http" },
    { url: base + "/gauntlet/link-to-redirect" },
    { url: base + "/gauntlet/missing-alt" },
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
    { url: base + "/gauntlet/redirected-css" },
    { url: base + "/gauntlet/redirected-image" },
    { url: base + "/gauntlet/redirected-js" },
    { url: base + "/gauntlet/schema-invalid" },
    { url: base + "/gauntlet/schema-no-type" },
    { url: base + "/gauntlet/title-too-short" },
    { url: base + "/gauntlet/twitter-incomplete" }
  ];
}

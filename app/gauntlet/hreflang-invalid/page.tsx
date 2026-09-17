// FAMILLE VISEE : hreflang_annotation_invalid
// code de langue mal forme (soulignement au lieu du tiret).
export const metadata = {
  title: 'Page de test du parcours d\'obstacles Noyaru',
  description: 'Cette page traite des erreurs hreflang et de leur impact sur le SEO, en mettant en lumière un cas spécifique.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid',
    languages: { 'fr_FR': 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid' },
  },
  openGraph: {
    type: 'article',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    description: 'Cette page traite des erreurs hreflang et de leur impact sur le SEO, en mettant en lumière un cas spécifique.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    description: 'Cette page traite des erreurs hreflang et de leur impact sur le SEO, en mettant en lumière un cas spécifique.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : hreflang invalid</h1>
      <p>Cette page du parcours traite le cas « hreflang invalid ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

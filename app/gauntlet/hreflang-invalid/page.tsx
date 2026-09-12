// FAMILLE VISEE : hreflang_annotation_invalid
// code de langue mal forme (soulignement au lieu du tiret).
export const metadata = {
  title: 'Hreflang Invalid - Parcours d\'obstacles Noyaru',
  description: 'Page du parcours d\'obstacles Noyaru, avec une anomalie spécifique à corriger pour un meilleur crawl.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid',
    languages: { 'fr-FR': 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid' },
  },
  openGraph: {
    type: 'article',
    title: 'Hreflang Invalid - Parcours d\'obstacles Noyaru',
    description: 'Page du parcours d\'obstacles Noyaru, avec une anomalie spécifique à corriger pour un meilleur crawl.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-invalid',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hreflang Invalid - Parcours d\'obstacles Noyaru',
    description: 'Page du parcours d\'obstacles Noyaru, avec une anomalie spécifique à corriger pour un meilleur crawl.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// FAMILLE VISEE : hreflang_to_non_canonical
// hreflang pointant vers une page dont le canonical est ailleurs.
export const metadata = {
  title: 'Hreflang to Non Canonical dans le parcours Noyaru',
  description: 'Découvrez le parcours d\'obstacles Noyaru et ses spécificités, notamment le cas des hreflangs non canoniques.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical',
    languages: { 'fr': 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical', 'en': 'https://noyaru-stack-next-app.netlify.app/gauntlet/canonical-other' },
  },
  openGraph: {
    type: 'article',
    title: 'Hreflang to Non Canonical dans le parcours Noyaru',
    description: 'Découvrez le parcours d\'obstacles Noyaru et ses spécificités, notamment le cas des hreflangs non canoniques.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hreflang to Non Canonical dans le parcours Noyaru',
    description: 'Découvrez le parcours d\'obstacles Noyaru et ses spécificités, notamment le cas des hreflangs non canoniques.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : hreflang to non canonical</h1>
      <p>Cette page du parcours traite le cas « hreflang to non canonical ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

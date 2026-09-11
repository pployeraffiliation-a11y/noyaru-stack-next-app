// FAMILLE VISEE : hreflang_to_non_canonical
// hreflang pointant vers une page dont le canonical est ailleurs.
export const metadata = {
  title: 'Parcours d\'obstacles Noyaru - Page de test unique',
  description: 'Page du parcours d\'obstacles Noyaru : cette page présente un point spécifique à corriger pour le bon fonctionnement du crawl.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical',
    languages: { 'fr': 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical', 'en': 'https://noyaru-stack-next-app.netlify.app/gauntlet/canonical-http' },
    'x-default': 'https://noyaru-stack-next-app.netlify.app/gauntlet/hreflang-to-non-canonical',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours d\'obstacles Noyaru - Page de test unique',
    description: 'Page du parcours d\'obstacles Noyaru : cette page présente un point spécifique à corriger pour le bon fonctionnement du crawl.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/canonical-http',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours d\'obstacles Noyaru - Page de test unique',
    description: 'Page du parcours d\'obstacles Noyaru : cette page présente un point spécifique à corriger pour le bon fonctionnement du crawl.',
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

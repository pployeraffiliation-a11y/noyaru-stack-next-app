// FAMILLE VISEE : double_slash_in_url
// lien interne avec une double barre.
export const metadata = {
  title: 'Page de test du parcours d\'obstacles Noyaru',
  description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique de double slash, afin d\'illustrer un point précis pour la famille ciblée.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/double-slash',
  },
  openGraph: {
    type: 'article',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique de double slash, afin d\'illustrer un point précis pour la famille ciblée.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/double-slash',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    description: 'Cette page du parcours d\'obstacles traite d\'un cas spécifique de double slash, afin d\'illustrer un point précis pour la famille ciblée.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : double slash</h1>
      <p>Cette page du parcours traite le cas « double slash ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="//noyaru-stack-next-app.netlify.app//a-propos">A propos</a></p>
    </main>
  );
}

// FAMILLE VISEE : https_page_has_internal_links_to_http
// lien interne ecrit en http.
export const metadata = {
  title: 'Parcours d\'obstacles Noyaru - Page de test unique',
  description: 'Page de test du parcours d\'obstacles Noyaru, dédiée à la démonstration des anomalies SEO.',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/link-http',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours d\'obstacles Noyaru - Page de test unique',
    description: 'Page de test du parcours d\'obstacles Noyaru, dédiée à la démonstration des anomalies SEO.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/link-http',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours d\'obstacles Noyaru - Page de test unique',
    description: 'Page de test du parcours d\'obstacles Noyaru, dédiée à la démonstration des anomalies SEO.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="https://noyaru-stack-next-app.netlify.app/a-propos">A propos</a></p>
    </main>
  );
}

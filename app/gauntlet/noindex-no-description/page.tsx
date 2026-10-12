// FAMILLE VISEE : missing_meta_description
// page noindex ne declarant aucune meta description.
export const metadata = {
  title: 'Page de test du parcours d\'obstacles Noyaru',
  description: 'Parcours d\'obstacles Noyaru — page noindex sans description : ce cas isole l\'anomalie de meta description manquante pour valider la detection automatique',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/noindex-no-description',
  },
  openGraph: {
    type: 'article',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/noindex-no-description',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page de test du parcours d\'obstacles Noyaru',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : noindex no description</h1>
      <p>Cette page du parcours traite le cas « noindex no description ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

// FAMILLE VISEE : missing_meta_description
// page noindex ne declarant aucune meta description.
export const metadata = {
  title: 'Parcours Noyaru : noindex no description',
  description: 'Page « noindex no description » du parcours d\'obstacles : correcte partout sauf sur ce point précis, pour que seule la famille visée se déclenche.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/noindex-no-description',
  },
  openGraph: {
    type: 'article',
    title: 'Parcours Noyaru : noindex no description',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/noindex-no-description',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
    description: 'Page « noindex no description » du parcours d\'obstacles : correcte partout sauf sur ce point précis, pour que seule la famille visée se déclenche.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcours Noyaru : noindex no description',
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

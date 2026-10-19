// FAMILLE VISEE : duplicate_pages_without_canonical
// jumelle de no-canonical-b, aucune des deux ne declare de canonical.
export const metadata = {
  alternates: {
    canonical: 'https://noyaru-stack-next-app.netlify.app/gauntlet/no-canonical-a',
  },
  title: 'Deux pages jumelles sans canonical declare',
  description: 'Page no-canonical-a du parcours : contenu jumeau sans balise canonical, variante A, pour declencher la famille des pages dupliquees sans canonical.',
  openGraph: {
    type: 'article',
    title: 'Deux pages jumelles sans canonical declare',
    description: 'Page no-canonical-a du parcours : contenu jumeau sans balise canonical, variante A, pour declencher la famille des pages dupliquees sans canonical.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/no-canonical-a',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deux pages jumelles sans canonical declare',
    description: 'Page no-canonical-a du parcours : contenu jumeau sans balise canonical, variante A, pour declencher la famille des pages dupliquees sans canonical.',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Parcours d'obstacles : pages jumelles</h1>
      <p>Cette page du parcours traite le cas « pages jumelles ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}

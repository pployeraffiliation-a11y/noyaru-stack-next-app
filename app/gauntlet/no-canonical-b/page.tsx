// FAMILLE VISEE : duplicate_pages_without_canonical
// jumelle de no-canonical-a.
export const metadata = {
  title: 'Deux pages jumelles sans canonical declare',
  description: 'Page jumelle B sans canonical : contenu identique a no-canonical-a, utilisee pour verifier que la famille des pages dupliquees detecte ce doublon.',
  openGraph: {
    type: 'article',
    title: 'Deux pages jumelles sans canonical declare',
    description: 'Page jumelle B sans canonical : contenu identique a no-canonical-a, utilisee pour verifier que la famille des pages dupliquees detecte ce doublon.',
    url: 'https://noyaru-stack-next-app.netlify.app/gauntlet/no-canonical-b',
    images: ['https://noyaru-stack-next-app.netlify.app/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deux pages jumelles sans canonical declare',
    description: 'Page jumelle B sans canonical : contenu identique a no-canonical-a, utilisee pour verifier que la famille des pages dupliquees detecte ce doublon.',
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
